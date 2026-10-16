import { defineConfig } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig(({ command }) => {
    return {
        base: command === 'build' ? '/element/' : '/',
        publicDir: 'dist',
        build: {
            outDir: 'docs',
            emptyOutDir: true
        },
        plugins: [
            createVuePlugin({ jsx: true }),
            viteExternalsPlugin({
                vue: 'Vue',
                lodash: '_',
                dayjs: 'dayjs'
            })
        ]
    };
});
