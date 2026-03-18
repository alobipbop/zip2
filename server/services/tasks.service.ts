import pool from '../db/connection.js';
import { Task } from '../types/index.js';
import { AppError } from '../middleware/errorHandler.js';

export class TasksService {
    async getTasksByGoalId(goalId: number): Promise<Task[]> {
        try {
            const result = await pool.query(
                'SELECT * FROM tasks WHERE goal_id = $1 ORDER BY created_at ASC',
                [goalId]
            );
            return result.rows;
        } catch (error) {
            console.error('❌ Get tasks error:', error);
            throw new AppError(500, 'Failed to fetch tasks');
        }
    }

    async createTask(
        goalId: number,
        typeId?: number,
        title?: string,
        description?: string,
        unit?: string,
        targetValue?: number,
        targetTotal?: number
    ): Promise<Task> {
        try {
            const result = await pool.query(
                'INSERT INTO tasks (goal_id, type_id, title, description, unit, target_value, target_total) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                [goalId, typeId, title, description, unit, targetValue, targetTotal]
            );
            return result.rows[0];
        } catch (error) {
            console.error('❌ Create task error:', error);
            throw new AppError(500, 'Failed to create task');
        }
    }

    async updateTask(
        taskId: number,
        typeId?: number,
        title?: string,
        description?: string,
        unit?: string,
        targetValue?: number,
        targetTotal?: number,
        status?: number
    ): Promise<Task> {
        try {
            const existing = await pool.query('SELECT * FROM tasks WHERE id = $1', [taskId]);
            if (existing.rows.length === 0) {
                throw new AppError(404, 'Task not found');
            }

            const result = await pool.query(
                `UPDATE tasks SET 
          type_id = COALESCE($1, type_id),
          title = COALESCE($2, title),
          description = COALESCE($3, description),
          unit = COALESCE($4, unit),
          target_value = COALESCE($5, target_value),
          target_total = COALESCE($6, target_total),
          status = COALESCE($7, status)
        WHERE id = $8 RETURNING *`,
                [typeId, title, description, unit, targetValue, targetTotal, status, taskId]
            );
            return result.rows[0];
        } catch (error) {
            if (error instanceof AppError) throw error;
            console.error('❌ Update task error:', error);
            throw new AppError(500, 'Failed to update task');
        }
    }

    async deleteTask(taskId: number): Promise<void> {
        try {
            await pool.query('DELETE FROM tasks WHERE id = $1', [taskId]);
        } catch (error) {
            console.error('❌ Delete task error:', error);
            throw new AppError(500, 'Failed to delete task');
        }
    }
}

export const tasksService = new TasksService();