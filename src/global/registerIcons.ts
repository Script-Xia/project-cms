import type { App } from "vue"
import {
  Expand,
  Fold,
  Goods,
  Iphone,
  Monitor,
  ChatLineRound,
  Setting,
  User,
  Bell,
  CollectionTag
} from "@element-plus/icons-vue"

const icons = [
  Expand,
  Fold,
  Goods,
  Iphone,
  Monitor,
  ChatLineRound,
  Setting,
  User,
  Bell,
  CollectionTag
]

export function registerIcons(vm: App) {
  for (const icon of icons) {
    vm.component(icon.name, icon)
  }
}
