import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import { dirname } from 'path';
import { defineConfig } from 'rollup';
import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import vue from 'rollup-plugin-vue';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const plugins = [
    vue({
        css: false
    }),
    babel({
        runtimeHelpers: true,
        presets: ['@vue/babel-preset-jsx']
    }),
    alias({
        entries: {
            'element-ui': __dirname
        }
    }),
    json(),
    cleanup({
        maxEmptyLines: 1
    })
];

export default defineConfig([
    {
        input: 'src/index.js',
        output: {
            format: 'esm',
            file: 'dist/index.js'
        },
        plugins,
        logLevel: 'silent'
    },
    {
        input: 'src/index.js',
        output: {
            format: 'umd',
            file: 'dist/index.umd.js',
            name: 'ELEMENT',
            globals: {
                vue: 'Vue',
                lodash: '_'
            }
        },
        external: ['vue', 'lodash'],
        plugins: [
            ...plugins,
            nodeResolve(),
            commonjs(),
            terser(),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production')
            })
        ],
        logLevel: 'silent'
    }
]);
