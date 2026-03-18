import { Request, Response, NextFunction } from 'express';
import { typesService } from '../services/types.service.js';
import { successResponse } from '../utils/response.js';
import { AppError } from '../middleware/errorHandler.js';

export class TypesController {
    async getTypes(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId } = req.query;
            if (!userId) throw new AppError(400, 'userId is required');
            const types = await typesService.getTypesByUserId(Number(userId));
            res.json(successResponse(types));
        } catch (error) {
            next(error);
        }
    }

    async createType(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId, name, color, weight } = req.body;
            const type = await typesService.createType(userId, name, color, weight);
            res.json(successResponse(type, 'Type created successfully'));
        } catch (error) {
            next(error);
        }
    }

    async updateType(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const { name, color, weight } = req.body;
            const type = await typesService.updateType(Number(id), name, color, weight);
            res.json(successResponse(type, 'Type updated successfully'));
        } catch (error) {
            next(error);
        }
    }

    async deleteType(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            await typesService.deleteType(Number(id));
            res.json(successResponse(null, 'Type deleted successfully'));
        } catch (error) {
            next(error);
        }
    }
}

export const typesController = new TypesController();