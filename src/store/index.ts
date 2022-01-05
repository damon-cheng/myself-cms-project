import { createStore } from "vuex"
import { IRootState } from "./types"
import login from "./login/login"

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

export default store
