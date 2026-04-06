import { withRelatedProject } from '@vercel/related-projects';

export const API_BASE_URL = withRelatedProject({
  projectName: 'books-api',
  defaultHost: 'http://localhost:4000',
});

console.log('API_BASE_URL', API_BASE_URL);