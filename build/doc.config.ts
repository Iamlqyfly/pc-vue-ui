import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  base: '/pc-vue-ui/docs',
  build: {
    outDir: 'docs',
  },
});
