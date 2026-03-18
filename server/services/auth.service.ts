import pool from '../db/connection.js';
import { User } from '../types/index.js';
import { AppError } from '../middleware/errorHandler.js';

export class AuthService {
    async login(email: string): Promise<User> {
        if (!email) {
            throw new AppError(400, 'Email is required');
        }

        try {
            const result = await pool.query(
                'INSERT INTO users (email, name) VALUES ($1, $2) ON CONFLICT (email) DO UPDATE SET last_login = CURRENT_TIMESTAMP RETURNING *',
                [email, email.split('@')[0]]
            );
            return result.rows[0];
        } catch (error) {
            console.error('❌ Login error:', error);
            throw new AppError(500, 'Login failed');
        }
    }

    async updateUserProfile(userId: number, userData: Partial<User>): Promise<User> {
        try {
            const { name, age, gender} = userData;

            const result = await pool.query(
                `UPDATE users SET 
          name = COALESCE($1, name),
          age = COALESCE($2, age),
          gender = COALESCE($3, gender),
        WHERE id = $4 RETURNING *`,
                [name, age, gender, userId]
            );

            if (result.rows.length === 0) {
                throw new AppError(404, 'User not found');
            }

            return result.rows[0];
        } catch (error) {
            if (error instanceof AppError) throw error;
            console.error('❌ Update user error:', error);
            throw new AppError(500, 'Failed to update user');
        }
    }
}

export const authService = new AuthService();