import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./route"
import ywRequest from "./service"

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount("#app")

interface IDataCode {
  data: object
  returnCode: string
  success: boolean
}

ywRequest
  .request<IDataCode>({
    url: "/home/multidata",
    method: "GET"
  })
  .then(res => {
    console.log(res)
  })
