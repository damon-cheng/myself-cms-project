import ldRqusest from ".."
import { IAccount, IDataType, ILoginResult } from "./types"

enum LoginAPI {
  AccountLogin = "/login"
}

export function accountLoginRequest(account: IAccount) {
  return ldRqusest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
