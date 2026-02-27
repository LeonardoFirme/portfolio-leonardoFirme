// file: vite.config.ts
// description: Configuração do Vite com suporte ao Tailwind CSS v4 e caminhos de arquivos.
// author: Leonardo Firme
// version: 1.0.0

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});