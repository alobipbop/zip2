import { Router } from 'express';
import { reportsController } from '../controllers/reports.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = Router();

router.use(authenticate);

router.get('/:goalId', (req, res, next) => reportsController.getReport(req, res, next));

export default router;
