import { defineStore } from "pinia"
import { ref } from "vue"
import router from "@/router"
import type { IAccountLogin, IPhoneLogin } from "views/login/type"
import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenuByRoleId
} from "@/service/login/login"
import { useSystemStore } from "@/store"
import localCache from "@/utils/cache"
import { mapMenusToRoute, mapMenusToPermission } from "@/utils/mapMenus"

const useLoginStore = defineStore("login", () => {
  const token = ref("")
  // 用户信息
  const userInfo = ref()
  // 用户权限可看到的菜单列表
  const userMenus = ref()
  // 默认展示的菜单
  const firstMenu = ref()
  // 用户按钮权限
  const permissions = ref()

  // 注册路由
  const registerRoute = (meuns: any[]) => {
    const routes = mapMenusToRoute(meuns)
    routes.forEach((route, index) => {
      router.addRoute("main", route)
      if (index === 0) firstMenu.value = route
    })
  }

  const accountLoginAction = async (payload: IAccountLogin) => {
    // 登录系统
    const accountResult = await accountLoginRequest(payload)
    const { token: userToken, id } = accountResult.data
    token.value = userToken
    localCache.setCache("token", userToken)

    // 根据用户 ID 得到用户信息
    const info = (await getUserInfoById(id)).data
    userInfo.value = info
    localCache.setCache("userInfo", info)

    // 请求用户菜单
    const menus = (await getUserMenuByRoleId(userInfo.value.role.id)).data
    userMenus.value = menus
    // 根据菜单信息动态注册路由
    registerRoute(menus)
    localCache.setCache("userMenus", menus)
    // 根据菜单信息获取用户按钮权限
    permissions.value = mapMenusToPermission(menus)
    localCache.setCache("permissions", permissions.value)
  }

  const phoneLoginAction = (payload: IPhoneLogin) => {
    console.log(payload)
  }

  // 初始化仓库，在用户刷新页面后将保存在 localStorage 中的数据还原到仓库中
  const setupLoginStore = () => {
    const localToken = localCache.getCache("token")
    if (localToken) token.value = localToken

    const localUserInfo = localCache.getCache("userInfo")
    if (localUserInfo) userInfo.value = localUserInfo

    const localUserMenus = localCache.getCache("userMenus")
    if (localUserMenus) {
      userMenus.value = localUserMenus
      registerRoute(localUserMenus)
    }

    const localPermissions = localCache.getCache("permissions")
    if (localPermissions) permissions.value = localPermissions

    // 初始化部门和角色列表
    const systemStore = useSystemStore()
    systemStore.getPageListAction({
      pageName: "department",
      queryInfo: {
        size: 100,
        offset: 0
      }
    })
    systemStore.getPageListAction({
      pageName: "role",
      queryInfo: {
        size: 100,
        offset: 0
      }
    })
  }

  return {
    token,
    userInfo,
    userMenus,
    firstMenu,
    permissions,
    accountLoginAction,
    phoneLoginAction,
    setupLoginStore
  }
})

export default useLoginStore
