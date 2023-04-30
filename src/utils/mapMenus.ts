import type { RouteRecordRaw } from "vue-router"

function mapMenusToRoute(menus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 先去加载所有已经创建好的路由组件映射表 route
  const allRoutes: RouteRecordRaw[] = []
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

export function pathMapToRoute(menus: any[], currentPath: string): any {
  for (const menu of menus) {
    if (menu.type === 1) {
      const currentMenu = pathMapToRoute(menu.children, currentPath)
      if (currentMenu) return currentMenu
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export default mapMenusToRoute
