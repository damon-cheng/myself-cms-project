import { IBreadCrumb } from "@/base-ui/breadcrumb"
import { RouteRecordRaw } from "vue-router"

let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context("../router/main", true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require("../router/main" + key.split(".")[1])
    allRoutes.push(route.default)
  })

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type == 2) {
        const route = allRoutes.find((route) => {
          return route.path == menu.url
        })
        if (route) routes.push(route)
        if (!firstMenu) firstMenu = menu
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumb: IBreadCrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumb)
  return breadcrumb
}

export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumb?: IBreadCrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type == 1) {
      const findMenu = pathMapToMenu(
        menu.children ?? [],
        currentPath,
        breadcrumb ?? []
      )
      if (findMenu) {
        breadcrumb?.unshift({ name: menu.name, path: menu.url })
        //breadcrumb?.push({ name: findMenu.name, path: findMenu.url })
        return findMenu
      }
    } else if (menu.type == 2 && menu.url == currentPath) {
      breadcrumb?.unshift({ name: menu.name, path: menu.url })
      return menu
    }
  }
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []
  const _recuresGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type == 1 || menu.type == 2) {
        _recuresGetPermission(menu.children ?? [])
      } else if (menu.type == 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recuresGetPermission(userMenus)
  return permissions
}

export { firstMenu }
