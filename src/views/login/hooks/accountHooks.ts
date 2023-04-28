import { reactive } from "vue"
import type { FormRules } from "element-plus"

export const formRules = reactive<FormRules>({
  name: [
    { required: true, message: "请输入登录账号", trigger: "blur" },
    {
      pattern: /^[a-zA-Z0-9]{8,12}$/,
      message: "登录账号必须是8-12个字母或数字",
      trigger: "blur"
    }
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    {
      pattern: /^[a-zA-Z0-9]{6,12}$/,
      message: "密码必须是6-12个字母或数字",
      trigger: "blur"
    }
  ]
})
