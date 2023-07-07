import { ywRequest } from "@/service/"
import type { IDataType } from "@/service/type"

export const getPageListData = (url: string, queryInfo: any) => {
  return ywRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export const createPageData = (url: string, newData: any) => {
  return ywRequest.post<IDataType>({
    url,
    data: newData
  })
}

export const editPageData = (url: string, editData: any) => {
  return ywRequest.patch<IDataType>({
    url,
    data: editData
  })
}

export const deletePageListData = (url: string) => {
  return ywRequest.delete<IDataType>({
    url
  })
}
