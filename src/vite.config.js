import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
          input: {
            main: resolve(__dirname, '/src/index.html'),
            auth: resolve(__dirname, '/src/pages/login-page/login-page.html')
          }
        }
    },
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/components'),
    })],
})