import { Router } from 'express';
import { tasksController } from '../controllers/tasks.controller.js';
import { trackingsController } from '../controllers/trackings.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = Router();

router.use(authenticate);

// Task routes
router.get('/goals/:goalId/tasks', (req, res, next) => tasksController.getTasks(req, res, next));
router.post('/goals/:goalId/tasks', (req, res, next) => tasksController.createTask(req, res, next));
router.put('/tasks/:id', (req, res, next) => tasksController.updateTask(req, res, next));
router.delete('/tasks/:id', (req, res, next) => tasksController.deleteTask(req, res, next));

// Trackings routes (nested under tasks)
router.get('/tasks/:taskId/trackings', (req, res, next) => trackingsController.getTrackings(req, res, next));
router.post('/tasks/:taskId/trackings', (req, res, next) => trackingsController.createTracking(req, res, next));

export default router;