import { IContentTableConfig } from "components/page-content/types"

export const contentTableConfig: IContentTableConfig = {
  title: "菜单列表",
  showFooter: false,
  propList: [
    { prop: "name", label: "菜单名称", minWidth: "130" },
    { prop: "type", label: "类型", minWidth: "100" },
    { prop: "url", label: "菜单路径", minWidth: "130" },
    {
      prop: "icon",
      label: "菜单图标",
      minWidth: "150",
      showOverflowTooltip: true
    },
    { prop: "permission", label: "按钮权限", minWidth: "100" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "200",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "200",
      slotName: "updateAt"
    },
    { label: "操作", minWidth: "140", slotName: "operate" }
  ],
  childrenProps: {
    rowKey: "id",
    treeProp: {
      children: "children"
    }
  }
}
