<template>
  <div class="table">
    <ElTabs>
      <ElTabPane :label="title">
        <div class="header">
          <slot name="header">
            <slot name="headerHandler">
              <ElButton type="primary">新增</ElButton>
            </slot>
            <ElAlert v-if="showSelectColumn" show-icon>
              <template #title>
                <span>已选择</span>
                <span class="quantity-selected">
                  &nbsp; {{ selectionRows.length }} &nbsp;
                </span>
                <span>项</span>
                <span class="clear" @click="handleClearSelection">清空</span>
              </template>
            </ElAlert>
          </slot>
        </div>
        <ElTable
          ref="dataTable"
          :data="listData"
          @selection-change="handleSelectionChange"
        >
          <ElTableColumn
            v-if="showSelectColumn"
            type="selection"
            width="60"
            align="center"
          />
          <ElTableColumn
            v-if="showIndexColumn"
            type="index"
            label="序号"
            width="60"
            align="center"
          />
          <template v-for="propItem in propList" :key="propItem.prop">
            <ElTableColumn v-bind="propItem" align="center">
              <template #default="scope">
                <!-- 通过作用域插槽定制化表格内容 -->
                <slot :name="propItem.slotName" :row="scope.row">
                  {{ propItem.prop ? scope.row[propItem.prop] : "" }}
                </slot>
              </template>
            </ElTableColumn>
          </template>
        </ElTable>
        <div class="footer">
          <slot name="footer">
            <ElPagination
              background
              layout="total, sizes, prev, pager, next, jumper"
              :current-page="pagination.currentPage"
              :page-size="pagination.pageSize"
              :page-sizes="[10, 20, 30]"
              :total="total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </slot>
        </div>
      </ElTabPane>
    </ElTabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { IPropList } from "../types"
import type { IPagination } from "components/page-content/types"

interface IProp {
  // 表格内容数据集合
  listData: any[]
  // 表格表头数据集合
  propList: IPropList[]
  // 分页器的配置
  pagination?: IPagination
  // 表格标题
  title?: string
  // 表格总数据数
  total?: number
  // 表格序号列
  showIndexColumn?: boolean
  // 表格多选列
  showSelectColumn?: boolean
}

const props = withDefaults(defineProps<IProp>(), {
  showIndexColumn: false,
  showSelectColumn: false,
  pagination: () => ({
    pageSize: 10,
    currentPage: 1
  })
})

const emits = defineEmits(["update:pagination"])
const selectionRows = ref<any[]>([])
const dataTable = ref()

const handleSelectionChange = (val: any[]) => {
  selectionRows.value = val
}

// 清空选中项
const handleClearSelection = () => {
  selectionRows.value = []
  dataTable.value.clearSelection()
}

const handleSizeChange = (pageSize: number) => {
  emits("update:pagination", { ...props.pagination, pageSize })
}

const handleCurrentChange = (currentPage: number) => {
  emits("update:pagination", { ...props.pagination, currentPage })
}
</script>

<style scoped lang="less">
.table {
  .el-tabs__item {
    font-size: 18px;
  }

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 5px;

    .el-button {
      padding: 8px 24px;
      margin-bottom: 8px;
    }

    .el-alert {
      margin: 4px 0 10px;
      color: #1677ff;
      background-color: #e6f4ff;
      border: 1px solid #91caff;

      .quantity-selected {
        font-weight: 700;
        font-size: 14px;
      }

      .clear {
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: right;
    margin-top: 15px;
  }
}
</style>
