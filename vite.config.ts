
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Это критично для GitHub Pages (чтобы пути были ./assets/...)
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
