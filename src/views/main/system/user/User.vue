<template>
  <div class="user">
    <PageSearch
      v-if="isSearch"
      :search-form-config="searchFormConfig"
      @search-data="handleSearch"
      @reset-data="handleReset"
    />
    <PageContent
      ref="pageContentRef"
      page-name="users"
      :content-table-config="contentTableConfig"
      @add="handleAdd"
      @edit="handleEdit"
    />
    <PageModal
      ref="pageModalRef"
      page-name="users"
      :modal-config="modalConfigRef"
      :default-info="defaultInfo"
    ></PageModal>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import { useSystemStore } from "@/store"
import { usePageSearch } from "@/hooks/usePageSearch"
import { usePageModal } from "@/hooks/usePageModal"

import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalConfig } from "./config/modal.config"

import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import PageModal from "@/components/page-modal"

const store = useSystemStore()
// 搜索表单的逻辑
const { pageContentRef, isSearch, handleSearch, handleReset } =
  usePageSearch("users")

const modalConfigRef = ref(modalConfig)
// 通过监听 store 中部门/角色列表的变化来给弹窗中部门/角色下拉框赋值
const describe = store.$subscribe((mutation, state) => {
  const departmentItem = modalConfigRef.value.formItems.find(
    item => item.field === "departmentId"
  )
  departmentItem!.options = state.departmentList.map((item: any) => ({
    label: item.name,
    value: item.id
  }))

  const roleItem = modalConfigRef.value.formItems.find(
    item => item.field === "roleId"
  )
  roleItem!.options = state.roleList.map((item: any) => ({
    label: item.name,
    value: item.id
  }))

  // 当部门&角色列表数据都请求到后，关闭订阅
  if (state.roleList.length && state.departmentList.length) describe()
})

// 密码字段的展示和隐藏
const addCallback = () => {
  const passwordItem = modalConfigRef.value.formItems.find(
    item => item.field === "password"
  )
  passwordItem!.isHidden = false
}
const editCallback = () => {
  const passwordItem = modalConfigRef.value.formItems.find(
    item => item.field === "password"
  )
  passwordItem!.isHidden = true
}

// 弹窗的部分逻辑
const { pageModalRef, defaultInfo, handleAdd, handleEdit } = usePageModal(
  addCallback,
  editCallback
)
</script>

<style scoped lang="less"></style>
