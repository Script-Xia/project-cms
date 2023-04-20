import { defineConfig } from "vite"
import path from "path"
import vue from "@vitejs/plugin-vue"
import { createHtmlPlugin } from "vite-plugin-html"
import eslintPlugin from 'vite-plugin-eslint';
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: ""
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "src")
      },
      {
        find: "components",
        replacement: path.resolve(__dirname, "@/components")
      }
    ],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
  },
  plugins: [
    vue(),
    createHtmlPlugin({
      inject: {
        data: {
          title: "project_cms"
        }
      }
    }),
    eslintPlugin({
			include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
		}),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [ElementPlusResolver()],
      dts: "src/components.d.ts"
    })
  ],
  build: {}
})
