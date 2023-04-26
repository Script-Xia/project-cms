<template>
  <div class="login-phone">
    <el-form :rules="rules" :model="phone">
      <el-form-item prop="number">
        <el-input v-model="phone.number" placeholder="手机号码">
          <template #prepend>
            <el-select
              v-model="country"
              filterable
              :filter-method="fileterSelectOpts"
              style="width: 90px"
              @change="selectChange"
            >
              <el-option-group>
                <el-option disabled value="选择国家/地区"></el-option>
              </el-option-group>
              <template v-for="item in phoneCodeList" :key="item.value">
                <el-option :value="item.code">{{ item.value }}</el-option>
              </template>
            </el-select>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="verificationCode">
        <div class="code">
          <el-input
            v-model="phone.verificationCode"
            placeholder="验证码"
          ></el-input>
          <el-button type="primary" class="get-code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
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
