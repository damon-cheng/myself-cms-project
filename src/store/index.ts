import { createStore, Store, useStore as useVuexStore } from "vuex"
import login from "./login/login"
import system from "./system/system"
import { IRootState, IStoreInterFace } from "./types"

const store = createStore<IRootState>({
  state() {
    return {
      name: "damon",
      age: 100
    }
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch("login/loadlocalLogin")
}

export function useStore(): Store<IStoreInterFace> {
  return useVuexStore()
}

export default store
