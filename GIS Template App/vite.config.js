import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
    plugins: [
        copy({
            targets: [
                {
                    src: 'node_modules/@esri/calcite-components/dist/calcite/',
                    dest: 'public/calcite'
                },
                {
                    src: 'node_modules/@arcgis/core/assets/esri/themes/light/main.css',
                    dest: 'public/assets/esri-themes/light/',
                    rename: 'main.css'
                },
                {
                    src: 'node_modules/@arcgis/core/assets/esri/themes/dark/main.css',
                    dest: 'public/assets/esri-themes/dark/',
                    rename: 'main.css'
                },
                {
                    src: './appConfig.json', 
                    dest: 'dist/'
                }
            ],

        })
    ],
    resolve: {
        alias: {

            'esriThemes': '/public/assets/esri-themes'
        }
    }
});
