import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/test-ai/', // ОБЯЗАТЕЛЬНО для GitHub Pages, если репозиторий называется test-ai
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
  }
});