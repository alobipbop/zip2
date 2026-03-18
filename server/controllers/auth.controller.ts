import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/auth.service.js';
import { successResponse } from '../utils/response.js';

export class AuthController {
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.body;
            const user = await authService.login(email);
            res.json(successResponse({ user }, 'Login successful'));
        } catch (error) {
            next(error);
        }
    }

    async updateProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const user = await authService.updateUserProfile(Number(id), req.body);
            res.json(successResponse(user, 'Profile updated successfully'));
        } catch (error) {
            next(error);
        }
    }

    async healthCheck(req: Request, res: Response, next: NextFunction) {
        try {
            res.json(successResponse({ status: 'ok' }, 'Health check passed'));
        } catch (error) {
            next(error);
        }
    }
}

export const authController = new AuthController();