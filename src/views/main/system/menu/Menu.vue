<template>
  <div class="user">
    <PageContent :content-table-config="contentTableConfig" page-name="menu" />
  </div>
</template>

<script setup lang="ts">
import { contentTableConfig } from "./config/content.config"
import PageContent from "@/components/page-content"
</script>

<style scoped lang="less"></style>
