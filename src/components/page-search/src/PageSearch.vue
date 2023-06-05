<template>
  <div class="page-search">
    <YWFrom v-bind="searchFormConfig" v-model="formData">
      <template #append>
        <div class="handel-btns">
          <ElButton :icon="Refresh"> 重置 </ElButton>
          <ElButton type="primary" :icon="Search"> 搜索 </ElButton>
        </div>
      </template>
    </YWFrom>
  </div>
</template>

<script setup lang="ts">
import { Refresh, Search } from "@element-plus/icons-vue"
import YWFrom from "@/base-ui/form"

const props = defineProps({
  searchFormConfig: Object
})

const formData = {
  name: "xixi",
  sex: true
}
</script>

<style scoped lang="less">
.handel-btns {
  text-align: right;
  padding: 0 40px 30px 0;
}
</style>
