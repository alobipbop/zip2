import { Router } from 'express';
import { goalsController } from '../controllers/goals.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = Router();

router.use(authenticate);

router.get('/', (req, res, next) => goalsController.getGoals(req, res, next));
router.get('/latest', (req, res, next) => goalsController.getLatest(req, res, next));
router.post('/save-all', (req, res, next) => goalsController.saveAll(req, res, next));

router.get('/:id', (req, res, next) => goalsController.getGoal(req, res, next));
router.post('/', (req, res, next) => goalsController.createGoal(req, res, next));
router.put('/:id', (req, res, next) => goalsController.updateGoal(req, res, next));
router.delete('/:id', (req, res, next) => goalsController.deleteGoal(req, res, next));

export default router;