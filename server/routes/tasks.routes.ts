import { Router } from 'express';
import { tasksController } from '../controllers/tasks.controller.js';
import { trackingsController } from '../controllers/trackings.controller.js';

const router = Router();

// Task routes
router.get('/:goalId/tasks', (req, res, next) => tasksController.getTasks(req, res, next));
router.post('/:goalId/tasks', (req, res, next) => tasksController.createTask(req, res, next));
router.put('/:id', (req, res, next) => tasksController.updateTask(req, res, next));
router.delete('/:id', (req, res, next) => tasksController.deleteTask(req, res, next));

// Trackings routes (nested under tasks)
router.get('/:taskId/trackings', (req, res, next) => trackingsController.getTrackings(req, res, next));
router.post('/:taskId/trackings', (req, res, next) => trackingsController.createTracking(req, res, next));

export default router;