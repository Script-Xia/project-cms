<template>
  <div class="nav-header">
    <MenuIcon
      :icon="iconName"
      class="fold-icon"
      @click="handleFoldClick"
    ></MenuIcon>
    <div class="content">
      <Breadcrumb :breadcrumbs="breadcrumbs" style="margin-left: 10px" />
      <UserInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useRoute } from "vue-router"
import { useLoginStore } from "@/store"
import MenuIcon from "@/base-ui/menuIcon"
import Breadcrumb from "@/base-ui/menuBreadcrumb"
import UserInfo from "./UserInfo.vue"
import { pathMapToBreadcrumb } from "@/utils/mapMenus"

const route = useRoute()
const isFold = ref(false)
const emits = defineEmits<{
  (e: "foldChange", isFold: boolean): void
}>()

const iconName = computed(() => {
  return isFold.value ? "Fold" : "Expand"
})

// 面包屑
const breadcrumbs = computed(() => {
  const userMenus = computed(() => useLoginStore().userMenus)
  const currentPath = route.path
  return pathMapToBreadcrumb(userMenus.value, currentPath)
})

const handleFoldClick = () => {
  isFold.value = !isFold.value
  emits("foldChange", isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  width: 100%;
  .fold-icon {
    font-size: 26px;
    cursor: pointer;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}
</style>
