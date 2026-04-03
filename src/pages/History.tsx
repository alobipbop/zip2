import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { History as HistoryIcon, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { apiFetch } from '../lib/api';

interface Goal {
  id: string;
  title: string;
  status: string;
  start_date: string;
  end_date: string;
  completeDate?: string;
}

export default function History() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    fetchHistory();
  }, [currentUser]);

  const fetchHistory = async () => {
    if (!currentUser) return;
    try {
      const response = await apiFetch(`/api/goals?userId=${currentUser.id}`);
      if (response.ok) {
        const json = await response.json();
        const data: Goal[] = json.data;
        const historyGoals = data.filter(g => ['completed', 'early_ended', 'auto_closed'].includes(g.status));
        setGoals(historyGoals.sort((a, b) => new Date(b.end_date).getTime() - new Date(a.end_date).getTime()));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="flex justify-center py-12">Đang tải lịch sử...</div>;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
          <HistoryIcon className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lịch sử kế hoạch</h1>
          <p className="text-gray-600 mt-1">Xem lại các kế hoạch đã hoàn thành của bạn.</p>
        </div>
      </div>

      {goals.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <HistoryIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">Chưa có lịch sử</h3>
          <p className="text-gray-500 mt-2">Hoàn thành một kế hoạch để xem tại đây.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {goals.map(goal => (
            <div key={goal.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{goal.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${goal.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                      goal.status === 'early_ended' ? 'bg-amber-100 text-amber-700' :
                        'bg-gray-100 text-gray-700'
                    }`}>
                    {goal.status === 'completed' ? 'HOÀN THÀNH' : goal.status === 'early_ended' ? 'KẾT THÚC SỚM' : 'TỰ ĐỘNG ĐÓNG'}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  {format(new Date(goal.start_date), 'dd/MM/yyyy')} - {format(new Date(goal.end_date), 'dd/MM/yyyy')}
                </p>
                {goal.completeDate && (
                  <p className="text-sm text-gray-500 mt-1">
                    Ngày hoàn thành: {format(new Date(goal.completeDate), 'dd/MM/yyyy')}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to={`/reports/${goal.id}`}
                  className="flex items-center gap-2 px-6 py-2 bg-indigo-500 text-white font-medium rounded-xl hover:bg-indigo-600 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Xem báo cáo
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
