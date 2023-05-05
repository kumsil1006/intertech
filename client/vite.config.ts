import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@container': resolve(__dirname, './src/container'),
      '@images': resolve(__dirname, './src/assets/images'),
      '@data': resolve(__dirname, './src/data'),
      '@pdf': resolve(__dirname, './src/assets/pdf'),
      '@pages': resolve(__dirname, './src/pages'),
      '@util': resolve(__dirname, './src/util'),
    },
  }
});
