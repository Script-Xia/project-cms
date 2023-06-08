<template>
  <div class="table-content">
    <YWTable
      v-bind="contentTableConfig"
      v-model:pagination="paginationInfo"
      :show-add-btn="isAdd"
      :total="totalCount"
      :list-data="dataList"
    >
      <!-- 公用的表格插槽 -->
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
      <template v-if="isEdit || isDelete" #operate>
        <ElLink v-if="isEdit" type="primary" :underline="false" :icon="Edit">
          编辑
        </ElLink>
        &nbsp;
        <ElLink
          v-if="isDelete"
          type="primary"
          :underline="false"
          :icon="Delete"
        >
          删除
        </ElLink>
      </template>

      <!-- 组件特有的表格插槽 -->
      <template
        v-for="prop in slotPropList"
        :key="prop.prop"
        #[prop.slotName]="{ row }"
      >
        <slot :name="prop.slotName" :row="row"></slot>
      </template>
    </YWTable>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue"
import { useSystemStore } from "@/store"
import { Edit, Delete } from "@element-plus/icons-vue"
import { usePermission } from "@/hooks/usePermission"
import type { PageName, IContentTableConfig } from "../types"
import type { IPropList, IPagination } from "@/base-ui/table/types"
import YWTable from "@/base-ui/table"

interface IProp {
  // 表格配置项
  contentTableConfig: IContentTableConfig
  // 获取对应表格数据的请求路径名
  pageName: PageName
}

const props = defineProps<IProp>()
const store = useSystemStore()

// 得到按钮的权限
const isAdd = usePermission(props.pageName, "create")
const isEdit = usePermission(props.pageName, "update")
const isDelete = usePermission(props.pageName, "delete")

// 表格分页器的配置
const paginationInfo = ref<IPagination>({
  pageSize: 10,
  currentPage: 1
})
watch(paginationInfo, () => getPageList())

// 发送请求得到表格数据
const getPageList = (queryInfo: any = {}) => {
  store.getPageListAction({
    pageName: props.pageName,
    queryInfo: {
      offset:
        paginationInfo.value.pageSize * (paginationInfo.value.currentPage - 1),
      size: paginationInfo.value.pageSize,
      ...queryInfo
    }
  })
}
getPageList()
const dataList = computed(() => (store as any)[`${props.pageName}List`])
const totalCount = computed(() => (store as any)[`${props.pageName}Count`])

// 从表格配置项中过滤出组件独有的插槽prop列表
const slotPropList: any = computed(() => {
  const publicSlots = ["status", "createAt", "updateAt", "operate"]
  return props.contentTableConfig.propList.filter((prop: IPropList) => {
    if (prop.slotName && !publicSlots.includes(prop.slotName)) return true
  })
})

defineExpose({ getPageList })
</script>

<style scoped lang="less">
.table-content {
  padding: 20px;
  border-top: 20px solid #f0f2f5;
}
</style>
