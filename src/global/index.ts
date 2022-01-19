import { App } from "vue"
import registerElement from "./register-element"
import registerIcon from "./register-icon"
import registerProperties from "./register-properties"

export function globalRegister(app: App): void {
  app.use(registerElement)
  app.use(registerIcon)
  app.use(registerProperties)
  //registerElement(app)
}
