import { withRelatedProject } from '@vercel/related-projects';

export const API_BASE_URL = withRelatedProject({
  projectName: 'books-api',
  defaultHost: process.env.API_HOST || 'http://localhost:4000',
});