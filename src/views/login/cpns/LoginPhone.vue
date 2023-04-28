<template>
  <div class="login-phone">
    <ElForm :rules="rules" :model="phone">
      <ElFormItem prop="number">
        <ElInput v-model="phone.number" placeholder="手机号码">
          <template #prepend>
            <ElSelect
              v-model="country"
              filterable
              :filter-method="fileterSelectOpts"
              style="width: 90px"
              @change="selectChange"
            >
              <ElOptionGroup>
                <ElOption disabled value="选择国家/地区"></ElOption>
              </ElOptionGroup>
              <template v-for="item in phoneCodeList" :key="item.value">
                <ElOption :value="item.code">{{ item.value }}</ElOption>
              </template>
            </ElSelect>
          </template>
        </ElInput>
      </ElFormItem>
      <ElFormItem prop="verificationCode">
        <div class="code">
          <ElInput
            v-model="phone.verificationCode"
            placeholder="验证码"
          ></ElInput>
          <ElButton type="primary" class="get-code-btn">获取验证码</ElButton>
        </div>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { formRules } from "../hooks/phoneHooks"
import phoneCode from "@/config/phoneCode"

const phone = reactive({
  number: "",
  verificationCode: ""
})

const country = ref("+86")
let isSearch = false
let changeCount = 0
const rules = formRules
let phoneCodeList = ref(phoneCode)

const fileterSelectOpts = (searchValue: string) => {
  const list = []
  if (searchValue.length) {
    for (const item of phoneCode) {
      if (item.value.includes(searchValue)) {
        list.push(item)
      }
    }
    phoneCodeList.value = list
    isSearch = true
  }
}

interface IOptionItem {
  code: string
  value: string
}

const selectChange = (value: string) => {
  setTimeout(() => {
    if (isSearch) {
      phoneCodeList.value = phoneCode
    }
    const index = phoneCodeList.value.findIndex(
      (item: IOptionItem) => item.code === value
    )
    const item = phoneCodeList.value[index]
    phoneCodeList.value.splice(index, 1)
    if (changeCount > 0 && value !== "+86") phoneCodeList.value.shift()
    phoneCodeList.value.unshift(item)
    changeCount++
    isSearch = false
  }, 100)
}

const loginAction = () => {
  console.log("login-account")
}

defineExpose({
  loginAction
})
</script>

<style scoped lang="less">
.code {
  display: flex;
  width: 100%;
}

.get-code-btn {
  margin-left: 6px;
}
</style>
