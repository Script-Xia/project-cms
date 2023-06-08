export interface IPropList {
  prop?: string
  label: string
  slotName?: string
  // 当内容过长被隐藏时显示 tooltip
  showOverflowTooltip?: boolean
  [key: string]: any
}

export interface IChildrenProps {
  rowKey: string
  treeProp: {
    children: string
  }
}

export interface IPagination {
  pageSize: number
  currentPage: number
}
