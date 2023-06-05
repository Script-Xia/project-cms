<template>
  <div class="app">
    <ElConfigProvider :locale="locale">
      <RouterView></RouterView>
    </ElConfigProvider>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import zhCn from "element-plus/dist/locale/zh-cn.mjs"

const locale = ref(zhCn)
</script>

<style scoped lang="less">
.app {
  height: 100%;
}
</style>
