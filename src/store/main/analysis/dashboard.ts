import { Module } from "vuex"
import { IRootState } from "../../types"
import { IDashboardState } from "./types"

import {
  getCategoryGoodsCount,
  getCategoryGoodSale,
  getCategoryGoodsFavor,
  getCategoryAddressSale
} from "@/services/main/analysis/dashboard"

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodSale: []
    }
  },
  getters: {},
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()
      commit("changeCategoryGoodsCount", categoryCountResult.data)
      const categorySaleResult = await getCategoryGoodSale()
      commit("changeCategoryGoodsSale", categorySaleResult.data)
      const categoryFavorResult = await getCategoryGoodsFavor()
      commit("changeCategoryGoodsFavor", categoryFavorResult.data)
      const addressGoodsResult = await getCategoryAddressSale()
      commit("changeAddressGoodsSale", addressGoodsResult.data)
    }
  }
}

export default dashboardModule
