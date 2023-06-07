export interface ISelectOption {
  // 展示文本
  label: string
  // 获取的值
  value: string | number
}

export interface IItemConfig {
  // 表单子项对应数据项中的字段名
  field: string
  // 展示文本
  label: string
  // 表单子项的类型，可选项为 ElementUI 支持的表单子项
  type: string
  // 提示文本
  placeholder?: string
  // 是否显示切换密码图标
  showPassword?: boolean
  // 是否隐藏
  isHidden?: boolean
  // 是否禁用
  disabled?: boolean
  // 是否必填
  required?: boolean
  // 校验规则集
  rules?: any[]
  // 如果表单子项类型为 select，options 表示 select 子项的数据集合
  options?: ISelectOption[]
  // 其他配置
  otherConfig?: object
}

export interface IForm {
  // 表单子项的配置集合
  formItems: IItemConfig[]
  // 表单布局
  colLayout?: { [key: string]: any }
  // 表单子项的样式集合
  itemStyle?: { [key: string]: any }
  // 展示文本的容器宽度
  labelWidth?: string
}
