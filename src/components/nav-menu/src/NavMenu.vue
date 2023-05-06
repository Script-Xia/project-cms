<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" class="img" />
      <span v-show="!isCollapse" class="title">Vue3+TS</span>
    </div>
    <ElMenu
      :default-active="activeItem"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="props.isCollapse"
    >
      <template v-for="menu in userMenus" :key="menu.id">
        <template v-if="menu.type === 1">
          <ElSubMenu :index="`${menu.id}`">
            <template #title>
              <MenuIcon
                v-if="menu.icon"
                :icon="changeIconName(menu.icon)"
              ></MenuIcon>
              <span>{{ menu.name }}</span>
            </template>
            <template v-for="menuItem in menu.children" :key="menuItem.id">
              <ElMenuItem
                :index="`${menuItem.id}`"
                @click="handleNavItemClick(menuItem)"
                >{{ menuItem.name }}</ElMenuItem
              >
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
import { useRouter, useRoute } from "vue-router"
import { pathMapToRoute } from "@/utils/mapMenus"
import MenuIcon from "@/base-ui/menuIcon"

interface prop {
  isCollapse?: boolean
}
const props = withDefaults(defineProps<prop>(), {
  isCollapse: false
})

const router = useRouter()
const route = useRoute()
const userMenus = computed(() => useLoginStore().userMenus)

// 根据当前路由路径获取活跃的菜单选项id
const currentPath = route.path
const currentMenu = pathMapToRoute(userMenus.value, currentPath)
const activeItem = ref<string>(`${currentMenu.id}`)

const handleNavItemClick = (menuItem: any) => {
  router.push({
    path: menuItem.url ?? "not-found"
  })
}

// 修改后台传来的组件图标名称
const changeIconName = (name: string): string => {
  let iconName = ""
  name
    .split("el-icon-")[1]
    .split("-")
    .forEach(item => {
      iconName += item.substring(0, 1).toUpperCase() + item.substring(1)
    })
  return iconName
}
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
