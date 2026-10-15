import { PrismaClient } from '@prisma/client';

// Criamos e exportamos uma única instância do PrismaClient para ser reutilizada na aplicação inteira.
export const prisma = new PrismaClient();