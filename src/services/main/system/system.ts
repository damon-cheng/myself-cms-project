import ldRqusest from "@/services"
import { IDataType } from "@/services/types"

export function getPageListData(url: string, queryInfo: any) {
  return ldRqusest.post<IDataType>({
    url,
    data: queryInfo
  })
}
