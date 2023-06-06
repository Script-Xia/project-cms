// 注册全局方法
import type { App } from "vue"
import { formatUtcString } from "@/utils/dateFormat"

export default function registerMethods(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
