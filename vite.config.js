import { defineConfig } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig(() => {
    return {
        publicDir: 'dist',
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
