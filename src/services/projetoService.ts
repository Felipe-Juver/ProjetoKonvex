import { prisma } from '../lib/prisma';

export class ProjetoService {
  // Cria um novo projeto com status "nao iniciado" por padrão
  async create(data: { nome: string; cliente: string; dataInicio: number; dataEntrega: number; idEquipe?: number | null }) {
    return await prisma.projeto.create({
      data: {
        nome: data.nome,
        cliente: data.cliente,
        dataInicio: data.dataInicio,
        dataEntrega: data.dataEntrega,
        status: "nao iniciado", // Regra do edital: sempre entra como 'nao iniciado'
        idEquipe: data.idEquipe ?? null,
      },
    });
  }

  // Retorna a lista completa de projetos
  async findAll() {
    return await prisma.projeto.findMany();
  }

  // Busca um projeto por ID
  async findById(id: number) {
    return await prisma.projeto.findUnique({ where: { id } });
  }

  // Atualiza um projeto existente (edição parcial ou total)
  async update(id: number, data: Record<string, any>) {
    const exists = await prisma.projeto.findUnique({ where: { id } });
    if (!exists) return null;

    // Regra do edital: id nunca é alterado (se vier no body, ignoramos)
    delete data.id;

    return await prisma.projeto.update({
      where: { id },
      data,
    });
  }

  // Remove um projeto do sistema
  async delete(id: number) {
    const exists = await prisma.projeto.findUnique({ where: { id } });
    if (!exists) return false;

    await prisma.projeto.delete({ where: { id } });
    return true;
  }
}