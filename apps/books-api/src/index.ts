import express from 'express';
import cors from 'cors';
import { router } from './routers/books';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

const allowedOrigins = [
  'http://localhost:3000',
  process.env.CORS_ORIGIN
];

const app = express();
app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (like curl / mobile apps)
    if (!origin) return callback(null, true);

    // allow exact matches
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // allow all Vercel preview deployments
    if (origin.endsWith('.vercel.app')) {
      return callback(null, true);
    }

    return callback(new Error(`CORS not allowed for origin: ${origin}`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(router);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
