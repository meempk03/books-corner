import { withRelatedProject } from '@vercel/related-projects';

const getApiUrl = () => {
  // In production with linked projects, use the VERCEL_PROJECT_PRODUCTION_URL
  if (process.env.VERCEL_ENV === 'production') {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  // In preview/development
  if (process.env.VERCEL_ENV === 'preview') {
    return process.env.VERCEL_BRANCH_URL;
  }
  console.log('API URL info:', process.env.NEXT_PUBLIC_API_URL, process.env.VERCEL_BRANCH_URL, process.env.VERCEL_RELATED_PROJECTS,
    process.env.VERCEL_ENV, process.env.VERCEL_PROJECT_PRODUCTION_URL
  );
  // Local development
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
};

export const API_URL = getApiUrl();


export const API_URL_BASE = withRelatedProject({
  projectName: 'books-api', // must match Vercel project name
  defaultHost: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000', // fallback for local
});