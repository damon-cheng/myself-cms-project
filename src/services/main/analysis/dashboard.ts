import ldRqusest from "@/services"
import { IDataType } from "@/services/types"

enum DashboardAPI {
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  categorySale = "/goods/address/sale"
}

export function getCategoryGoodsCount() {
  return ldRqusest.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodSale() {
  return ldRqusest.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  })
}
export function getCategoryGoodsFavor() {
  return ldRqusest.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  })
}
export function getCategoryAddressSale() {
  return ldRqusest.get<IDataType>({
    url: DashboardAPI.categorySale
  })
}
