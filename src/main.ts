import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import { useLoginStore } from "./store"
import "normalize.css"
import "./assets/css/index.less"

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount("#app")

// 初始化 LoginStore
useLoginStore().setupLoginStore()
