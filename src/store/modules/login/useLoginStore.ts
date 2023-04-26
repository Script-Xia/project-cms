import { defineStore } from "pinia"
import { ref, reactive } from "vue"
import { useRouter } from "vue-router"
import { IAccountLogin, IPhoneLogin } from "view/login/type"
import {
  accountLoginRequest,
  getUserInfoById,
  getUserMenuByRoleId
} from "@/service/login/login"
import localCache from "@/utils/cache"

const useLoginStore = defineStore("login", () => {
  const token = ref("")
  let userInfo
  let userMenus

  const accountLoginAction = async (payload: IAccountLogin) => {
    // 登录系统
    const accountResult = await accountLoginRequest(payload)
    const { token: userToken, id } = accountResult.data
    token.value = userToken
    localCache.setCache("token", userToken)

    // 根据用户 ID 得到用户信息
    const info = (await getUserInfoById(id)).data
    userInfo = reactive(info)
    localCache.setCache("userInfo", info)

    // 请求用户菜单
    const menus = (await getUserMenuByRoleId(userInfo.role.id)).data
    userMenus = reactive(menus)
    localCache.setCache("userMenus", menus)

    // 跳转到首页
    useRouter().push("/main")
  }

  const phoneLoginAction = (payload: IPhoneLogin) => {
    console.log(payload)
  }

  // 初始化仓库，在用户刷新页面后将保存在 localStorage 中的数据还原到仓库中
  const setupLoginStore = () => {
    const localToken = localCache.getCache("token")
    if (localToken) token.value = localToken

    const localUserInfo = localCache.getCache("userInfo")
    if (localUserInfo) userInfo = reactive(localUserInfo)

    const localUserMenus = localCache.getCache("userMenus")
    if (localUserMenus) userMenus = reactive(localUserMenus)
  }

  return {
    token,
    userInfo,
    userMenus,
    accountLoginAction,
    phoneLoginAction,
    setupLoginStore
  }
})

export default useLoginStore
