import { createStore, Store, useStore as useVuexStore } from "vuex"
import login from "./login/login"
import system from "./system/system"
import { IRootState, IStoreInterFace } from "./types"
import { getPageListData } from "@/services/main/system/system"

const store = createStore<IRootState>({
  state() {
    return {
      name: "damon",
      age: 100,
      entireDepartment: [],
      entireRole: []
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData("/role/list", {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      commit("changeEntireDepartment", departmentList)
      commit("changeRntireRole", roleList)
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeRntireRole(state, list) {
      state.entireRole = list
    }
  },
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch("login/loadlocalLogin")
  store.dispatch("getInitialDataAction")
}

export function useStore(): Store<IStoreInterFace> {
  return useVuexStore()
}

export default store
