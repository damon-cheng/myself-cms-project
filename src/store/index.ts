import { createStore, Store, useStore as useVuexStore } from "vuex"
import login from "./login/login"
import system from "./main/system/system"
import dashboard from "./main/analysis/dashboard"
import { IRootState, IStoreInterFace } from "./types"
import { getPageListData } from "@/services/main/system/system"

const store = createStore<IRootState>({
  state() {
    return {
      name: "damon",
      age: 100,
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
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
      const menuResult = await getPageListData("/menu/list", {})
      const { list: entireMenu } = menuResult.data

      commit("changeEntireDepartment", departmentList)
      commit("changeEntireRole", roleList)
      commit("changeMenuResult", entireMenu)
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeMenuResult(state, list) {
      state.entireMenu = list
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

export function setupStore() {
  store.dispatch("login/loadlocalLogin")
  //store.dispatch("getInitialDataAction")
}

export function useStore(): Store<IStoreInterFace> {
  return useVuexStore()
}

export default store
