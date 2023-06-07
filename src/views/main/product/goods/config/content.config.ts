import { IContentTableConfig } from "components/page-content/types"

export const contentTableConfig: IContentTableConfig = {
  title: "商品列表",
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    {
      prop: "name",
      label: "商品名称",
      minWidth: "180",
      showOverflowTooltip: true
    },
    {
      prop: "desc",
      label: "商品描述",
      minWidth: "180",
      showOverflowTooltip: true
    },
    { prop: "oldPrice", label: "原价格", minWidth: "80" },
    { prop: "newPrice", label: "现价格", minWidth: "80" },
    { prop: "imgUrl", label: "商品图片", minWidth: "100", slotName: "image" },
    { prop: "status", label: "状态", minWidth: "100", slotName: "status" },
    { prop: "inventoryCount", label: "库存数量", minWidth: "80" },
    { prop: "saleCount", label: "已售数量", minWidth: "80" },
    { prop: "favorCount", label: "点赞数量", minWidth: "80" },
    {
      prop: "address",
      label: "地址",
      minWidth: "100",
      showOverflowTooltip: true
    },
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
    { label: "操作", minWidth: "140", slotName: "operate", fixed: "right" }
  ]
}
