import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import { useLoginStore } from "./store"
import registerGlobalProperties from "./global"
import "normalize.css"
import "./assets/css/index.less"

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
// 必须先初始化 LoginStore，注册好动态路由，再注册路由实例
useLoginStore().setupLoginStore()
app.use(router)
// 注册全局属性（图标、组件和方法）
app.use(registerGlobalProperties)
app.mount("#app")
