import pool from '../db/connection.js';
import { AppError } from '../middleware/errorHandler.js';

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

export class ReportsService {
    async getReport(goalId: number): Promise<ReportData> {
        try {
            // 1. Get goal
            const goalResult = await pool.query('SELECT * FROM goals WHERE id = $1', [goalId]);
            if (goalResult.rows.length === 0) {
                throw new AppError(404, 'Goal not found');
            }
            const goal = goalResult.rows[0];

            const startDate = new Date(goal.start_date);
            const endDate = new Date(goal.end_date);
            const totalDays = Math.max(1, Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)));

            const now = new Date();
            const daysPassed = Math.max(0, Math.ceil((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)));
            const timeProgress = Math.min(100, Math.max(0, Math.round((daysPassed / totalDays) * 100)));

            // 2. Get tasks
            const tasksResult = await pool.query(
                'SELECT * FROM tasks WHERE goal_id = $1 ORDER BY created_at ASC',
                [goalId]
            );

            // 3. For each task, get trackings and compute stats
            const taskReports: TaskReport[] = [];
            const allTrackings: { task_id: number; value: number; track_date: string }[] = [];

            for (const task of tasksResult.rows) {
                const trackingsResult = await pool.query(
                    'SELECT * FROM trackings WHERE task_id = $1 ORDER BY track_date ASC',
                    [task.id]
                );

                const trackings = trackingsResult.rows;
                allTrackings.push(...trackings.map((t: any) => ({
                    task_id: t.task_id,
                    value: Number(t.value),
                    track_date: t.track_date
                })));

                const totalTracked = trackings.reduce((sum: number, t: any) => sum + Number(t.value), 0);
                const target = Number(task.target_total) || 1;
                const progress = Math.min(100, Math.round((totalTracked / target) * 100));

                taskReports.push({
                    id: task.id,
                    title: task.title,
                    unit: task.unit,
                    target_total: Number(task.target_total) || 0,
                    totalTracked,
                    progress,
                    weight: Number(task.weight) ?? 10,
                    type_id: task.type_id
                });
            }

            // 4. Calculate overall progress
            const totalTasks = taskReports.length;
            const completedTasks = taskReports.filter(t => t.progress >= 100).length;
            const overallProgress = totalTasks > 0
                ? Math.round(taskReports.reduce((sum, t) => sum + t.progress, 0) / totalTasks)
                : 0;

            // 5. Build daily history
            const dailyMap: Record<string, number> = {};
            for (const tracking of allTrackings) {
                const dateStr = new Date(tracking.track_date).toISOString().split('T')[0];
                dailyMap[dateStr] = (dailyMap[dateStr] || 0) + tracking.value;
            }

            const sortedDates = Object.keys(dailyMap).sort();
            let cumulative = 0;
            const totalTarget = taskReports.reduce((sum, t) => sum + t.target_total, 0) || 1;

            const dailyHistory: DailyEntry[] = sortedDates.map(date => {
                cumulative += dailyMap[date];
                return {
                    date,
                    totalValue: dailyMap[date],
                    cumulativeValue: cumulative,
                    cumulativeProgress: Math.min(100, Math.round((cumulative / totalTarget) * 100))
                };
            });

            return {
                goal: {
                    id: goal.id,
                    title: goal.title,
                    description: goal.description,
                    status: goal.status,
                    start_date: goal.start_date,
                    end_date: goal.end_date,
                    totalDays
                },
                summary: {
                    totalTasks,
                    completedTasks,
                    overallProgress,
                    timeProgress
                },
                tasks: taskReports,
                dailyHistory
            };
        } catch (error) {
            if (error instanceof AppError) throw error;
            console.error('❌ Get report error:', error);
            throw new AppError(500, 'Failed to generate report');
        }
    }
}

export const reportsService = new ReportsService();
