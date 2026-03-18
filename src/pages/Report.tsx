import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useParams, Link } from 'react-router-dom';
import { Download, ArrowLeft, Target, CheckCircle2, TrendingUp } from 'lucide-react';
import { format } from 'date-fns';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

interface Goal {
  id: string;
  title: string;
  status: string;
  start_date: string;
  end_date: string;
  completeDate?: string;
  description?: string;
}

interface Task {
  id: string;
  title: string;
  type_id: string;
  target_total?: number;
  unit?: string;
  progress: number;
  totalTracked: number;
  weight?: number;
}

export default function Report() {
  const { id } = useParams();
  const [goal, setGoal] = useState<Goal | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [typeWeights, setTypeWeights] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    fetchReportData();
  }, [id, currentUser]);

  const fetchReportData = async () => {
    if (!currentUser || !id) return;
    try {
      const goalRes = await fetch(`/api/goals/${id}`);
      if (goalRes.ok) {
        const goalData = await goalRes.json();
        setGoal(goalData);

        const tasksRes = await fetch(`/api/goals/${id}/tasks`);
        if (tasksRes.ok) {
          const tasksData = await tasksRes.json();
          const fetchedTasks: Task[] = [];
          
          for (const task of tasksData) {
            const trackingsRes = await fetch(`/api/tasks/${task.id}/trackings`);
            let totalTracked = 0;
            if (trackingsRes.ok) {
              const trackings = await trackingsRes.json();
              totalTracked = trackings.reduce((sum: number, t: any) => sum + Number(t.value), 0);
            }
            
            const target = task.target_total || 1;
            const progress = Math.min(100, Math.round((totalTracked / target) * 100));

            fetchedTasks.push({
              id: task.id,
              title: task.title,
              type_id: task.type_id,
              target_total: task.target_total,
              unit: task.unit,
              progress,
              totalTracked,
              weight: task.weight || 10
            });
          }
          setTasks(fetchedTasks);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const calculateOverallProgress = () => {
    if (tasks.length === 0) return 0;
    
    const typeProgressMap: Record<string, { totalWeightedProgress: number; totalWeight: number }> = {};
    
    tasks.forEach(task => {
      if (!typeProgressMap[task.type_id]) {
        typeProgressMap[task.type_id] = { totalWeightedProgress: 0, totalWeight: 0 };
      }
      const taskWeight = task.weight || 10;
      typeProgressMap[task.type_id].totalWeightedProgress += task.progress * taskWeight;
      typeProgressMap[task.type_id].totalWeight += taskWeight;
    });

    let totalWeightedProgress = 0;
    let totalWeight = 0;

    Object.keys(typeProgressMap).forEach(typeId => {
      const typeData = typeProgressMap[typeId];
      const avgTypeProgress = typeData.totalWeight > 0 ? typeData.totalWeightedProgress / typeData.totalWeight : 0;
      const weight = typeWeights[typeId] || 10;
      
      totalWeightedProgress += avgTypeProgress * weight;
      totalWeight += weight;
    });

    if (totalWeight === 0) return 0;
    return Math.round(totalWeightedProgress / totalWeight);
  };

  const exportPDF = () => {
    if (!goal) return;
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text(`Kairoly Report: ${goal.title}`, 14, 22);
    
    doc.setFontSize(12);
    doc.text(`Status: ${goal.status === 'completed' ? 'HOAN THANH' : goal.status === 'early_ended' ? 'KET THUC SOM' : 'TU DONG DONG'}`, 14, 32);
    doc.text(`Period: ${format(new Date(goal.start_date), 'dd/MM/yyyy')} - ${format(new Date(goal.end_date), 'dd/MM/yyyy')}`, 14, 40);
    if (goal.completeDate) {
      doc.text(`Completed: ${format(new Date(goal.completeDate), 'dd/MM/yyyy')}`, 14, 48);
    }
    
    doc.text(`Overall Progress: ${calculateOverallProgress()}%`, 14, 56);

    const tableData = tasks.map(t => [
      t.title,
      `${t.totalTracked} / ${t.target_total} ${t.unit || ''}`,
      `${t.progress}%`
    ]);

    (doc as any).autoTable({
      startY: 65,
      head: [['Task', 'Progress', 'Completion']],
      body: tableData,
    });

    doc.save(`kairoly-report-${goal.title.replace(/\s+/g, '-').toLowerCase()}.pdf`);
  };

  if (loading) return <div className="flex justify-center py-12">Đang tải báo cáo...</div>;
  if (!goal) return <div className="flex justify-center py-12">Không tìm thấy báo cáo.</div>;

  const overallProgress = calculateOverallProgress();

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/history" className="p-3 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Báo cáo kế hoạch</h1>
            <p className="text-gray-600 mt-1">{goal.title}</p>
          </div>
        </div>
        <button
          onClick={exportPDF}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white font-medium rounded-xl hover:bg-indigo-600 transition-colors shadow-sm"
        >
          <Download className="w-5 h-5" />
          Xuất PDF
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
            <TrendingUp className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Tiến độ tổng thể</h3>
          <p className="text-5xl font-bold text-gray-900 mt-2">{overallProgress}%</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Target className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Tổng số nhiệm vụ</h3>
          <p className="text-5xl font-bold text-gray-900 mt-2">{tasks.length}</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-amber-600" />
          </div>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Trạng thái</h3>
          <p className="text-xl font-bold text-gray-900 mt-2 capitalize">
            {goal.status === 'completed' ? 'Hoàn thành' : goal.status === 'early_ended' ? 'Kết thúc sớm' : 'Tự động đóng'}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-8 py-5 border-b border-gray-200 bg-gray-50">
          <h3 className="text-xl font-bold text-gray-900">Chi tiết nhiệm vụ</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {tasks.map(task => (
            <div key={task.id} className="p-8 flex flex-col sm:flex-row sm:items-center gap-6 hover:bg-gray-50/50 transition-colors">
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 text-xl">{task.title}</h4>
                <p className="text-gray-500 mt-1">
                  Chỉ tiêu: {task.target_total} {task.unit}
                </p>
              </div>
              
              <div className="w-full sm:w-72">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-gray-700">
                    {task.totalTracked} / {task.target_total}
                  </span>
                  <span className="text-sm font-bold text-indigo-600">{task.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${task.progress >= 100 ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
