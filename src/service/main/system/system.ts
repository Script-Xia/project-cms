import { ywRequest } from "@/service/"
import type { IDataType } from "@/service/type"

export const getPageListData = (url: string, queryInfo: any) => {
  return ywRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export const deletePageListData = (url: string) => {
  return ywRequest.delete<IDataType>({
    url
  })
}
