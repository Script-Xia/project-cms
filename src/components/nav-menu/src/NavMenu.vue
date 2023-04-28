<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" class="img" />
      <span class="title">Vue3+TS</span>
    </div>
    <ElMenu
      default-active="2"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="menu in userMenus" :key="menu.id">
        <template v-if="menu.type === 1">
          <ElSubMenu :index="`${menu.id}`">
            <template #title>
              <MenuIcon v-if="menu.icon" :icon="menu.icon"></MenuIcon>
              <span>{{ menu.name }}</span>
            </template>
            <template v-for="menuItem in menu.children" :key="menuItem.id">
              <ElMenuItem :index="`${menuItem.id}`">{{
                menuItem.name
              }}</ElMenuItem>
            </template>
          </ElSubMenu>
        </template>
        <template v-else-if="menu.type === 2"></template>
      </template>
    </ElMenu>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { useLoginStore } from "@/store"
import MenuIcon from "./MenuIcon.vue"

const userMenus = computed(() => useLoginStore().userMenus)
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: rgb(26, 32, 54);

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;

    // 目录
    .el-sub-menu {
      background-color: #001529 !important;
      // 二级菜单 ( 默认背景 )

      .el-submenu__title {
        background-color: #001529 !important;
      }

      .el-menu {
        .el-menu-item {
          padding-left: 50px !important;
          background-color: #0c2135;

          // hover/点击 高亮
          &:hover,
          &.is-active {
            color: #fff !important; // 菜单
            // background-color: #0a60bd !important;
            background-color: #292f61;
            &::before {
              content: "";
              width: 0;
              height: 100%;
              position: absolute;
              border: 2px solid #3753e4;
              left: 0;
              top: 0;
            }
          }
        }
      }
    }
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
