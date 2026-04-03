import { Router } from 'express';
import { trackingsController } from '../controllers/trackings.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = Router();

router.use(authenticate);

router.delete('/:id', (req, res, next) => trackingsController.deleteTracking(req, res, next));

export default router;