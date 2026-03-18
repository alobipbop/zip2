import { Request, Response, NextFunction } from 'express';
import { goalsService } from '../services/goals.service.js';
import { successResponse } from '../utils/response.js';
import { AppError } from '../middleware/errorHandler.js';

export class GoalsController {
    async getGoals(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId } = req.query;
            if (!userId) throw new AppError(400, 'userId is required');
            const goals = await goalsService.getGoalsByUserId(Number(userId));
            res.json(successResponse(goals));
        } catch (error) {
            next(error);
        }
    }

    async getGoal(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const goal = await goalsService.getGoalById(Number(id));
            res.json(successResponse(goal));
        } catch (error) {
            next(error);
        }
    }

    async createGoal(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId, title, description, startDate, endDate } = req.body;
            const goal = await goalsService.createGoal(userId, title, description, startDate, endDate);
            res.json(successResponse(goal, 'Goal created successfully'));
        } catch (error) {
            next(error);
        }
    }

    async updateGoal(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { title, description, startDate, endDate, status } = req.body;
            const goal = await goalsService.updateGoal(Number(id), title, description, startDate, endDate, status);
            res.json(successResponse(goal, 'Goal updated successfully'));
        } catch (error) {
            next(error);
        }
    }

    async deleteGoal(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            await goalsService.deleteGoal(Number(id));
            res.json(successResponse(null, 'Goal deleted successfully'));
        } catch (error) {
            next(error);
        }
    }
}

export const goalsController = new GoalsController();