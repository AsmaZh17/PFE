import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from "@tailwindcss/vite";
import tailwindScrollbar from "tailwind-scrollbar";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    tailwindcss({
      config: {
        darkMode: "class",
        theme: {
          extend: {
            screens: {
              'w-990': '990px',
            },
            colors: {
              contentLight: '#f5f5f5',
              contentDark: '#121313',
              customLight: '#FFFFFF',
              customDark: '#171818',
              bgLight: '#E6E6FA',
              bgDark: '#6652921a',
              borderDark: '#21172a',
              purpleLight: '#665292FF',
              purple: '#693679',
              purpleDark: '#72658F1A',
              grayDark: '#898989',
              borderGrayDark: '#26262e',
              borderGrayLight: '#cbcbd3'
            },
          },
        },
        plugins: [tailwindScrollbar],
      },
    }),
    react(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
