import { ILoginState } from "@/store/login/types"
import { ISystemState } from "./main/system/types"
import { IDashboardState } from "./main/analysis/types"

export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  dashboard: IDashboardState
}
//使用交叉类型
export type IStoreType = IRootState & IRootWithModule

//使用接口继承
export interface IStoreInterFace extends IRootState, IRootWithModule {}
