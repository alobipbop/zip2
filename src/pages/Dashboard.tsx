import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Target, CheckCircle2, Plus, Search, Settings } from 'lucide-react';
import { format, differenceInDays } from 'date-fns';

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
  const [typeWeights, setTypeWeights] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [todayValues, setTodayValues] = useState<Record<string, string>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const todayStr = format(new Date(), 'yyyy-MM-dd');

  useEffect(() => {
    fetchGoals();
  }, [currentUser]);

  const fetchGoals = async () => {
    if (!currentUser) return;
    try {
      const response = await fetch(`/api/goals?userId=${currentUser.id}`);
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
      const tasksRes = await fetch(`/api/goals/${goalId}/tasks`);
      if (tasksRes.ok) {
        const tasksJson = await tasksRes.json();
        const tasksData: Task[] = tasksJson.data;
        setTasks(tasksData);

        const trackingsMap: Record<string, Tracking[]> = {};
        for (const task of tasksData) {
          const trackingsRes = await fetch(`/api/tasks/${task.id}/trackings`);
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
    const value = parseFloat(todayValues[taskId]);
    if (isNaN(value)) return;

    try {
      const response = await fetch(`/api/tasks/${taskId}/trackings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
    return Math.min(100, Math.round((totalTracked / target) * 100));
  };

  const calculateOverallProgress = () => {
    if (tasks.length === 0) return 0;
    const totalProgress = tasks.reduce((sum, task) => sum + calculateTaskProgress(task), 0);
    return Math.round(totalProgress / tasks.length);
  };

  const handleCompleteGoal = async () => {
    if (!activeGoal) return;
    try {
      const response = await fetch(`/api/goals/${activeGoal.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...activeGoal,
          startDate: activeGoal.start_date,
          endDate: activeGoal.end_date,
          status: 'completed'
        })
      });
      if (response.ok) {
        setActiveGoal(null);
        fetchGoals();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredDrafts = drafts.filter(d => d.title.toLowerCase().includes(searchTerm.toLowerCase()));

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
                  onClick={handleCompleteGoal}
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Hoàn thành kế hoạch
                </button>
              ) : (
                <button
                  onClick={handleCompleteGoal}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Kết thúc sớm
                </button>
              )}
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              {/* Tiến độ tổng thể */}
              <h3 className="text-lg font-medium text-gray-900 mb-4">Tiến độ tổng thể</h3>
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
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium text-gray-500">Thời gian</h4>
                  <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full">
                    Còn {daysRemaining} ngày
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        timeProgress > 90 ? 'bg-red-500' : timeProgress > 70 ? 'bg-amber-500' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${timeProgress}%` }}
                    />
                  </div>
                  <span className="font-semibold text-gray-400 text-xs w-10 text-right">{timeProgress}%</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Tracking hôm nay</h3>
              {tasks.map(task => {
                const progress = calculateTaskProgress(task);
                return (
                  <div key={task.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col sm:flex-row sm:items-center gap-6">
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
                        placeholder={`Giá trị (${task.unit || 'đơn vị'})`}
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
                    {/* Placeholder for image, using a gradient to match mockup */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-emerald-400 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                      <Target className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h4 className="font-bold text-xl text-gray-900 mb-1 line-clamp-1">{draft.title || 'Untitled Goal'}</h4>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-1">{draft.description || 'Mô tả (nếu có)'}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-400">
                        Ngày sửa đổi: {draft.created_at ? format(new Date(draft.created_at), 'dd/MM/yyyy') : 'N/A'}
                      </span>
                      <Link to={`/goals/${draft.id}/edit`} className="text-gray-400 hover:text-gray-700">
                        <Settings className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
