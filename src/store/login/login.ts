import { Module } from "vuex"

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
    accountLoginAction({ commit }, payload: any) {
      console.log("执行accountLoginAction", commit, payload)
    }
  },
  mutations: {}
}

export default loginModule
