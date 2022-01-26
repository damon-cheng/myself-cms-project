import ldRqusest from "@/services"
import { IDataType } from "@/services/types"

export function getPageListData(url: string, queryInfo: any) {
  return ldRqusest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return ldRqusest.delete<IDataType>({
    url
  })
}

export function createPageData(url: string, newData: any) {
  return ldRqusest.post<IDataType>({
    url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return ldRqusest.patch<IDataType>({
    url,
    data: editData
  })
}
