import { Request, Response } from 'express';
import { ProjetoService } from '../services/projetoService';
import { createProjetoSchema, updateProjetoSchema } from '../schemas/projetoSchema';

const service = new ProjetoService();

export class ProjetoController {
  async create(req: Request, res: Response) {
    const validation = createProjetoSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: "Erro de validação", details: validation.error.format() });
    }

    const projeto = await service.create(validation.data);
    return res.status(201).json(projeto);
  }

  async findAll(req: Request, res: Response) {
    const projetos = await service.findAll();
    return res.status(200).json(projetos);
  }

  async findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const projeto = await service.findById(id);
    if (!projeto) return res.status(404).json({ error: "Projeto não encontrado" });

    return res.status(200).json(projeto);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const validation = updateProjetoSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: "Erro de validação", details: validation.error.format() });
    }

    const updated = await service.update(id, validation.data);
    if (!updated) return res.status(404).json({ error: "Projeto não encontrado" });

    return res.status(200).json(updated);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    const deleted = await service.delete(id);
    if (!deleted) return res.status(404).json({ error: "Projeto não encontrado" });

    return res.status(204).send();
  }
}