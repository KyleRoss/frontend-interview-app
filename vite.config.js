import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ['react', 'react-dom'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
});
