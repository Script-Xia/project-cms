<template>
  <ElIcon>
    <component :is="iconName"></component>
  </ElIcon>
</template>

<script setup lang="ts">
import { computed } from "vue"
const props = defineProps<{
  icon: string
}>()

const iconName = computed(() => {
  const icon = props.icon
  const name = icon.substring(icon.lastIndexOf("-") + 1)
  return "IEp" + name.substring(0, 1).toUpperCase() + name.substring(1)
})
</script>

<style scoped lang="less"></style>
