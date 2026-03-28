import { Router } from 'express';
import { reportsController } from '../controllers/reports.controller.js';

const router = Router();

router.get('/:goalId', (req, res, next) => reportsController.getReport(req, res, next));

export default router;
