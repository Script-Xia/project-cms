<template>
  <div class="nav-header">
    <ElIcon @click="handleFoldClick" class="fold-icon">
      <IEpExpand v-show="!isFold"></IEpExpand>
      <IEpFold v-show="isFold"></IEpFold>
    </ElIcon>
    <!-- <MenuIcon :iconName=""></MenuIcon> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import MenuIcon from "@/base-ui/MenuIcon.vue"

const isFold = ref(false)
const emits = defineEmits<{
  (e: "foldChange", isFold: boolean): void
}>()

const handleFoldClick = () => {
  isFold.value = !isFold.value
  emits("foldChange", isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  .fold-icon {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
