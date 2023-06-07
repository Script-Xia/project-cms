import { PageName } from "components/page-content/types"

export interface IPageListQuery {
  pageName: PageName
  queryInfo: { [key: string]: any }
}
