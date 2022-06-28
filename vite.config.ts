import { defineConfig } from 'vite';
import prefresh from '@prefresh/vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [prefresh()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: 'import { h, Fragment } from "preact"',
  },
  build: {
    target: "esnext",
    minify: "terser",
    lib: {
      entry: resolve(__dirname, '/src/main.tsx'),
      name: "Selectz",
      formats: ["es", "umd", "iife"],
    },
    rollupOptions: {},
  },
  resolve: {
    alias: {
      "react": "preact/compat"
    }
  }
});