import { App } from "vue"
import "element-plus/dist/index.css"
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElIcon,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElCol,
  ElOption,
  ElRow,
  ElSelect,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem
} from "element-plus/lib/components"

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElRow,
  ElCol,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElIcon,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
