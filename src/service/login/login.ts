import { ywRequest } from "../index"
import { IAccountLogin } from "view/login/type"
import { ILoginResult, IDataType } from "./type"

enum LoginUrl {
  AccountLogin = "/login",
  LoginUserInfo = "/users",
  UserMenus = "/role/"
}

export const accountLoginRequest = (account: IAccountLogin) => {
  return ywRequest.post<IDataType<ILoginResult>>({
    url: LoginUrl.AccountLogin,
    data: account
  })
}

export const getUserInfoById = (id: number) => {
  return ywRequest.get<IDataType>({
    url: LoginUrl.LoginUserInfo + id
  })
}

export const getUserMenuByRoleId = (id: number) => {
  return ywRequest.get<IDataType>({
    url: LoginUrl.UserMenus + id + "/menu"
  })
}
