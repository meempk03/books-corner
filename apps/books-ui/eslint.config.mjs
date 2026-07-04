import nx from '@nx/eslint-plugin';
import nextPlugin from '@next/eslint-plugin-next';
import baseConfig from '../../eslint.config.mjs';

const config = [
  ...baseConfig,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
    },
    settings: {
      next: {
        rootDir: 'apps/books-ui', 
      },
    },
  },
  ...nx.configs['flat/react-typescript'],
  {
    ignores: ['.next/**/*'],
  },
]

export default config;
