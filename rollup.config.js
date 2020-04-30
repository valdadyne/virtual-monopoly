import scss from 'rollup-plugin-scss';
import babel from 'rollup-plugin-babel';
import html2 from 'rollup-plugin-html2';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
// import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';


export default {
    input: 'src/app.js',
    output: {
        file: 'dist/bundle.min.js',
        format: 'es',
    },
    plugins: [
        scss({
            output: 'dist/bundle.min.css',
            watch: 'src/styles'
        }),
        eslint({
            exclude: [
                'node_modules/**',
                'dist/**'
            ]
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        resolve({
            browser: true,
            preferBuiltins: true
        }),
        commonjs(),
        html2({
            template: 'src/app.html',
            fileName: 'index.html',
            externals: [],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            }
        })
    ]
}