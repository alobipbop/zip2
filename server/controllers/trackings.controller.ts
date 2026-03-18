import { Request, Response, NextFunction } from 'express';
import { trackingsService } from '../services/trackings.service.js';
import { successResponse } from '../utils/response.js';

export class TrackingsController {
    async getTrackings(req: Request, res: Response, next: NextFunction) {
        try {
            const { taskId } = req.params;
            const trackings = await trackingsService.getTrackingsByTaskId(Number(taskId));
            res.json(successResponse(trackings));
        } catch (error) {
            next(error);
        }
    }

    async createTracking(req: Request, res: Response, next: NextFunction) {
        try {
            const { taskId } = req.params;
            const { value, trackDate, trackNote } = req.body;
            const tracking = await trackingsService.createTracking(
                Number(taskId),
                value,
                trackDate,
                trackNote
            );
            res.json(successResponse(tracking, 'Tracking created successfully'));
        } catch (error) {
            next(error);
        }
    }

    async deleteTracking(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            await trackingsService.deleteTracking(Number(id));
            res.json(successResponse(null, 'Tracking deleted successfully'));
        } catch (error) {
            next(error);
        }
    }
}

export const trackingsController = new TrackingsController();