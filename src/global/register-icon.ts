import { App } from "vue"
import {
  Cellphone,
  Avatar,
  Edit,
  Monitor,
  Setting
} from "@element-plus/icons-vue"

const components = [Cellphone, Avatar, Edit, Monitor, Setting]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
