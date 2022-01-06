import { createStore, Store, useStore as useVuexStore } from "vuex"
import { IRootState } from "./types"
import login from "./login/login"
import { IStoreType, IStoreInterFace } from "./types"

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
    login
  }
})

export function setupStore() {
  store.dispatch("login/loadlocalLogin")
}

export function useStore(): Store<IStoreInterFace> {
  return useVuexStore()
}

export default store
