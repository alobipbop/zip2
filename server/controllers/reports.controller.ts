import { Request, Response, NextFunction } from 'express';
import { reportsService } from '../services/reports.service.js';
import { successResponse } from '../utils/response.js';

export class ReportsController {
    async getReport(req: Request, res: Response, next: NextFunction) {
        try {
            const { goalId } = req.params;
            const report = await reportsService.getReport(Number(goalId));
            res.json(successResponse(report));
        } catch (error) {
            next(error);
        }
    }
}

export const reportsController = new ReportsController();
