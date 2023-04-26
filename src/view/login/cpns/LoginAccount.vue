<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item prop="username">
        <el-input v-model="account.username" placeholder="登录账号"></el-input>
      </el-form-item>
      <el-form-item prop="password" class="pwd-form-item">
        <el-input
          show-password
          v-model="account.password"
          placeholder="密码"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="pwd-ctrl">
      <el-checkbox v-model="isKeepPwd">记住密码</el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue"
import { ElForm } from "element-plus"
import { formRules } from "../hooks/accountHooks"
import { useLoginStore } from "@/store"
import localCache from "@/utils/cache"

const account = reactive({
  username: localCache.getCache("username") ?? "",
  password: localCache.getCache("password") ?? ""
})

const isKeepPwd = ref(localCache.getCache("isKeepPwd"))
const formRef = ref<InstanceType<typeof ElForm>>()
const rules = formRules

watch(isKeepPwd, value => {
  localCache.setCache("isKeepPwd", value)
})

if (isKeepPwd.value === undefined) {
  isKeepPwd.value = false
}

const loginAction = () => {
  formRef.value?.validate(isValid => {
    if (isValid) {
      // 判断是否需要记住密码
      if (isKeepPwd.value) {
        // 本地缓存
        localCache.setCache("username", account.username)
        localCache.setCache("password", account.password)
      } else {
        localCache.deleteCache("username")
        localCache.deleteCache("password")
      }
      // 登录
      useLoginStore().accountLoginAction({ ...account })
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style scoped lang="less">
.pwd-form-item {
  margin-bottom: 10px;
}
.pwd-ctrl {
  display: flex;
  justify-content: space-between;
}
</style>
