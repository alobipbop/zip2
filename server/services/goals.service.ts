import pool from '../db/connection.js';
import { Goal } from '../types/index.js';
import { AppError } from '../middleware/errorHandler.js';

export class GoalsService {
    async getGoalsByUserId(userId: number): Promise<Goal[]> {
        try {
            const result = await pool.query(
                'SELECT * FROM goals WHERE user_id = $1 ORDER BY created_at DESC',
                [userId]
            );
            return result.rows;
        } catch (error) {
            console.error('❌ Get goals error:', error);
            throw new AppError(500, 'Failed to fetch goals');
        }
    }

    async getGoalById(goalId: number): Promise<Goal> {
        try {
            const result = await pool.query('SELECT * FROM goals WHERE id = $1', [goalId]);
            if (result.rows.length === 0) {
                throw new AppError(404, 'Goal not found');
            }
            return result.rows[0];
        } catch (error) {
            if (error instanceof AppError) throw error;
            console.error('❌ Get goal error:', error);
            throw new AppError(500, 'Failed to fetch goal');
        }
    }

    async createGoal(
        userId: number,
        title: string,
        description?: string,
        startDate?: Date,
        endDate?: Date
    ): Promise<Goal> {
        try {
            const result = await pool.query(
                'INSERT INTO goals (user_id, title, description, start_date, end_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [userId, title, description, startDate, endDate]
            );
            return result.rows[0];
        } catch (error) {
            console.error('❌ Create goal error:', error);
            throw new AppError(500, 'Failed to create goal');
        }
    }

    async updateGoal(
        goalId: number,
        title?: string,
        description?: string,
        startDate?: Date,
        endDate?: Date,
        status?: string
    ): Promise<Goal> {
        try {
            const existing = await pool.query('SELECT * FROM goals WHERE id = $1', [goalId]);
            if (existing.rows.length === 0) {
                throw new AppError(404, 'Goal not found');
            }

            const result = await pool.query(
                `UPDATE goals SET 
          title = COALESCE($1, title),
          description = COALESCE($2, description),
          start_date = COALESCE($3, start_date),
          end_date = COALESCE($4, end_date),
          status = COALESCE($5, status)
        WHERE id = $6 RETURNING *`,
                [title, description, startDate, endDate, status, goalId]
            );
            return result.rows[0];
        } catch (error) {
            if (error instanceof AppError) throw error;
            console.error('❌ Update goal error:', error);
            throw new AppError(500, 'Failed to update goal');
        }
    }

    async deleteGoal(goalId: number): Promise<void> {
        try {
            await pool.query('DELETE FROM goals WHERE id = $1', [goalId]);
        } catch (error) {
            console.error('❌ Delete goal error:', error);
            throw new AppError(500, 'Failed to delete goal');
        }
    }
}

export const goalsService = new GoalsService();