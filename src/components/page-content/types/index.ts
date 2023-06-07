import type { IPropList } from "@/base-ui/table/types"

export type PageName = "users" | "role" | "goods"

export interface IContentTableConfig {
  propList: IPropList[]
  title: string
  showIndexColumn?: boolean
  showSelectColumn?: boolean
  [key: string]: any
}

export interface IPagination {
  pageSize: number
  currentPage: number
}
