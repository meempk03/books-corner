import express from 'express';
import { router } from './routers/books';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

const app = express();
app.use(express.json());
app.use(router);

// export default app;

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
