import { defineStore } from "pinia"
import { ref } from "vue"
import router from "@/router"
import { IAccountLogin, IPhoneLogin } from "views/login/type"
import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenuByRoleId
} from "@/service/login/login"
import localCache from "@/utils/cache"
import mapMenusToRoute from "@/utils/mapMenus"

const useLoginStore = defineStore("login", () => {
  const token = ref("")
  const userInfo = ref()
  const userMenus = ref()
  const firstMenu = ref()

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
  }

  return {
    token,
    userInfo,
    userMenus,
    firstMenu,
    accountLoginAction,
    phoneLoginAction,
    setupLoginStore
  }
})

export default useLoginStore
