<template>
  <div class="main">
    <ElContainer class="main-content">
      <ElAside :width="isCollapse ? '70px' : '210px'" class="aside-transition">
        <NavMenu :is-collapse="isCollapse" />
      </ElAside>
      <ElContainer class="page">
        <ElHeader class="page-header">
          <NavHeader @fold-change="handleFoldChange" />
        </ElHeader>
        <ElMain class="page-content">
          <div class="page-info">
            <RouterView></RouterView>
          </div>
        </ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<script setup lang="ts">
import NavMenu from "components/nav-menu"
import NavHeader from "components/nav-header"
import { ref } from "vue"

const isCollapse = ref(false)

const handleFoldChange = (isFold: boolean) => {
  isCollapse.value = isFold
}
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.main-content {
  .aside-transition {
    transition: width 0.4s linear;
  }
}

.page-content {
  height: calc(100% - 48px);

  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.ElAside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
