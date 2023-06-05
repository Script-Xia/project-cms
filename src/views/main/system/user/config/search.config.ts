import { IForm } from "@/base-ui/form"
export const searchFormConfig: IForm = {
  formItems: [
    {
      type: "input",
      field: "name",
      label: "姓名",
      placeholder: "请输入你的姓名"
    },
    {
      type: "input",
      field: "cellphone",
      label: "手机号码",
      placeholder: "请输入你的手机号码"
    },
    {
      type: "select",
      field: "hobby",
      label: "爱好",
      placeholder: "请选择你的爱好",
      options: [
        {
          label: "唱",
          value: "sing"
        },
        {
          label: "跳",
          value: "dance"
        },
        {
          label: "rap",
          value: "rap"
        },
        {
          label: "篮球",
          value: "basketball"
        }
      ]
    },
    {
      type: "date-picker",
      field: "createTime",
      label: "创建时间",
      placeholder: "请输入创建时间"
    }
  ]
}
