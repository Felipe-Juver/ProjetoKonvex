import { PrismaClient } from '@prisma/client';

// Criamos uma única instância do PrismaClient que será reutilizada em todo o projeto
export const prisma = new PrismaClient();