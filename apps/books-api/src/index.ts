import express from 'express';
import cors from 'cors';
import { router } from './routers/books';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(router);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
