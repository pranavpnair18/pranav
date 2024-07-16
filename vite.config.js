import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssConfig from './postcss.config.js'; // Update path to new file name
import tailwindcss from 'tailwindcss'


export default defineConfig({
  plugins: [ react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
  },
},
base:"/pranav/",
});