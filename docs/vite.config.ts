import { fileURLToPath, URL } from 'url'
import type { AliasOptions } from 'vite'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import checker from 'vite-plugin-checker'

const pathResolve = (dir: string): string => fileURLToPath(new URL(dir, import.meta.url))

const alias: AliasOptions = {
  '@components': pathResolve('../src/components'),
  '@mocks': pathResolve('./mocks'),
}

export default defineConfig(() => {
  return {
    server: {
      port: 5000,
      host: true,
    },
    resolve: {
      alias: alias,
    },
    plugins: [
      AutoImport({
        imports: ['vue'],
        eslintrc: {
          enabled: true,
        },
      }),
      vueJsx(),
      checker({
        typescript: true,
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
  }
})
