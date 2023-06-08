<template>
  <div class="user">
    <PageContent
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      page-name="menu"
    />
  </div>
</template>

<script setup lang="ts">
import { usePageSearch } from "@/hooks/usePageSearch"
import { contentTableConfig } from "./config/content.config"
import PageContent from "@/components/page-content"

const { pageContentRef, handleSearch, handleReset } = usePageSearch()
</script>

<style scoped lang="less"></style>
