import type { IPropList, IChildrenProps } from "@/base-ui/table/types"

export type PageName = "users" | "role" | "goods" | "menu" | "department"

export interface IContentTableConfig {
  propList: IPropList[]
  title: string
  showIndexColumn?: boolean
  showSelectColumn?: boolean
  childrenProps?: IChildrenProps
  [key: string]: any
}
