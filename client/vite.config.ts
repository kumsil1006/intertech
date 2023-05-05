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
      '@pdf': resolve(__dirname, './src/assets/pdf'),
      '@page': resolve(__dirname, './src/page'),
      '@util': resolve(__dirname, './src/util'),
    },
  }
});
