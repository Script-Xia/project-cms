<template>
  <div class="user">
    <PageSearch :search-form-config="searchFormConfig" />
    <PageContent :content-table-config="contentTableConfig" page-name="role" />
  </div>
</template>

<script setup lang="ts">
import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"

import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
</script>

<style scoped lang="less"></style>
