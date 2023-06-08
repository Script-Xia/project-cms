<template>
  <div class="user">
    <PageSearch
      v-if="isSearch"
      :search-form-config="searchFormConfig"
      @search-data="handleSearch"
      @reset-data="handleReset"
    />
    <PageContent
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      page-name="users"
    />
  </div>
</template>

<script setup lang="ts">
import { usePageSearch } from "@/hooks/usePageSearch"

import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"

import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"

const { pageContentRef, isSearch, handleSearch, handleReset } =
  usePageSearch("users")
</script>

<style scoped lang="less"></style>
