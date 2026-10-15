# 🚀 API Gerenciadora de Projetos e Equipes — KonvexJr

API RESTful desenvolvida para o processo seletivo da **KonvexJr**, responsável por gerenciar projetos e equipes associadas com suporte a operações de CRUD completas, validações de schema e persistência em banco de dados.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** com **TypeScript**
- **Express** (Framework Web)
- **Prisma ORM** (Mapeamento Objeto-Relacional)
- **SQLite** (Banco de Dados Relacional)
- **Zod** (Validação de schemas e dados de entrada)
- **tsx** (Executor TypeScript em ambiente de desenvolvimento)

---

## 📁 Estrutura do Projeto

```text
ProjetoKonvex/
├── prisma/
│   ├── schema.prisma   # Definição do banco de dados e modelos
│   └── dev.db          # Arquivo do banco de dados SQLite
├── src/
│   ├── controllers/    # Camada de controle de requisições HTTP
│   │   ├── equipeController.ts
│   │   └── projetoController.ts
│   ├── lib/            # Instância do Prisma Client
│   │   └── prisma.ts
│   ├── routes/         # Definição dos endpoints REST
│   │   ├── equipeRoutes.ts
│   │   └── projetoRoutes.ts
│   ├── schemas/        # Schemas de validação com Zod
│   │   ├── equipeSchema.ts
│   │   └── projetoSchema.ts
│   ├── services/       # Regras de negócio e comunicação com o banco
│   │   ├── equipeService.ts
│   │   └── projetoService.ts
│   └── app.ts          # Arquivo principal da aplicação
├── .env                # Variáveis de ambiente
├── package.json        # Dependências e scripts do projeto
├── tsconfig.json       # Configurações do TypeScript
└── README.md           # Documentação do projeto