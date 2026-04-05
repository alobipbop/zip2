import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Target, CheckCircle2, Plus, Search, Settings, Send, Trash2, AlertCircle } from 'lucide-react';
import { format, differenceInDays, addDays } from 'date-fns';
import { apiFetch } from '../lib/api';

interface Goal {
  id: string;
  title: string;
  status: string;
  start_date: string;
  end_date: string;
  description?: string;
  created_at?: string;
}

interface Task {
  id: string;
  title: string;
  type_id: string;
  target_value?: number;
  target_total?: number;
  unit?: string;
  inputOption?: string;
  weight?: number;
}

interface Tracking {
  id: string;
  task_id: string;
  value: number;
  track_date: string;
}

export default function Dashboard() {
  const [activeGoal, setActiveGoal] = useState<Goal | null>(null);
  const [drafts, setDrafts] = useState<Goal[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [trackings, setTrackings] = useState<Record<string, Tracking[]>>({});
  const [loading, setLoading] = useState(true);
  const [todayValues, setTodayValues] = useState<Record<string, string>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [draftPopup, setDraftPopup] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [publishError, setPublishError] = useState('');
  const [showEarlyEndConfirm, setShowEarlyEndConfirm] = useState(false);
  const [showCompleteConfirm, setShowCompleteConfirm] = useState(false);
  const [showPostCompleteDialog, setShowPostCompleteDialog] = useState(false);
  const [completedGoalId, setCompletedGoalId] = useState<string | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const todayStr = format(new Date(), 'yyyy-MM-dd');

  useEffect(() => {
    fetchGoals();
  }, [currentUser]);

  const fetchGoals = async () => {
    if (!currentUser) return;
    try {
      const response = await apiFetch(`/api/goals?userId=${currentUser.id}`);
      if (response.ok) {
        const json = await response.json();
        const data: Goal[] = json.data;

        const active = data.find(g => g.status === 'active');
        const draftList = data.filter(g => g.status === 'draft');

        setActiveGoal(active || null);
        setDrafts(draftList);

        if (active) {
          await fetchTasksAndTrackings(active.id);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchTasksAndTrackings = async (goalId: string) => {
    try {
      const tasksRes = await apiFetch(`/api/goals/${goalId}/tasks`);
      if (tasksRes.ok) {
        const tasksJson = await tasksRes.json();
        const tasksData: Task[] = tasksJson.data;
        setTasks(tasksData);

        const trackingsMap: Record<string, Tracking[]> = {};
        for (const task of tasksData) {
          const trackingsRes = await apiFetch(`/api/tasks/${task.id}/trackings`);
          if (trackingsRes.ok) {
            const trackingsJson = await trackingsRes.json();
            trackingsMap[task.id] = trackingsJson.data;
          }
        }
        setTrackings(trackingsMap);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleTrackSubmit = async (taskId: string) => {
    let value = parseFloat(todayValues[taskId]);
    if (isNaN(value)) return;

    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    const taskTrackings = trackings[taskId] || [];
    const totalTracked = taskTrackings.reduce((sum, t) => sum + Number(t.value), 0);

    // Khống chế giá trị nhập: không làm tổng vượt quá target_total và không làm tổng rớt xuống âm
    const maxValueCanAdd = (task.target_total || 0) - totalTracked;
    const minValueCanAdd = -totalTracked;

    if (value > 0 && value > maxValueCanAdd) {
      value = maxValueCanAdd;
    } else if (value < 0 && value < minValueCanAdd) {
      value = minValueCanAdd;
    }

    if (value === 0) {
      setTodayValues(prev => ({ ...prev, [taskId]: '' }));
      return;
    }

    try {
      const response = await apiFetch(`/api/tasks/${taskId}/trackings`, {
        method: 'POST',
        body: JSON.stringify({
          value,
          trackDate: new Date().toISOString(),
          trackNote: ''
        })
      });

      if (response.ok) {
        const json = await response.json();
        const newTracking = json.data;
        setTrackings(prev => ({
          ...prev,
          [taskId]: [newTracking, ...(prev[taskId] || [])]
        }));
        setTodayValues(prev => ({ ...prev, [taskId]: '' }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const calculateTaskProgress = (task: Task) => {
    const taskTrackings = trackings[task.id] || [];
    const totalTracked = taskTrackings.reduce((sum, t) => sum + Number(t.value), 0);
    const target = task.target_total || 1;
    return Math.max(0, Math.min(100, Math.round((totalTracked / target) * 100)));
  };

  const calculateOverallProgress = () => {
    if (tasks.length === 0) return 0;
    const totalProgress = tasks.reduce((sum, task) => sum + calculateTaskProgress(task), 0);
    return Math.max(0, Math.min(100, Math.round(totalProgress / tasks.length)));
  };

  const handleCompleteGoal = async () => {
    if (!activeGoal) return;
    const goalId = activeGoal.id;
    try {
      const response = await apiFetch(`/api/goals/${goalId}`, {
        method: 'PUT',
        body: JSON.stringify({
          ...activeGoal,
          startDate: activeGoal.start_date,
          endDate: activeGoal.end_date,
          status: 'completed'
        })
      });
      if (response.ok) {
        setShowEarlyEndConfirm(false);
        setShowCompleteConfirm(false);
        setCompletedGoalId(goalId);
        setShowPostCompleteDialog(true);
        setActiveGoal(null);
        fetchGoals();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredDrafts = drafts.filter(d => d.title.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setDraftPopup(null);
      }
    };
    if (draftPopup) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [draftPopup]);

  const handleDeleteDraft = async (id: string) => {
    try {
      await apiFetch(`/api/goals/${id}`, { method: 'DELETE' });
      setDrafts(prev => prev.filter(d => d.id !== id));
    } catch (err) {
      console.error(err);
    } finally {
      setConfirmDeleteId(null);
      setDraftPopup(null);
    }
  };

  const handlePublishDraft = async (draft: Goal) => {
    setDraftPopup(null);

    // Validate dates
    const start = new Date(draft.start_date);
    const end = new Date(draft.end_date);
    const now = new Date();
    const diffDays = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    if (!draft.title?.trim()) return setPublishError('Vui lòng nhập tên kế hoạch');
    if (start >= end) return setPublishError('Ngày bắt đầu phải trước ngày kết thúc');
    if (end <= addDays(now, 7)) return setPublishError('Ngày kết thúc phải sau ít nhất 7 ngày kể từ hôm nay');
    if (diffDays < 7) return setPublishError('Khoảng thời gian tối thiểu là 7 ngày');
    if (diffDays > 365) return setPublishError('Khoảng thời gian tối đa là 365 ngày');

    // Fetch types & tasks to validate
    try {
      const [typesRes, tasksRes] = await Promise.all([
        apiFetch(`/api/types?goalId=${draft.id}`),
        apiFetch(`/api/goals/${draft.id}/tasks`)
      ]);
      const types = typesRes.ok ? (await typesRes.json()).data : [];
      const tasks = tasksRes.ok ? (await tasksRes.json()).data : [];

      if (types.length === 0) return setPublishError('Cần ít nhất một phân loại');
      if (tasks.length === 0) return setPublishError('Cần ít nhất một nhiệm vụ');
      if (tasks.some((t: any) => !t.title?.trim())) return setPublishError('Tất cả nhiệm vụ phải có tên');
      if (tasks.some((t: any) => !t.type_id)) return setPublishError('Tất cả nhiệm vụ phải có phân loại');
      if (tasks.some((t: any) => !t.target_total)) return setPublishError('Tất cả nhiệm vụ phải có chỉ tiêu');

      await apiFetch('/api/goals/save-all', {
        method: 'POST',
        body: JSON.stringify({
          userId: currentUser?.id,
          goalData: {
            id: draft.id,
            title: draft.title,
            description: draft.description,
            startDate: draft.start_date,
            endDate: draft.end_date,
            status: 'active'
          },
          types,
          tasks: tasks.map((t: any) => ({
            id: t.id,
            title: t.title,
            typeId: t.type_id,
            targetTotal: t.target_total,
            unit: t.unit,
            description: t.description,
            weight: t.weight
          }))
        })
      });

      fetchGoals();
    } catch (err) {
      console.error(err);
      setPublishError('Có lỗi xảy ra khi xuất bản');
    }
  };

  if (loading) return <div className="flex justify-center py-12">Loading dashboard...</div>;

  const overallProgress = activeGoal ? calculateOverallProgress() : 0;
  const daysRemaining = activeGoal ? differenceInDays(new Date(activeGoal.end_date), new Date()) : 0;
  const totalDays = activeGoal ? differenceInDays(new Date(activeGoal.end_date), new Date(activeGoal.start_date)) : 1;
  const daysPassed = totalDays - daysRemaining;
  const timeProgress = Math.min(100, Math.max(0, Math.round((daysPassed / totalDays) * 100)));

  return (
    <div className="space-y-16">
      {/* Active Goal Section */}
      <section>
        {!activeGoal ? (
          <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-16 text-center">
            <h2 className="text-3xl font-medium text-gray-600">Bạn không có Goal nào đang thực thi</h2>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{activeGoal.title}</h1>
                <p className="text-gray-600 mt-2">
                  {format(new Date(activeGoal.start_date), 'dd/MM/yyyy')} - {format(new Date(activeGoal.end_date), 'dd/MM/yyyy')}
                </p>
              </div>
              {overallProgress === 100 ? (
                <button
                  onClick={() => setShowCompleteConfirm(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Hoàn thành kế hoạch
                </button>
              ) : (
                <button
                  onClick={() => setShowEarlyEndConfirm(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-xl hover:bg-red-400 transition-colors"
                >
                  Kết thúc sớm
                </button>
              )}
            </div>

            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-200">
              {/* Tiến độ tổng thể */}
              <h3 className="text-lg font-medium text-gray-900 mb-2">Tiến độ chung</h3>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${overallProgress}%` }}
                  />
                </div>
                <span className="font-bold text-indigo-600 w-12 text-right">{overallProgress}%</span>
              </div>

              {/* Thời gian */}
              <div className="mt-2 pt-2 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-gray-500">Thời gian</h4>
                  <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full">
                    Còn {daysRemaining} ngày
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${timeProgress > 90 ? 'bg-red-500' : timeProgress > 70 ? 'bg-amber-500' : 'bg-emerald-500'
                        }`}
                      style={{ width: `${timeProgress}%` }}
                    />
                  </div>
                  <span className="font-semibold text-gray-400 text-xs w-10 text-right">{timeProgress}%</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900">Tracking hôm nay</h3>
              {tasks.map(task => {
                const progress = calculateTaskProgress(task);
                return (
                  <div key={task.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex flex-col sm:flex-row sm:items-center gap-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-lg">{task.title}</h4>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500">{progress}%</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        value={todayValues[task.id] || ''}
                        onChange={(e) => setTodayValues({ ...todayValues, [task.id]: e.target.value })}
                        placeholder={`${task.unit || 'đơn vị'}`}
                        className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      <button
                        onClick={() => handleTrackSubmit(task.id)}
                        className="px-4 py-2 bg-indigo-50 text-indigo-700 font-medium rounded-lg hover:bg-indigo-100 transition-colors"
                      >
                        Lưu
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Drafts Section */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <Link
            to="/goals/new"
            className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-sm w-fit"
          >
            <div className="bg-white/20 p-1 rounded-md">
              <Plus className="w-5 h-5" />
            </div>
            Tạo bản nháp mục tiêu mới
          </Link>

          <div className="relative max-w-xs w-full">
            <input
              type="text"
              placeholder="Tìm kiếm theo tên"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-10 py-3 border-b-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-600 transition-colors"
            />
            <Search className="w-5 h-5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Bản nháp</h3>
          {filteredDrafts.length === 0 ? (
            <p className="text-gray-500">Không có bản nháp nào.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDrafts.map(draft => (
                <div key={draft.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                  <div className="h-32 bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-emerald-400 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                      <Target className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col relative">
                    <Link to={`/goals/${draft.id}/edit`}>
                      <h4 className="font-bold text-xl text-gray-900 mb-1 line-clamp-1 hover:text-indigo-600 transition-colors cursor-pointer">
                        {draft.title || 'Untitled Goal'}
                      </h4>
                    </Link>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-1">{draft.description || 'Mô tả (nếu có)'}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-400">
                        Ngày sửa đổi: {draft.created_at ? format(new Date(draft.created_at), 'dd/MM/yyyy') : 'N/A'}
                      </span>
                      <button
                        onClick={() => setDraftPopup(draftPopup === draft.id ? null : draft.id)}
                        className="text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Popup menu */}
                    {draftPopup === draft.id && (
                      <div ref={popupRef} className="absolute bottom-12 right-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-3 z-10 w-52 space-y-1">
                        <Link
                          to={`/goals/${draft.id}/edit`}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 text-sm font-medium transition-colors"
                          onClick={() => setDraftPopup(null)}
                        >
                          Xem thông tin chung
                        </Link>
                        <button
                          onClick={() => handlePublishDraft(draft)}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 text-sm font-medium transition-colors"
                        >
                          <Send className="w-4 h-4" />
                          Xuất bản
                        </button>                        <button
                          onClick={() => { setConfirmDeleteId(draft.id); setDraftPopup(null); }}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                          Xóa
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Confirmation Dialog */}
      {confirmDeleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-80 text-center space-y-4">
            <Trash2 className="w-10 h-10 text-red-500 mx-auto" />
            <h3 className="text-lg font-bold text-gray-900">Xóa bản nháp?</h3>
            <p className="text-sm text-gray-500">Hành động này không thể hoàn tác.</p>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={() => handleDeleteDraft(confirmDeleteId)}
                className="flex-1 py-2.5 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Publish Error Dialog */}
      {publishError && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-80 text-center space-y-4">
            <AlertCircle className="w-10 h-10 text-red-500 mx-auto" />
            <h3 className="text-lg font-bold text-gray-900">Không thể xuất bản</h3>
            <p className="text-sm text-gray-600">{publishError}</p>
            <button
              onClick={() => setPublishError('')}
              className="w-full py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-black transition-colors"
            >
              Đã hiểu
            </button>
          </div>
        </div>
      )}

      {/* Early End Confirmation Dialog */}
      {showEarlyEndConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-96 text-center space-y-4">
            <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
            <h3 className="text-lg font-bold text-gray-900">Kết thúc sớm kế hoạch?</h3>
            <p className="text-sm text-gray-600">
              Bạn vẫn chưa hoàn thành kế hoạch. Nếu kết thúc sớm bạn sẽ không thể tiếp tục thực hiện kế hoạch này.
            </p>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowEarlyEndConfirm(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Hủy / Quay lại
              </button>
              <button
                onClick={handleCompleteGoal}
                className="flex-1 py-2.5 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
              >
                Xác nhận kết thúc
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Complete Goal Confirmation Dialog */}
      {showCompleteConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-96 text-center space-y-4">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
            <h3 className="text-lg font-bold text-gray-900">Hoàn thành kế hoạch</h3>
            <p className="text-sm text-gray-600">
              Bạn đã hoàn thành 100% kế hoạch trước thời hạn! Đánh dấu kế hoạch là hoàn thành?
            </p>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowCompleteConfirm(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Hủy / Quay lại
              </button>
              <button
                onClick={handleCompleteGoal}
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Post-Complete Dialog */}
      {showPostCompleteDialog && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-96 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <h3 className="text-lg font-bold text-gray-900">Bạn đã hoàn thành kế hoạch!</h3>
            <p className="text-sm text-gray-600">Bạn có muốn xem báo cáo không?</p>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowPostCompleteDialog(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Quay lại
              </button>
              <button
                onClick={() => {
                  setShowPostCompleteDialog(false);
                  navigate(`/reports/${completedGoalId}`);
                }}
                className="flex-1 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
              >
                Xem báo cáo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
