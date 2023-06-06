/* eslint-disable */
// 默认所有的 .vue 文件导出的都是 component 实例
// component 实例的类型是 DefineComponent<{}, {}, any>
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "vue" {
  interface ComponentCustomProperties {
    $filters: any
  }
}

declare module "element-plus/dist/locale/zh-cn.mjs"
declare const BASE_URL: string

export {}
