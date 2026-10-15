import { z } from 'zod';

// Validação para criação de uma nova equipe (POST /equipes)
export const createEquipeSchema = z.object({
  lider: z.string().min(1, "O campo 'lider' não pode ser vazio"),
  membros: z.array(z.string()).optional().default([]),
});

// Validação para edição de equipe (PUT /equipes/:id)
export const updateEquipeSchema = createEquipeSchema.partial();