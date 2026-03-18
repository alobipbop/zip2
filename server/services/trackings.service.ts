import pool from '../db/connection.js';
import { Tracking } from '../types/index.js';
import { AppError } from '../middleware/errorHandler.js';

export class TrackingsService {
    async getTrackingsByTaskId(taskId: number): Promise<Tracking[]> {
        try {
            const result = await pool.query(
                'SELECT * FROM trackings WHERE task_id = $1 ORDER BY track_date DESC',
                [taskId]
            );
            return result.rows;
        } catch (error) {
            console.error('❌ Get trackings error:', error);
            throw new AppError(500, 'Failed to fetch trackings');
        }
    }

    async createTracking(
        taskId: number,
        value: number,
        trackDate: Date,
        trackNote?: string
    ): Promise<Tracking> {
        try {
            const result = await pool.query(
                'INSERT INTO trackings (task_id, value, track_date, track_note) VALUES ($1, $2, $3, $4) RETURNING *',
                [taskId, value, trackDate, trackNote]
            );
            return result.rows[0];
        } catch (error) {
            console.error('❌ Create tracking error:', error);
            throw new AppError(500, 'Failed to create tracking');
        }
    }

    async deleteTracking(trackingId: number): Promise<void> {
        try {
            await pool.query('DELETE FROM trackings WHERE id = $1', [trackingId]);
        } catch (error) {
            console.error('❌ Delete tracking error:', error);
            throw new AppError(500, 'Failed to delete tracking');
        }
    }
}

export const trackingsService = new TrackingsService();