import { IForm } from "@/base-ui/form"

export const modalConfig: IForm = {
  colLayout: { span: 24 },
  formItems: [
    {
      type: "input",
      field: "name",
      label: "用户名",
      placeholder: "请输入用户名"
    },
    {
      type: "input",
      field: "realname",
      label: "真实姓名",
      placeholder: "请输入真实姓名"
    },
    {
      type: "input",
      field: "password",
      label: "用户密码",
      placeholder: "请输入用户密码",
      isHidden: false,
      showPassword: true
    },
    {
      type: "input",
      field: "cellphone",
      label: "手机号码",
      placeholder: "请输入手机号码"
    },
    {
      type: "select",
      field: "departmentId",
      label: "部门",
      placeholder: "请选择部门",
      options: []
    },
    {
      type: "select",
      field: "roleId",
      label: "角色",
      placeholder: "请选择角色",
      options: []
    }
  ]
}
