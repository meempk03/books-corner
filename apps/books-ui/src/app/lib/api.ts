import { withRelatedProject } from '@vercel/related-projects';

export const API_BASE_URL = withRelatedProject({
  projectName: 'books-api',
  defaultHost: 'http://localhost:4000',
});

const getApiUrl = () => {
    // In production with linked projects, use the VERCEL_PROJECT_PRODUCTION_URL
    if (process.env.VERCEL_ENV === 'production') {
      return process.env.NEXT_PUBLIC_API_URL;
    }
    
    // In preview/development
    if (process.env.VERCEL_ENV === 'preview') {
      return process.env.NEXT_PUBLIC_API_URL;
    }
    
    // Local development
    return 'http://localhost:4000';
  };
  
  export const API_URL = getApiUrl();