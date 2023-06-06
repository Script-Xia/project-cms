import type { App } from "vue"
import {
  ElInput,
  ElCheckbox,
  ElRadio,
  ElDatePicker,
  ElSelect,
  ElInputNumber
} from "element-plus"

const icons = [
  ElInput,
  ElInputNumber,
  ElCheckbox,
  ElSelect,
  ElRadio,
  ElDatePicker
]

// 注册全局 ElementUI 组件
export default function registerELements(vm: App) {
  for (const icon of icons) {
    vm.component(icon.name, icon)
  }
}
