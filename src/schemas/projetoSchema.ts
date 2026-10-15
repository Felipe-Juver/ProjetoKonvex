import { z } from 'zod';

// Validação para criação de um novo projeto (POST /projetos)
export const createProjetoSchema = z.object({
  nome: z.string().min(1, "O campo 'nome' não pode ser vazio"),
  cliente: z.string().min(1, "O campo 'cliente' não pode ser vazio"),
  dataInicio: z.number().int("dataInicio deve ser um número inteiro válido"),
  dataEntrega: z.number().int("dataEntrega deve ser um número inteiro válido"),
  idEquipe: z.number().int().optional().nullable(),
});

// Validação para edição parcial/total de um projeto (PUT /projetos/:id)
export const updateProjetoSchema = createProjetoSchema.partial().extend({
  status: z.enum(["nao iniciado", "em andamento", "concluido"]).optional(),
});