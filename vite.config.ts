import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    minify: "terser",
    lib: {
      entry: resolve(__dirname, '/src/main.tsx'),
      name: "Selectz",
      formats: ["es", "umd", "iife"],
    },
    rollupOptions: {},
  }
});