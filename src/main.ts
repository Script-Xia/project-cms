import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import { useLoginStore } from "./store"
import { registerIcons, registerELements } from "./global"
import "normalize.css"
import "./assets/css/index.less"

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
// 必须先初始化 LoginStore，注册好动态路由，再注册路由实例
useLoginStore().setupLoginStore()
app.use(router)
// 注册全局图标和全局组件
app.use(registerIcons).use(registerELements)
app.mount("#app")
