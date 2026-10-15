import express from 'express';
import dotenv from 'dotenv';
import projetoRoutes from './routes/projetoRoutes';
import equipeRoutes from './routes/equipeRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Registo de rotas
app.use(projetoRoutes);
app.use(equipeRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor a rodar na porta ${PORT}`);
});