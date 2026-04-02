import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/auth.service.js';
import { successResponse } from '../utils/response.js';

export class AuthController {
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            const result = await authService.register(email, password);
            res.status(201).json(successResponse(result, 'Đăng ký thành công'));
        } catch (error) {
            next(error);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            const result = await authService.login(email, password);
            res.json(successResponse(result, 'Đăng nhập thành công'));
        } catch (error) {
            next(error);
        }
    }

    async google(req: Request, res: Response, next: NextFunction) {
        try {
            const { token } = req.body;
            const result = await authService.googleAuth(token);
            res.json(successResponse(result, 'Đăng nhập Google thành công'));
        } catch (error) {
            next(error);
        }
    }

    async updateProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const user = await authService.updateUserProfile(Number(id), req.body);
            res.json(successResponse(user, 'Cập nhật hồ sơ thành công'));
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