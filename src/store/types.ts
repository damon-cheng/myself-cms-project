import { ILoginState } from "@/store/login/types"

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
}
//使用交叉类型
export type IStoreType = IRootState & IRootWithModule

//使用接口继承
export interface IStoreInterFace extends IRootState, IRootWithModule {}
