import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, ArrowLeft, Target, CheckCircle2, TrendingUp, Calendar, BarChart3, Clock, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, Legend
} from 'recharts';
import { motion } from 'motion/react';
import { apiFetch } from '../lib/api';

interface TaskReport {
  id: number;
  title: string;
  unit: string | null;
  target_total: number;
  totalTracked: number;
  progress: number;
  weight: number;
  type_id: number | null;
}

interface DailyEntry {
  date: string;
  totalValue: number;
  cumulativeValue: number;
  cumulativeProgress: number;
}

interface ReportData {
  goal: {
    id: number;
    title: string;
    description: string | null;
    status: string;
    start_date: string;
    end_date: string;
    totalDays: number;
  };
  summary: {
    totalTasks: number;
    completedTasks: number;
    overallProgress: number;
    timeProgress: number;
  };
  tasks: TaskReport[];
  dailyHistory: DailyEntry[];
}

const statusLabel = (status: string) => {
  switch (status) {
    case 'completed': return 'Hoàn thành';
    case 'early_ended': return 'Kết thúc sớm';
    case 'auto_closed': return 'Tự động đóng';
    default: return status;
  }
};

const statusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'bg-emerald-100 text-emerald-700';
    case 'early_ended': return 'bg-amber-100 text-amber-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

