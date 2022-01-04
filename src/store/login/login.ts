import { Module } from "vuex"

import { accountLoginRequest } from "@/services/login/login"
import { IAccount } from "@/services/login/types"

import { IRootState } from "../types"
import { ILoginState } from "./types"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {}
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      const { token } = loginResult.data
      commit("changeToken", token)
      // console.log("loginResult:", loginResult)
      // console.log("执行accountLoginAction", commit, payload)
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  }
}

export default loginModule
