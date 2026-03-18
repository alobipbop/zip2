import { Router } from 'express';
import { goalsController } from '../controllers/goals.controller.js';

const router = Router();

router.get('/', (req, res, next) => goalsController.getGoals(req, res, next));
router.get('/:id', (req, res, next) => goalsController.getGoal(req, res, next));
router.post('/', (req, res, next) => goalsController.createGoal(req, res, next));
router.put('/:id', (req, res, next) => goalsController.updateGoal(req, res, next));
router.delete('/:id', (req, res, next) => goalsController.deleteGoal(req, res, next));

export default router;