import { Router } from 'express';
import { trackingsController } from '../controllers/trackings.controller.js';

const router = Router();

router.delete('/:id', (req, res, next) => trackingsController.deleteTracking(req, res, next));

export default router;