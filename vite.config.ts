import { defineConfig } from "vite"
import path from "path"
import vue from "@vitejs/plugin-vue"
import { createHtmlPlugin } from "vite-plugin-html"
import eslintPlugin from "vite-plugin-eslint"
// ElementPlus 图标自动导入
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
// vite 自动导入组件
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
// ElementPlus 组件自动导入
// @ts-ignore GitHub官方issue没有解决，暂时忽略
import ElementPlus from "unplugin-element-plus/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

const pathSrc = path.resolve(__dirname, "src")

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src")
      },
      {
        find: "components",
        replacement: path.resolve(__dirname, "src/components")
      },
      {
        find: "views",
        replacement: path.resolve(__dirname, "src/views")
      }
    ],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
  },
  server: {
    proxy: {
      "/api": {
        target: "http://codercba.com:5000",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
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
      include: ["src/**/*.ts", "src/**/*.vue", "src/*.ts", "src/*.vue"]
    }),

    AutoImport({
      // 自动导入 Element Plus 相关函数
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon"
        })
      ],
      dts: path.resolve(pathSrc, "auto-imports.d.ts")
    }),

    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"]
        }),
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ],
      dts: path.resolve(pathSrc, "components.d.ts")
    }),
    Icons({
      autoInstall: true
    }),
    ElementPlus()
  ]
})
