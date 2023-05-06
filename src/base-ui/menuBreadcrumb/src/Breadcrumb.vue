<template>
  <div>
    <ElBreadcrumb separator=">">
      <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.name">
        <ElBreadcrumbItem :to="breadcrumb.path">{{
          breadcrumb.name
        }}</ElBreadcrumbItem>
      </template>
    </ElBreadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

interface IBreadcrumb {
  name: string
  path?: string
}
interface prop {
  breadcrumbs: IBreadcrumb[]
}
const props = defineProps<prop>()
</script>

<style scoped lang="less"></style>
