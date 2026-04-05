import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import { Plus, Trash2, ChevronDown, Star, AlertCircle } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { apiFetch } from '../lib/api';

// Auto-resize textarea: grows with content, never scrolls
function AutoTextarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const resize = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  }, []);
  useEffect(() => { resize(); }, [props.value, resize]);
  return (
    <textarea
      ref={ref}
      rows={1}
      onInput={resize}
      style={{ overflow: 'hidden' }}
      className={className}
      {...props}
    />
  );
}

interface TaskType {
  id: string;
  name: string;
  weight?: number | null;
  color?: string;
}

interface TaskDraft {
  id?: string;
  title: string;
  typeId: string;
  targetTotal: number;
  unit: string;
  description?: string;
  note?: string;
  weight?: number;
}

export default function GoalForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'general' | 'types' | 'tasks'>('general');
  const [types, setTypes] = useState<TaskType[]>([]);
  const [newTypeName, setNewTypeName] = useState('');
  const [activeTypePopup, setActiveTypePopup] = useState<string | null>(null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(format(addDays(new Date(), 7), 'yyyy-MM-dd'));
  const [endDate, setEndDate] = useState(format(addDays(new Date(), 37), 'yyyy-MM-dd'));
  const [tasks, setTasks] = useState<TaskDraft[]>([]);
  const [error, setError] = useState('');
  const [errorDialog, setErrorDialog] = useState('');
  const [trackingPopupIndex, setTrackingPopupIndex] = useState<number | null>(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    fetchTypesAndGoal();
  }, [id, currentUser]);

  const fetchTypesAndGoal = async () => {
    if (!currentUser) return;
    try {
      if (id) {
        const goalRes = await apiFetch(`/api/goals/${id}`);
        if (goalRes.ok) {
          const json = await goalRes.json();
          const goalData = json.data;
          setTitle(goalData.title);
          setDescription(goalData.description || '');
          setStartDate(format(new Date(goalData.start_date), 'yyyy-MM-dd'));
          setEndDate(format(new Date(goalData.end_date), 'yyyy-MM-dd'));

          const typesRes = await apiFetch(`/api/types?goalId=${id}`);
          if (typesRes.ok) {
            const typesJson = await typesRes.json();
            setTypes(typesJson.data);
          }

          const tasksRes = await apiFetch(`/api/goals/${id}/tasks`);
          if (tasksRes.ok) {
            const tasksJson = await tasksRes.json();
            const tasksData = tasksJson.data;
            setTasks(tasksData.map((t: any) => ({
              id: t.id,
              title: t.title,
              typeId: t.type_id,
              targetTotal: Number(t.target_total),
              unit: t.unit,
              description: t.description,
              weight: t.weight || 10
            })));
          }
        }
      } else {
        const latestRes = await apiFetch(`/api/goals/latest?userId=${currentUser.id}`);
        if (latestRes.ok) {
          const json = await latestRes.json();
          if (json.data) {
            const typesRes = await apiFetch(`/api/types?goalId=${json.data.id}`);
            if (typesRes.ok) {
              const typesJson = await typesRes.json();
              // Auto-clone types from latest goal!
              setTypes(typesJson.data);
            }
          }
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getRandomColor = () => {
    const colors = [
      '#ffdac1', '#ffb7b2', '#ff9aa2', '#e2f0cb', '#b5ead7', '#c7ceea',
      '#f1cbff', '#cbf0ff', '#cbe2ff', '#ffe5cb', '#ffcbe6', '#d4ffcb',
      '#ffd1d1', '#fff5ba', '#baffc9', '#bae1ff', '#e8baff', '#ffbdf0'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleAddType = () => {
    if (!newTypeName.trim()) return;
    const color = getRandomColor();
    const newType = { id: 'temp_' + Date.now(), name: newTypeName.trim().slice(0, 64), color, weight: 10 };
    setTypes([newType, ...types]);
    setNewTypeName('');
  };

  const handleUpdateType = (typeId: string, updates: Partial<TaskType>) => {
    setTypes(types.map(t => t.id === typeId ? { ...t, ...updates } : t));
  };

  const handleDeleteType = (typeId: string) => {
    setTypes(types.filter(t => t.id !== typeId));
  };

  const saveGoal = async (status: string) => {
    if (!currentUser) return;
    setLoading(true);
    try {
      const goalData = {
        id,
        title,
        description,
        startDate,
        endDate,
        status
      };

      await apiFetch('/api/goals/save-all', {
        method: 'POST',
        body: JSON.stringify({
          userId: currentUser.id,
          goalData,
          types,
          tasks
        })
      });

      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Có lỗi xảy ra khi lưu');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveDraft = () => saveGoal('draft');

  const handlePublish = () => {
    if (!title.trim()) return setErrorDialog('Vui lòng nhập tên kế hoạch');
    if (types.length === 0) return setErrorDialog('Cần ít nhất một phân loại');
    if (tasks.length === 0) return setErrorDialog('Cần ít nhất một nhiệm vụ');
    if (tasks.some(t => !t.title?.trim())) return setErrorDialog('Tất cả nhiệm vụ phải có tên');
    if (tasks.some(t => !t.typeId)) return setErrorDialog('Tất cả nhiệm vụ phải có phân loại');
    if (tasks.some(t => !t.targetTotal)) return setErrorDialog('Tất cả nhiệm vụ phải có chỉ tiêu');

    const start = new Date(startDate);
    const end = new Date(endDate);
    const now = new Date();
    const minEnd = addDays(now, 7);
    const diffDays = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    if (start >= end) return setErrorDialog('Ngày bắt đầu phải trước ngày kết thúc');
    if (end <= minEnd) return setErrorDialog('Ngày kết thúc phải sau ít nhất 7 ngày kể từ hôm nay');
    if (diffDays < 7) return setErrorDialog('Khoảng thời gian tối thiểu là 7 ngày');
    if (diffDays > 365) return setErrorDialog('Khoảng thời gian tối đa là 365 ngày');

    saveGoal('active');
  };

  const addTask = (taskTitle: string) => {
    setTasks([...tasks, { title: taskTitle, typeId: types[0]?.id || '', targetTotal: 10, unit: 'lần', weight: 10 }]);
  };

  const updateTask = (index: number, field: keyof TaskDraft, value: any) => {
    const newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], [field]: value };
    setTasks(newTasks);
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  if (loading) return <div className="flex justify-center py-12">Đang tải...</div>;

  return (
    <div className="w-[95%] mx-auto bg-white min-h-[80vh] shadow-sm border border-gray-200 rounded-2xl flex flex-col">
      {/* Header */}
      <div className="p-8 border-b border-gray-200 bg-gray-50/50 rounded-t-2xl">
        <h1 className="text-3xl font-bold text-gray-900 break-words">{title || 'Tên Goal mới'}</h1>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-[#7acb98]">
        {(['general', 'types', 'tasks'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 text-center font-medium transition-colors text-lg ${activeTab === tab ? 'bg-white text-gray-900' : 'text-emerald-950 hover:bg-emerald-400'}`}
          >
            {tab === 'general' ? 'Thông tin chung' : tab === 'types' ? 'Phân loại' : 'Task'}
          </button>
        ))}
      </div>

      {error && (
        <div className="bg-red-50 border-b border-red-200 text-red-600 px-8 py-3 text-sm">
          {error}
        </div>
      )}

      {/* Validation Error Dialog */}
      {errorDialog && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-80 text-center space-y-4">
            <AlertCircle className="w-10 h-10 text-red-500 mx-auto" />
            <h3 className="text-lg font-bold text-gray-900">Không thể xuất bản</h3>
            <p className="text-sm text-gray-600">{errorDialog}</p>
            <button
              onClick={() => setErrorDialog('')}
              className="w-full py-2.5 rounded-xl bg-gray-900 text-white font-medium hover:bg-black transition-colors"
            >
              Đã hiểu
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-8 flex-1 bg-gray-50/30">
        {activeTab === 'general' && (
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tên:</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Nhập tên kế hoạch..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mô tả:</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  placeholder="Bla bla bla..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Thời gian bắt đầu:</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Thời gian kết thúc:</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'types' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center border-b-2 border-blue-500 pb-2 mb-8 gap-2">
              <input
                type="text"
                value={newTypeName}
                maxLength={64}
                onChange={(e) => setNewTypeName(e.target.value)}
                placeholder="Thêm một phân loại mới"
                className="bg-transparent border-none focus:outline-none flex-1 text-lg text-center"
                onKeyDown={(e) => { if (e.key === 'Enter') handleAddType(); }}
              />
              <span className="text-xs text-gray-400 shrink-0">{newTypeName.length}/64</span>
            </div>

            <div className="space-y-4">
              {types.map((type) => (
                <div key={type.id} className="relative">
                  {activeTypePopup === type.id ? (
                    <div className="bg-gradient-to-b from-[#ffd6c4] to-white p-4 rounded-xl shadow-sm">
                      <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setActiveTypePopup(null)}>
                        <span className="font-bold text-gray-900 break-words flex-1 mr-2">{type.name}</span>
                        <ChevronDown className="w-5 h-5 rotate-180 text-gray-900 shrink-0" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="relative w-5 h-5 rounded shadow-sm border border-gray-200 shrink-0" style={{ backgroundColor: type.color || '#000' }}>
                              <input
                                type="color"
                                value={type.color || '#000000'}
                                onChange={(e) => handleUpdateType(type.id, { color: e.target.value })}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              />
                            </div>
                            <span className="font-medium text-gray-700">Đổi màu</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                          <div className="flex items-center gap-3">
                            <Star className="w-5 h-5 text-gray-600 shrink-0" />
                            <span className="font-medium text-gray-700">Đặt weight</span>
                          </div>
                          <input
                            type="number"
                            value={type.weight ?? ''}
                            onChange={(e) => handleUpdateType(type.id, { weight: e.target.value ? Number(e.target.value) : null })}
                            className="w-20 bg-transparent text-right text-gray-400 focus:text-gray-900 focus:outline-none font-medium"
                            placeholder="Default"
                          />
                        </div>

                        <button
                          onClick={() => { handleDeleteType(type.id); setActiveTypePopup(null); }}
                          className="w-full flex items-center gap-3 p-3 bg-white/60 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-5 h-5 shrink-0" />
                          <span className="font-medium">Xóa thể loại</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="p-4 rounded-xl flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: type.color || '#ffdac1' }}
                      onClick={() => setActiveTypePopup(type.id)}
                    >
                      <span className="font-bold text-gray-900 break-words flex-1 mr-2">{type.name}</span>
                      <ChevronDown className="w-5 h-5 text-gray-700 shrink-0" />
                    </div>
                  )}
                </div>
              ))}
              {types.length === 0 && (
                <p className="text-center text-gray-500">Chưa có phân loại nào.</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="space-y-4">
            {/* Add task input */}
            <div className="flex items-center border-b-2 border-blue-500 pb-2 mb-6">
              <Plus className="w-6 h-6 text-gray-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Thêm nhiệm vụ mới, nhấn Enter để thêm"
                className="bg-transparent border-none focus:outline-none flex-1 text-lg"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                    addTask(e.currentTarget.value.trim());
                    e.currentTarget.value = '';
                  }
                }}
              />
            </div>

            {/* Table header */}
            {tasks.length > 0 && (
              <div className="grid grid-cols-19 gap-3 px-4 text-s font-bold text-gray-600 uppercase tracking-wide mb-1">
                <div className="col-span-3 text-center">Phân loại</div>
                <div className="col-span-5 text-center">Nhiệm vụ</div>
                <div className="col-span-5 text-center">Mô tả</div>
                <div className="col-span-2 text-center">Tracking</div>
                <div className="col-span-3 text-center">Ghi chú</div>
                <div className="col-span-1"></div>
              </div>
            )}

            {tasks.map((task, index) => (
              <div key={index} className="grid grid-cols-19 gap-3 items-start bg-[#e8f4f8] p-4 rounded-xl relative">

                {/* Phân loại */}
                <div className="col-span-3 flex items-start justify-center pt-1">
                  <div className="relative w-full">
                    <select
                      value={task.typeId}
                      onChange={(e) => updateTask(index, 'typeId', e.target.value)}
                      className="w-full rounded-full px-3 py-2 appearance-none font-medium text-gray-900 focus:outline-none cursor-pointer text-sm"
                      style={{ backgroundColor: types.find(t => t.id === task.typeId)?.color || '#ffdac1' }}
                    >
                      {types.length === 0 && <option value="">Thêm phân loại</option>}
                      {types.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                    </select>
                    <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-700" />
                  </div>
                </div>

                {/* Nhiệm vụ — không khung, nổi bật */}
                <div className="col-span-5">
                  <AutoTextarea
                    value={task.title}
                    maxLength={255}
                    onChange={(e) => updateTask(index, 'title', (e.target as HTMLTextAreaElement).value)}
                    placeholder="Tên nhiệm vụ"
                    className="w-full bg-transparent border-none focus:outline-none px-1 py-1 text-sm font-semibold text-gray-900 resize-none break-words text-center"
                  />
                </div>

                {/* Mô tả */}
                <div className="col-span-5">
                  <div className="bg-white/70 border border-transparent focus-within:border-indigo-300 rounded-lg px-2 pt-1.5 pb-0.5">
                    <AutoTextarea
                      value={task.description || ''}
                      maxLength={255}
                      onChange={(e) => updateTask(index, 'description', (e.target as HTMLTextAreaElement).value)}
                      placeholder="Mô tả (tuỳ chọn)"
                      className="w-full bg-transparent border-none focus:outline-none text-sm text-gray-600 resize-none break-words"
                    />
                    <div className="text-right text-[10px] text-gray-300 leading-none">{(task.description || '').length}/255</div>
                  </div>
                </div>

                {/* Set Tracking */}
                <div className="col-span-2 flex items-start justify-center pt-2">
                  <button
                    onClick={() => setTrackingPopupIndex(trackingPopupIndex === index ? null : index)}
                    className="text-sm text-gray-600 hover:text-indigo-600 font-medium transition-colors whitespace-nowrap"
                  >
                    {task.targetTotal ? `${task.targetTotal} ${task.unit || ''}` : '+ Set tracking'}
                  </button>
                </div>

                {/* Ghi chú — col-span-2 */}
                <div className="col-span-3">
                  <div className="bg-white/70 border border-transparent focus-within:border-indigo-300 rounded-lg px-2 pt-1.5 pb-0.5">
                    <AutoTextarea
                      value={task.note || ''}
                      maxLength={255}
                      onChange={(e) => updateTask(index, 'note', (e.target as HTMLTextAreaElement).value)}
                      placeholder="..."
                      className="w-full bg-transparent border-none focus:outline-none text-sm text-gray-600 resize-none break-words"
                    />
                    <div className="text-right text-[10px] text-gray-300 leading-none">{(task.note || '').length}/255</div>
                  </div>
                </div>

                {/* Delete */}
                <div className="col-span-1 flex items-start justify-center pt-2">
                  <button onClick={() => removeTask(index)} className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Tracking Popup */}
                {trackingPopupIndex === index && (
                  <div className="absolute top-full right-0 mt-2 bg-white shadow-xl rounded-2xl p-6 z-20 w-72 border border-gray-100">
                    <h3 className="text-base font-bold text-center mb-4 text-gray-900">Cài đặt Tracking</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-medium text-gray-700">Đơn vị:</label>
                        <input
                          type="text"
                          value={task.unit}
                          maxLength={20}
                          onChange={(e) => updateTask(index, 'unit', e.target.value)}
                          className="border border-gray-300 rounded-lg px-3 py-1.5 w-28 text-sm focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-medium text-gray-700">Chỉ tiêu:</label>
                        <input
                          type="number"
                          value={task.targetTotal}
                          min={0}
                          max={100}
                          onChange={(e) => {
                            let v = Number(e.target.value);
                            if (v < 0) v = 0;
                            if (v > 100) v = 100;
                            updateTask(index, 'targetTotal', v);
                          }}
                          className="border border-gray-300 rounded-lg px-3 py-1.5 w-28 text-sm focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-medium text-gray-700">Weight:</label>
                        <input
                          type="number"
                          value={task.weight || 10}
                          onChange={(e) => updateTask(index, 'weight', Number(e.target.value))}
                          className="border border-gray-300 rounded-lg px-3 py-1.5 w-28 text-sm focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                      <button
                        onClick={() => setTrackingPopupIndex(null)}
                        className="w-full py-2.5 bg-indigo-500 text-white font-medium rounded-xl mt-2 hover:bg-indigo-600 transition-colors text-sm"
                      >
                        Xong
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {tasks.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                Chưa có nhiệm vụ nào. Nhập tên nhiệm vụ ở trên và nhấn Enter để thêm.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer Buttons */}
      <div className="p-6 border-t border-gray-200 flex justify-end gap-4 bg-white rounded-b-2xl">
        <button
          onClick={handleSaveDraft}
          className="px-8 py-3 bg-[#2d2d2d] text-white font-medium rounded-xl hover:bg-black transition-colors"
        >
          Lưu bản nháp
        </button>
        <button
          onClick={handlePublish}
          className="px-8 py-3 bg-[#7b83ff] text-white font-medium rounded-xl hover:bg-indigo-500 transition-colors"
        >
          Xuất bản
        </button>
      </div>
    </div>
  );
}
