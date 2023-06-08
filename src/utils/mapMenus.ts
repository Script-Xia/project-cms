import type { RouteRecordRaw } from "vue-router"
import type { IBreadcrumb } from "@/base-ui/menuBreadcrumb"

export function mapMenusToRoute(menus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 先去加载所有已经创建好的路由组件映射表 route
  const allRoutes: RouteRecordRaw[] = []
  // Vite提供的方法，加载某个路径下的所有文件
  const routeFiles = import.meta.glob("@/router/main/**/*.ts", { eager: true })
  for (const path in routeFiles) {
    allRoutes.push((routeFiles[path] as any).default)
  }

  // 根据菜单项动态注册路由
  function _resurseGetRoute(menus: any) {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find(item => item.path === menu.url)
        if (route) routes.push(route)
      } else {
        _resurseGetRoute(menu.children)
      }
    }
  }
  _resurseGetRoute(menus)

  return routes
}

// 根据当前路径生成面包屑
export function pathMapToBreadcrumb(menus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToRoute(menus, currentPath, breadcrumbs)
  return breadcrumbs
}

export function pathMapToRoute(
  menus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of menus) {
    if (menu.type === 1) {
      const currentMenu = pathMapToRoute(menu.children, currentPath)
      if (currentMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: currentMenu.name })
        return currentMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// 根据菜单列表内容生成该用户拥有的按钮权限列表
export function mapMenusToPermission(userMenus: any[]) {
  const permissions: string[] = []

  const _resurseGetPermissions = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _resurseGetPermissions(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _resurseGetPermissions(userMenus)

  return permissions
}
