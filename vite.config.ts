import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '~bootstrap': path.resolve(__dirname, './node_modules/bootstrap'),
            '~vue-simple-calendar': path.resolve(
                __dirname,
                './node_modules/vue-simple-calendar'
            ),
        },
    },
});
