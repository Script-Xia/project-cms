<template>
  <div class="table-content">
    <YWTable
      v-bind="contentTableConfig"
      :total="totalCount"
      :list-data="dataList"
    >
      <template #status="{ row }">
        <ElTag :type="row.enable ? 'success' : 'danger'">
          {{ row.enable ? "启用" : "禁用" }}
        </ElTag>
      </template>
      <template #createAt="{ row }">
        {{ $filters.formatTime(row.createAt) }}
      </template>
      <template #updateAt="{ row }">
        {{ $filters.formatTime(row.updateAt) }}
      </template>
      <template #operate>
        <ElLink type="primary" :underline="false" :icon="Edit"> 编辑 </ElLink>
        &nbsp;
        <ElLink type="primary" :underline="false" :icon="Delete"> 删除 </ElLink>
      </template>
    </YWTable>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useSystemStore } from "@/store"
import { Edit, Delete } from "@element-plus/icons-vue"
import type { IContentTableConfig } from "../types"
import type { PageName } from "../types"
import YWTable from "@/base-ui/table"

interface IProp {
  // 表格配置项
  contentTableConfig: IContentTableConfig
  // 获取对应表格数据的请求路径名
  pageName: PageName
}

const props = defineProps<IProp>()

const store = useSystemStore()
store.getPageListAction({
  pageName: props.pageName,
  queryInfo: {
    offset: 0,
    size: 10
  }
})
const dataList = computed(() => (store as any)[`${props.pageName}List`])
const totalCount = computed(() => (store as any)[`${props.pageName}Count`])
</script>

<style scoped lang="less">
.table-content {
  padding: 20px;
  border-top: 20px solid #f0f2f5;
}
</style>
