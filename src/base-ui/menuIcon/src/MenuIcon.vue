<template>
  <ElIcon>
    <component :is="icon"></component>
  </ElIcon>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
}>()
</script>

<style scoped lang="less"></style>
