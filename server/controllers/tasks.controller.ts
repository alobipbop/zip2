import { Request, Response, NextFunction } from 'express';
import { tasksService } from '../services/tasks.service.js';
import { successResponse } from '../utils/response.js';

export class TasksController {
    async getTasks(req: Request, res: Response, next: NextFunction) {
        try {
            const { goalId } = req.params;
            const tasks = await tasksService.getTasksByGoalId(Number(goalId));
            res.json(successResponse(tasks));
        } catch (error) {
            next(error);
        }
    }

    async createTask(req: Request, res: Response, next: NextFunction) {
        try {
            const { goalId } = req.params;
            const { typeId, title, description, unit, targetValue, targetTotal } = req.body;
            const task = await tasksService.createTask(
                Number(goalId),
                typeId,
                title,
                description,
                unit,
                targetValue,
                targetTotal
            );
            res.json(successResponse(task, 'Task created successfully'));
        } catch (error) {
            next(error);
        }
    }

    async updateTask(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { typeId, title, description, unit, targetValue, targetTotal, status } = req.body;
            const task = await tasksService.updateTask(
                Number(id),
                typeId,
                title,
                description,
                unit,
                targetValue,
                targetTotal,
                status
            );
            res.json(successResponse(task, 'Task updated successfully'));
        } catch (error) {
            next(error);
        }
    }

    async deleteTask(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            await tasksService.deleteTask(Number(id));
            res.json(successResponse(null, 'Task deleted successfully'));
        } catch (error) {
            next(error);
        }
    }
}

export const tasksController = new TasksController();