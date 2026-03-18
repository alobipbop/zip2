import { Router } from 'express';
import { typesController } from '../controllers/types.controller.js';

const router = Router();

router.get('/', (req, res, next) => typesController.getTypes(req, res, next));
router.post('/', (req, res, next) => typesController.createType(req, res, next));
router.put('/:id', (req, res, next) => typesController.updateType(req, res, next));
router.delete('/:id', (req, res, next) => typesController.deleteType(req, res, next));

export default router;