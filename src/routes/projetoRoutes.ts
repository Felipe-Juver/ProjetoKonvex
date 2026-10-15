import { Router } from 'express';
import { ProjetoController } from '../controllers/projetoController';

const router = Router();
const controller = new ProjetoController();

router.post('/projetos', (req, res) => controller.create(req, res));
router.get('/projetos', (req, res) => controller.findAll(req, res));
router.get('/projetos/:id', (req, res) => controller.findById(req, res));
router.put('/projetos/:id', (req, res) => controller.update(req, res));
router.delete('/projetos/:id', (req, res) => controller.delete(req, res));

export default router;