export default function Report() {
  const { id } = useParams();
  const [report, setReport] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReport();
  }, [id]);

  const fetchReport = async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const res = await apiFetch(`/api/reports/${id}`);
      if (res.ok) {
        const json = await res.json();
        setReport(json.data);
      } else {
        setError('Không thể tải báo cáo.');
      }
    } catch (err) {
      console.error(err);
      setError('Lỗi kết nối. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  const exportPDF = () => {
    if (!report) return;
    const doc = new jsPDF();
    const { goal, summary, tasks } = report;

    doc.setFontSize(20);
    doc.text(`Kairoly Report: ${goal.title}`, 14, 22);

    doc.setFontSize(12);
    doc.text(`Trang thai: ${statusLabel(goal.status)}`, 14, 34);
    doc.text(`Thoi gian: ${format(new Date(goal.start_date), 'dd/MM/yyyy')} - ${format(new Date(goal.end_date), 'dd/MM/yyyy')}`, 14, 42);
    doc.text(`Tong ngay: ${goal.totalDays} ngay`, 14, 50);
    doc.text(`Tien do tong the: ${summary.overallProgress}%`, 14, 58);
    doc.text(`Nhiem vu hoan thanh: ${summary.completedTasks} / ${summary.totalTasks}`, 14, 66);
    doc.text(`Thoi gian da qua: ${summary.timeProgress}%`, 14, 74);

    const tableData = tasks.map(t => [
      t.title,
      `${t.totalTracked} / ${t.target_total} ${t.unit || ''}`,
      `${t.progress}%`
    ]);

    (doc as any).autoTable({
      startY: 84,
      head: [['Nhiem vu', 'Tien do', 'Hoan thanh']],
      body: tableData,
    });

    doc.save(`kairoly-report-${goal.title.replace(/\s+/g, '-').toLowerCase()}.pdf`);
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <Loader2 className="w-10 h-10 text-indigo-500" />
        </motion.div>
        <p className="text-gray-500 font-medium">Đang tải báo cáo...</p>
      </div>
    );
  }

  // Error state
  if (error || !report) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <p className="text-red-500 font-medium">{error || 'Không tìm thấy báo cáo.'}</p>
        <Link to="/history" className="text-indigo-600 hover:underline font-medium">← Quay lại lịch sử</Link>
      </div>
    );
  }

  const { goal, summary, tasks, dailyHistory } = report;

  // Data for plan vs actual chart
  const comparisonData = [
    { name: 'Thời gian đã qua', value: summary.timeProgress, fill: '#f59e0b' },
    { name: 'Tiến độ thực tế', value: summary.overallProgress, fill: '#6366f1' },
  ];

  // Chart data with formatted dates
  const chartData = dailyHistory.map(d => ({
    ...d,
    dateLabel: format(new Date(d.date), 'dd/MM')
  }));

  return (
    <motion.div
      className="max-w-5xl mx-auto space-y-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ===== HEADER ===== */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <Link to="/history" className="p-3 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Báo cáo kế hoạch</h1>
            <div className="flex items-center gap-3 mt-1">
              <p className="text-gray-600">{goal.title}</p>
              <span className={`px-3 py-0.5 rounded-full text-xs font-bold uppercase ${statusColor(goal.status)}`}>
                {statusLabel(goal.status)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={exportPDF}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white font-medium rounded-xl hover:bg-indigo-600 transition-colors shadow-sm"
          >
            <Download className="w-5 h-5" />
            Xuất PDF
          </button>
          <Link
            to="/history"
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
          >
            Quay lại
          </Link>
        </div>
      </div>

      {/* ===== OVERVIEW CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-3">
            <TrendingUp className="w-7 h-7 text-indigo-600" />
          </div>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Tiến độ tổng thể</h3>
          <p className="text-4xl font-bold text-gray-900 mt-1">{summary.overallProgress}%</p>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
            <CheckCircle2 className="w-7 h-7 text-emerald-600" />
          </div>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Nhiệm vụ hoàn thành</h3>
          <p className="text-4xl font-bold text-gray-900 mt-1">
            {summary.completedTasks}<span className="text-lg text-gray-400 font-normal"> / {summary.totalTasks}</span>
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
            <Calendar className="w-7 h-7 text-blue-600" />
          </div>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Tổng số ngày</h3>
          <p className="text-4xl font-bold text-gray-900 mt-1">{goal.totalDays}</p>
          <p className="text-xs text-gray-400 mt-1">
            {format(new Date(goal.start_date), 'dd/MM/yyyy')} → {format(new Date(goal.end_date), 'dd/MM/yyyy')}
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-3">
            <Clock className="w-7 h-7 text-amber-600" />
          </div>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Thời gian đã qua</h3>
          <p className="text-4xl font-bold text-gray-900 mt-1">{summary.timeProgress}%</p>
        </motion.div>
      </div>

      {/* ===== DAILY PROGRESS CHART ===== */}
      {chartData.length > 0 && (
        <motion.div
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Biểu đồ tiến độ theo ngày</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="dateLabel" tick={{ fontSize: 12 }} stroke="#9ca3af" />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} stroke="#9ca3af" unit="%" />
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                formatter={(value: number) => [`${value}%`, 'Tiến độ tích lũy']}
                labelFormatter={(label) => `Ngày: ${label}`}
              />
              <Line
                type="monotone"
                dataKey="cumulativeProgress"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 4, fill: '#6366f1' }}
                activeDot={{ r: 6, fill: '#4f46e5' }}
                name="Tiến độ tích lũy"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      )}

      {/* ===== TASK BREAKDOWN ===== */}
      <motion.div
        className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <div className="px-8 py-5 border-b border-gray-200 bg-gray-50 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Chi tiết nhiệm vụ</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {tasks.map((task, index) => (
            <motion.div
              key={task.id}
              className="p-6 flex flex-col sm:flex-row sm:items-center gap-5 hover:bg-gray-50/50 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
            >
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 text-lg truncate">{task.title}</h4>
                <p className="text-gray-500 mt-1 text-sm">
                  Chỉ tiêu: <span className="font-medium">{task.target_total} {task.unit || ''}</span>
                </p>
              </div>

              <div className="w-full sm:w-80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-gray-700">
                    {task.totalTracked} / {task.target_total}
                    {task.unit ? ` ${task.unit}` : ''}
                  </span>
                  <span className={`text-sm font-bold ${task.progress >= 100 ? 'text-emerald-600' : 'text-indigo-600'}`}>
                    {task.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${task.progress >= 100 ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(task.progress, 100)}%` }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.05 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
          {tasks.length === 0 && (
            <div className="p-8 text-center text-gray-400">Không có nhiệm vụ nào.</div>
          )}
        </div>
      </motion.div>

      {/* ===== PLAN VS ACTUAL ===== */}
      <motion.div
        className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-amber-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">So sánh Kế hoạch vs Thực tế</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Bars */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Thời gian đã qua</span>
                <span className="text-sm font-bold text-amber-600">{summary.timeProgress}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-amber-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${summary.timeProgress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Tiến độ thực tế</span>
                <span className="text-sm font-bold text-indigo-600">{summary.overallProgress}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-indigo-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${summary.overallProgress}%` }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </div>
            </div>
          </div>

          {/* Summary text */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Đánh giá</h4>
            {summary.overallProgress >= summary.timeProgress ? (
              <div>
                <p className="text-emerald-700 font-semibold text-lg">🚀 Vượt tiến độ!</p>
                <p className="text-gray-600 mt-2 text-sm">
                  Tiến độ thực tế ({summary.overallProgress}%) đang nhanh hơn thời gian đã qua ({summary.timeProgress}%).
                  Tuyệt vời, hãy tiếp tục phát huy!
                </p>
              </div>
            ) : (
              <div>
                <p className="text-amber-700 font-semibold text-lg">⏰ Cần tăng tốc</p>
                <p className="text-gray-600 mt-2 text-sm">
                  Tiến độ thực tế ({summary.overallProgress}%) đang chậm hơn thời gian đã qua ({summary.timeProgress}%).
                  Hãy cố gắng tăng cường nỗ lực để bắt kịp kế hoạch!
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
