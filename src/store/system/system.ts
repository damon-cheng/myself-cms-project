import { Module } from "vuex"
import { IRootState } from "../types"
import { ISystemState } from "./types"
import { getPageListData } from "@/services/main/system/system"

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  getters: {},
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const getResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      )
      const { list, totalCount } = getResult.data
      commit("changeUserList", list)
      commit("changeUserCount", totalCount)
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    }
  }
}

export default systemModule
