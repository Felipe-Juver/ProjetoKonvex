import { prisma } from '../lib/prisma';

export class EquipeService {
  // Converte a array de strings ['Ana', 'Bruno'] para "Ana,Bruno" ao salvar no SQLite
  async create(data: { lider: string; membros?: string[] }) {
    const membrosString = data.membros && data.membros.length > 0 
      ? data.membros.join(',') 
      : '';

    const equipe = await prisma.equipe.create({
      data: {
        lider: data.lider,
        membros: membrosString,
      },
    });

    return {
      ...equipe,
      membros: equipe.membros ? equipe.membros.split(',') : [],
    };
  }

  // Retorna todas as equipes convertendo a string de membros de volta para Array
  async findAll() {
    const equipes = await prisma.equipe.findMany();
    return equipes.map(e => ({
      ...e,
      membros: e.membros ? e.membros.split(',') : [],
    }));
  }

  // Busca equipe por ID
  async findById(id: number) {
    const equipe = await prisma.equipe.findUnique({ where: { id } });
    if (!equipe) return null;

    return {
      ...equipe,
      membros: equipe.membros ? equipe.membros.split(',') : [],
    };
  }

  // Atualiza líder ou membros de uma equipe
  async update(id: number, data: { lider?: string; membros?: string[] }) {
    const exists = await prisma.equipe.findUnique({ where: { id } });
    if (!exists) return null;

    const updateData: Record<string, any> = {};

    if (data.lider !== undefined) updateData.lider = data.lider;
    if (data.membros !== undefined) {
      updateData.membros = data.membros.join(',');
    }

    const updated = await prisma.equipe.update({
      where: { id },
      data: updateData,
    });

    return {
      ...updated,
      membros: updated.membros ? updated.membros.split(',') : [],
    };
  }

  // Deleta uma equipe
  async delete(id: number) {
    const exists = await prisma.equipe.findUnique({ where: { id } });
    if (!exists) return false;

    await prisma.equipe.delete({ where: { id } });
    return true;
  }
}