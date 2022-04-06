import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import checker from 'vite-plugin-checker'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'

import { join, resolve } from 'path'
export default ({ command }) =>
  defineConfig({
    base: command === 'serve' ? '' : '/build/',
    server: {
      host: 'laravel-vue-template.local',
    },
    publicDir: 'fake_dir_so_nothing_gets_copied',
    //   mode: "development",
    build: {
      manifest: true,
      outDir: './../../public/build',
      rollupOptions: {
        input: './src/main.ts',
        //   external: [],
      },
    },
    resolve: {
      alias: {
        '@': join(__dirname, './src'),
      },
    },
    plugins: [
      vue(),
      Components({
        resolvers: [HeadlessUiResolver()],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dirs: ['./src/components/auto'],
      }),
      vueI18n({
        include: resolve(__dirname, './lang/**'),
      }),
      checker({ typescript: true, vueTsc: true }), // ! Enable to see typescript errors in console on build.
      {
        name: 'blade',
        handleHotUpdate({ file, server }) {
          if (file.endsWith('.blade.php')) {
            server.ws.send({
              type: 'full-reload',
              path: '*',
            })
          }
        },
      },
    ],
    define: {
      'process.env': {},
    },
    css: {
      preprocessorOptions: {
        scss: { additionalData: ` @import "@/styles/scss/index.scss";` },
      },
    },
  })
