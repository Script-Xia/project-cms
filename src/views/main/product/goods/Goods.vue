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
      page-name="goods"
    >
      <template #image="{ row }">
        <ElImage
          hide-on-click-modal
          append-to-body
          style="width: 60px; height: 60px"
          :src="row.imgUrl"
          :preview-src-list="[row.imgUrl]"
        ></ElImage>
      </template>
    </PageContent>
  </div>
</template>

<script setup lang="ts">
import { usePageSearch } from "@/hooks/usePageSearch"

import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"

import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"

const { pageContentRef, isSearch, handleSearch, handleReset } =
  usePageSearch("goods")
</script>

<style scoped lang="less"></style>
