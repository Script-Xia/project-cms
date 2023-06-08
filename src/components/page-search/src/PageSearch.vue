<template>
  <div class="page-search">
    <YWFrom v-bind="searchFormConfig" v-model="formData">
      <template #append>
        <div class="handle-btns">
          <ElButton :icon="Refresh" @click="handleReset"> 重置 </ElButton>
          <ElButton type="primary" :icon="Search" @click="handleSearch">
            搜索
          </ElButton>
        </div>
      </template>
    </YWFrom>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useSystemStore } from "@/store"
import { Refresh, Search } from "@element-plus/icons-vue"
import type { IForm } from "@/base-ui/form"
import YWFrom from "@/base-ui/form"

interface IProp {
  searchFormConfig: IForm
}

const props = defineProps<IProp>()
const emits = defineEmits(["resetData", "searchData"])
const store = useSystemStore()

// formData中的数据是动态决定的
// 双向绑定的数据要根据配置文件中的field来决定
const formItems = computed(() => props.searchFormConfig.formItems)
const originData: any = {}
for (const item of formItems.value) {
  originData[item.field] = ""
}
const formData = ref(originData)

// 根据表单内容搜索表格数据
const handleSearch = () => {
  // 将搜索的内容保存到 store 中
  store.queryInfo = Object.assign({}, store.queryInfo, formData.value)
  emits("searchData", formData.value)
}

// 重置表单内容
// 不能直接将 formData.value 赋一个新值，而是要通过递归的方式改变 value 内部的值
const handleReset = () => {
  for (const key in originData) {
    if (Object.prototype.hasOwnProperty.call(originData, key)) {
      const data = originData[key]
      formData.value[`${key}`] = data
    }
  }
  emits("resetData")
}
</script>

<style scoped lang="less">
.handle-btns {
  text-align: right;
  padding: 0 40px 30px 0;
}
</style>
