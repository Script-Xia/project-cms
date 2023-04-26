<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs v-model="activeName" class="tabs" stretch>
      <el-tab-pane name="accountNumber">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><i-ep-user /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <LoginAccount ref="loginAccountRef"></LoginAccount>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><i-ep-Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone ref="loginPhoneRef"></LoginPhone>
      </el-tab-pane>
    </el-tabs>
    <div class="login-btn">
      <el-button type="primary" size="large" @click="handelLoginClick"
        >登录</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginAccount from "./LoginAccount.vue"
import LoginPhone from "./LoginPhone.vue"
import { ref } from "vue"

const activeName = ref("accountNumber")
const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()
const loginPhoneRef = ref<InstanceType<typeof LoginPhone>>()

const handelLoginClick = () => {
  if (activeName.value === "accountNumber") {
    loginAccountRef.value?.loginAction()
  } else {
    loginPhoneRef.value?.loginAction()
  }
}
</script>

<style scoped lang="less">
.login-panel {
  position: relative;
  margin-bottom: 120px;
  width: 320px;
  height: 320px;

  h1 {
    text-align: center;
  }

  .el-tabs {
    .el-tabs__active-bar {
      width: 160px;
    }

    .el-tabs__item {
      padding: 0;

      .custom-tabs-label {
        display: flex;
        justify-content: center;
        align-items: center;

        .el-icon {
          margin-right: 4px;
        }
      }
    }
    .el-tabs__content {
      border: 1px solid #dcdfe6;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
    }
  }

  .login-btn {
    position: absolute;
    bottom: 10px;
    margin-top: 10px;
    width: 100%;
    text-align: center;

    button {
      width: 300px;
    }
  }
}
</style>
