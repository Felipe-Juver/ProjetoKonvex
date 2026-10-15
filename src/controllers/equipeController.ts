import { Request, Response } from 'express';
import { EquipeService } from '../services/equipeService';
import { createEquipeSchema, updateEquipeSchema } from '../schemas/equipeSchema';

const service = new EquipeService();

export class EquipeController {
  async create(req: Request, res: Response) {
    const validation = createEquipeSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: "Erro de validação", details: validation.error.format() });
    }

    const equipe = await service.create(validation.data);
    return res.status(201).json(equipe);
  }

  async findAll(req: Request, res: Response) {
    const equipes = await service.findAll();
    return res.status(200).json(equipes);
  }

  async findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const equipe = await service.findById(id);
    if (!equipe) return res.status(404).json({ error: "Equipe não encontrada" });

    return res.status(200).json(equipe);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const validation = updateEquipeSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: "Erro de validação", details: validation.error.format() });
    }

    const updated = await service.update(id, validation.data);
    if (!updated) return res.status(404).json({ error: "Equipe não encontrada" });

    return res.status(200).json(updated);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const deleted = await service.delete(id);
    if (!deleted) return res.status(404).json({ error: "Equipe não encontrada" });

    return res.status(204).send();
  }
}