<template>
  <div class="login-account">
    <ElForm :rules="rules" :model="account" ref="formRef">
      <ElFormItem prop="name">
        <ElInput v-model="account.name" placeholder="登录账号"></ElInput>
      </ElFormItem>
      <ElFormItem prop="password" class="pwd-form-item">
        <ElInput
          show-password
          v-model="account.password"
          placeholder="密码"
        ></ElInput>
      </ElFormItem>
    </ElForm>
    <div class="pwd-ctrl">
      <ElCheckbox v-model="isKeepPwd">记住密码</ElCheckbox>
      <ElLink type="primary" :underline="false">忘记密码</ElLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue"
import { useRouter } from "vue-router"
import { ElForm } from "element-plus"
import { formRules } from "../hooks/accountHooks"
import { useLoginStore } from "@/store"
import localCache from "@/utils/cache"

const account = reactive({
  name: localCache.getCache("name") ?? "",
  password: localCache.getCache("password") ?? ""
})

const router = useRouter()
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
  formRef.value?.validate(async isValid => {
    if (isValid) {
      // 判断是否需要记住密码
      if (isKeepPwd.value) {
        // 本地缓存
        localCache.setCache("name", account.name)
        localCache.setCache("password", account.password)
      } else {
        localCache.deleteCache("name")
        localCache.deleteCache("password")
      }
      // 登录
      await useLoginStore().accountLoginAction({ ...account })
      // 跳转到首页
      router.push("/main")
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
