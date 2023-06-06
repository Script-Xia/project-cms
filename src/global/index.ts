import type { App } from "vue"
import registerIcons from "./registerIcons"
import registerELements from "./registerElements"
import registerMethods from "./registerMethods"

export default function registerGlobalProperties(app: App) {
  app.use(registerIcons)
  app.use(registerELements)
  app.use(registerMethods)
}
