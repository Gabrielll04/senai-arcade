import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import { configDefaults } from 'vitest/config';

/**
 * Versão fliperama do React Native Quest.
 *
 * O conteúdo (módulos, perguntas, demos vivas) vem do repositório do Quest,
 * clonado pelo build.sh em ./.quest no commit fixado. Nada do repositório
 * original é alterado: as adaptações acontecem só aqui, no build.
 */
const QUEST_DIR = path.resolve(import.meta.dirname, '.quest');

/**
 * As demos do Quest apontam imagens para a raiz do site ("/img/avatar.svg").
 * No SENAI Arcade o jogo vive em /games/react-native-quest/, então reescrevemos
 * para caminhos relativos no momento do build (o arquivo original não muda).
 */
function relativeQuestImages(): Plugin {
  return {
    name: 'quest-relative-images',
    enforce: 'pre',
    transform(code, id) {
      if (!id.startsWith(QUEST_DIR) || !id.endsWith('/client/src/ui/demos.tsx')) return null;
      return { code: code.replaceAll("uri: '/img/", "uri: './img/"), map: null };
    },
  };
}

export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [relativeQuestImages(), react()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      '@quest': QUEST_DIR,
      '@shared': path.join(QUEST_DIR, 'shared'),
    },
    extensions: ['.web.tsx', '.web.ts', '.web.js', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
    dedupe: ['react', 'react-dom', 'react-native-web'],
  },
  define: {
    __DEV__: JSON.stringify(mode !== 'production'),
    // o Animated do react-native-web referencia "global"
    global: 'globalThis',
  },
  server: {
    host: '127.0.0.1',
    port: 5180,
    fs: { allow: ['.'] },
  },
  build: {
    target: 'es2022',
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1200,
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
    exclude: [...configDefaults.exclude, '.quest/**'],
  },
}));
