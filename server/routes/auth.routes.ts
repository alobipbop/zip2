import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';

const router = Router();

router.get('/health', (req, res, next) => authController.healthCheck(req, res, next));
router.post('/register', (req, res, next) => authController.register(req, res, next));
router.post('/login', (req, res, next) => authController.login(req, res, next));
router.post('/google', (req, res, next) => authController.google(req, res, next));
router.put('/:id', (req, res, next) => authController.updateProfile(req, res, next));

export default router;