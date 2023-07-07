<template>
  <div class="user-info">
    <MenuIcon icon="ChatLineRound"></MenuIcon>
    <MenuIcon icon="CollectionTag"></MenuIcon>
    <MenuIcon icon="Bell"></MenuIcon>
    <ElDropdown>
      <span class="el-dropdown-link">
        {{ name }}
        <ElAvatar
          src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
          size="small"
        ></ElAvatar>
      </span>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem>设置</ElDropdownItem>
          <ElDropdownItem>个人中心</ElDropdownItem>
          <ElDropdownItem @click="handelLogout">退出登录</ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useRouter } from "vue-router"
import { useLoginStore } from "@/store"
import ls from "@/utils/cache"
import MenuIcon from "@/base-ui/menuIcon"

const store = useLoginStore()
const router = useRouter()
const name = computed(() => store.userInfo.name)

const handelLogout = () => {
  // 退出时清空 token 记录
  ls.deleteCache("token")
  // 跳转到登录界面
  router.replace("/login")
}
</script>

<style scoped lang="less">
.user-info {
  display: flex;
  align-items: center;
  font-size: 18px;

  .el-icon {
    margin-right: 10px;
    cursor: pointer;
  }
  .el-dropdown-link {
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;

    span {
      margin-left: 6px;
    }
  }
}
</style>
