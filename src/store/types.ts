import { ILoginState } from "@/store/login/types"
import { ISystemState } from "@/store/system/types"

export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}
//使用交叉类型
export type IStoreType = IRootState & IRootWithModule

//使用接口继承
export interface IStoreInterFace extends IRootState, IRootWithModule {}
