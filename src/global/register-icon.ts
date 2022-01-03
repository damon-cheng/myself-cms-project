import { App } from "vue"
import { Cellphone, Avatar, Edit } from "@element-plus/icons-vue"

const components = [Cellphone, Avatar, Edit]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
