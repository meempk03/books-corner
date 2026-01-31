import express from 'express';
import { router } from './routers/books';
import { withRelatedProject } from '@vercel/related-projects';
 
const apiHost = withRelatedProject({
  projectName: 'my-api-project',
  /**
   * Specify a default host that will be used for my-api-project if the related project
   * data cannot be parsed or is missing.
   */
  defaultHost: process.env.HOST ?? 'localhost',
});

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

const app = express();
app.use(express.json());
app.use(router);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
