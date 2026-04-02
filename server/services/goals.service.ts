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
        endDate?: Date,
        status: string = 'active'
    ): Promise<Goal> {
        try {
            const result = await pool.query(
                'INSERT INTO goals (user_id, title, description, start_date, end_date, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                [userId, title, description, startDate, endDate, status]
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

    async getLatestGoalByUserId(userId: number): Promise<Goal | null> {
        try {
            const result = await pool.query(
                `SELECT * FROM goals WHERE user_id = $1 ORDER BY created_at DESC LIMIT 1`,
                [userId]
            );
            return result.rows.length ? result.rows[0] : null;
        } catch (error) {
            console.error('❌ Get latest goal error:', error);
            return null;
        }
    }

    async saveGoalWithEntities(
        userId: number,
        goalData: any,
        types: any[],
        tasks: any[]
    ): Promise<Goal> {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');
            
            let goalId = goalData.id;
            
            // 1. Upsert Goal
            if (goalId) {
                const existing = await client.query('SELECT * FROM goals WHERE id = $1', [goalId]);
                if (existing.rows.length === 0) throw new AppError(404, 'Goal not found');
                await client.query(
                    `UPDATE goals SET 
                        title = COALESCE($1, title), description = COALESCE($2, description),
                        start_date = COALESCE($3, start_date), end_date = COALESCE($4, end_date),
                        status = COALESCE($5, status)
                    WHERE id = $6`,
                    [goalData.title, goalData.description, goalData.startDate, goalData.endDate, goalData.status, goalId]
                );
            } else {
                const res = await client.query(
                    'INSERT INTO goals (user_id, title, description, start_date, end_date, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
                    [userId, goalData.title, goalData.description, goalData.startDate, goalData.endDate, goalData.status || 'active']
                );
                goalId = res.rows[0].id;
            }

            // 2. Clear old types (tasks will cascade automatically)
            await client.query('DELETE FROM types WHERE goal_id = $1', [goalId]);

            // 3. Insert Types and map IDs
            const typeIdMap: Record<string, number> = {};
            for (const t of types) {
                const res = await client.query(
                    'INSERT INTO types (goal_id, name, color, weight) VALUES ($1, $2, $3, $4) RETURNING id',
                    [goalId, t.name, t.color || '#ffdac1', t.weight || 10]
                );
                typeIdMap[t.id] = res.rows[0].id; // Map temp ID to real ID
            }

            // 4. Insert Tasks using mapped IDs
            for (const t of tasks) {
                const realTypeId = typeIdMap[t.typeId];
                if (!realTypeId) continue;
                await client.query(
                    'INSERT INTO tasks (goal_id, type_id, title, description, unit, target_value, target_total) VALUES ($1, $2, $3, $4, $5, $6, $7)',
                    [goalId, realTypeId, t.title, t.description, t.unit, t.targetValue || 0, t.targetTotal]
                );
            }

            await client.query('COMMIT');
            
            const finalRes = await client.query('SELECT * FROM goals WHERE id = $1', [goalId]);
            return finalRes.rows[0];
        } catch (error) {
            await client.query('ROLLBACK');
            console.error('❌ Save Goal with Entities error:', error);
            throw new AppError(500, 'Failed to save goal and entities');
        } finally {
            client.release();
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