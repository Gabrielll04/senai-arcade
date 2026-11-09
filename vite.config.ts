/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Build 100% estático: o resultado em dist/ é servido pelo Nginx no Raspberry Pi.
export default defineConfig({
  plugins: [react()],
  base: '/',
  // Sem fallback de SPA: o launcher não tem rotas por URL, e um jogo ausente
  // deve responder 404 (igual ao Nginx em produção) em vez de devolver index.html.
  appType: 'mpa',
  build: {
    target: 'es2022',
    sourcemap: false,
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    restoreMocks: true,
  },
});
