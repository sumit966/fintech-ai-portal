import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-html-link-for-pages': 'off',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]);
