import ldRqusest from ".."
import { IAccount, ILoginResult } from "./types"
import { IDataType } from "../types"

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/",
  UserMenu = "/role/"
}

export function accountLoginRequest(account: IAccount) {
  return ldRqusest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return ldRqusest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoding: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return ldRqusest.get<IDataType>({
    url: LoginAPI.UserMenu + id + "/menu",
    showLoding: false
  })
}
