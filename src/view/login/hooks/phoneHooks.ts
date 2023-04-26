import { reactive } from "vue"
import type { FormRules } from "element-plus"

export const formRules = reactive<FormRules>({
  number: [
    { required: true, message: "请输入手机号码", trigger: "blur" },
    {
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: "请输入正确的手机号码",
      trigger: "blur"
    }
  ],
  verificationCode: [
    { required: true, message: "请输入验证码", trigger: "blur" },
    {
      pattern: /^[a-zA-Z0-9]{8,12}$/,
      message: "密码必须是8-12个字母或数字",
      trigger: "blur"
    }
  ]
})
