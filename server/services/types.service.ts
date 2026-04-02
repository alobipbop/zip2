import pool from '../db/connection.js';
import { TypeCategory } from '../types/index.js';
import { AppError } from '../middleware/errorHandler.js';

export class TypesService {
    async getTypesByGoalId(goalId: number): Promise<TypeCategory[]> {
        try {
            const result = await pool.query(
                'SELECT * FROM types WHERE goal_id = $1 ORDER BY created_at DESC',
                [goalId]
            );
            return result.rows;
        } catch (error) {
            console.error('❌ Get types error:', error);
            throw new AppError(500, 'Failed to fetch types');
        }
    }

    async createType(
        goalId: number,
        name: string,
        color?: string,
        weight?: number
    ): Promise<TypeCategory> {
        try {
            const result = await pool.query(
                'INSERT INTO types (goal_id, name, color, weight) VALUES ($1, $2, $3, $4) RETURNING *',
                [goalId, name, color || '#ffdac1', weight || 10]
            );
            return result.rows[0];
        } catch (error) {
            console.error('❌ Create type error:', error);
            throw new AppError(500, 'Failed to create type');
        }
    }

    async updateType(
        typeId: number,
        name?: string,
        color?: string,
        weight?: number
    ): Promise<TypeCategory> {
        try {
            const existing = await pool.query('SELECT * FROM types WHERE id = $1', [typeId]);
            if (existing.rows.length === 0) {
                throw new AppError(404, 'Type not found');
            }

            const result = await pool.query(
                'UPDATE types SET name = $1, color = $2, weight = $3 WHERE id = $4 RETURNING *',
                [
                    name ?? existing.rows[0].name,
                    color ?? existing.rows[0].color,
                    weight ?? existing.rows[0].weight,
                    typeId,
                ]
            );
            return result.rows[0];
        } catch (error) {
            if (error instanceof AppError) throw error;
            console.error('❌ Update type error:', error);
            throw new AppError(500, 'Failed to update type');
        }
    }

    async deleteType(typeId: number): Promise<void> {
        try {
            await pool.query('DELETE FROM types WHERE id = $1', [typeId]);
        } catch (error) {
            console.error('❌ Delete type error:', error);
            throw new AppError(500, 'Failed to delete type');
        }
    }
}

export const typesService = new TypesService();