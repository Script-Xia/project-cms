import type { IPropList } from "@/base-ui/table/types"

export type PageName = "users" | "role"

export interface IContentTableConfig {
  propList: IPropList[]
  title: string
  showOverflowTooltip?: boolean
  showIndexColumn?: boolean
  showSelectColumn?: boolean
  [key: string]: any
}
