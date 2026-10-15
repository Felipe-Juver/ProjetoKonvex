import { Router } from 'express';
import { EquipeController } from '../controllers/equipeController';

const router = Router();
const controller = new EquipeController();

router.post('/equipes', (req, res) => controller.create(req, res));
router.get('/equipes', (req, res) => controller.findAll(req, res));
router.get('/equipes/:id', (req, res) => controller.findById(req, res));
router.put('/equipes/:id', (req, res) => controller.update(req, res));
router.delete('/equipes/:id', (req, res) => controller.delete(req, res));

export default router;