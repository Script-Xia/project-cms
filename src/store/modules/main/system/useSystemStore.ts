import { defineStore } from "pinia"
import { ref, reactive } from "vue"
import type { IPageListQuery, IDeleteListDataPayload } from "./type"
import {
  getPageListData,
  deletePageListData
} from "@/service/main/system/system"

const useSystemStore = defineStore("system", () => {
  // 页面中的查询参数
  const queryInfo = ref({
    pageSize: 10,
    currentPage: 1
  })
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

    // 根据pageName保存映射关系表中对应的数据
    pageNameMap[`${pageName}`][0].value = list
    pageNameMap[`${pageName}`][1].value = totalCount
  }

  // 删除表格数据
  const deletePageListAction = async (payload: IDeleteListDataPayload) => {
    const { id, pageName } = payload
    const url = `/${pageName}/${id}`
    deletePageListData(url)
  }

  return {
    queryInfo,
    usersList,
    usersCount,
    roleList,
    roleCount,
    goodsList,
    goodsCount,
    menuList,
    menuCount,
    getPageListAction,
    deletePageListAction
  }
})

export default useSystemStore
