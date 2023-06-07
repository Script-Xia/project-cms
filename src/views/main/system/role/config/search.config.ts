import { IForm } from "@/base-ui/form"
export const searchFormConfig: IForm = {
  formItems: [
    {
      type: "input",
      field: "name",
      label: "角色名称",
      placeholder: "请输入你的角色名称"
    },
    {
      type: "input",
      field: "intro",
      label: "权限介绍",
      placeholder: "请输入你的权限介绍"
    },
    {
      type: "date-picker",
      field: "createTime",
      label: "创建时间",
      placeholder: "请输入创建时间"
    }
  ]
}
