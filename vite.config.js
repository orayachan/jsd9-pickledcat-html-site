import tailwindcss from '@tailwindcss/vite';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

let __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        checkout: resolve(__dirname, 'pages/', 'checkout.html'),
        dashboard: resolve(__dirname, 'pages/', 'dashboard.html'),
        payment: resolve(__dirname, 'pages/', 'payment.html'),
        'product-detail': resolve(__dirname, 'pages/', 'product-detail.html'),
        'sign-in': resolve(__dirname, 'pages/', 'sign-in.html'),
        'sign-up': resolve(__dirname, 'pages/', 'sign-up.html'),
      },
    },
  },
});
