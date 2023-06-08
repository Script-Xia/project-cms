import { defineStore } from "pinia"
import { ref } from "vue"
import type { IPageListQuery } from "./type"
import { getPageListData } from "@/service/main/system/system"

const useSystemStore = defineStore("system", () => {
  const usersList = ref([])
  const usersCount = ref(0)
  const roleList = ref([])
  const roleCount = ref(0)
  const goodsList = ref([])
  const goodsCount = ref(0)
  const menuList = ref([])
  const menuCount = ref(0)

  // 建立pageName和对应数据的映射关系
  const pageNameMap = {
    users: [usersList, usersCount],
    role: [roleList, roleCount],
    goods: [goodsList, goodsCount],
    menu: [menuList, menuCount]
  }

  const getPageListAction = async (payload: IPageListQuery) => {
    // 根据pageName拼接url
    const pageName = payload.pageName
    const url = `/${pageName}/list`

    // 发送请求得到列表数据
    const pageList = await getPageListData(url, payload.queryInfo)
    const { list, totalCount } = pageList.data

    // 根据pageName保存对应的数据
    pageNameMap[`${pageName}`][0].value = list
    pageNameMap[`${pageName}`][1].value = totalCount
  }

  return {
    usersList,
    usersCount,
    roleList,
    roleCount,
    goodsList,
    goodsCount,
    menuList,
    menuCount,
    getPageListAction
  }
})

export default useSystemStore
