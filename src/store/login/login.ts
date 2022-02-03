import { Module } from "vuex"

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/services/login/login"
import { IAccount } from "@/services/login/types"
import { mapMenusToRoutes, mapMenusToPermissions } from "@/utils/map-menus"

import localCache from "@/utils/cache"
import router from "@/router"

import { IRootState } from "../types"
import { ILoginState } from "./types"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      //获取用户ID和token
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit("changeToken", token)
      localCache.setCache("token", token)

      dispatch("getInitialDataAction", null, { root: true })
      //获取用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit("changeUserInfo", userInfo)
      localCache.setCache("userInfo", userInfo)
      //获取用户权限和菜单

      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit("changeUserMenus", userMenus)
      localCache.setCache("userMenus", userMenus)

      router.push("/main")
    },
    loadlocalLogin({ commit, dispatch }) {
      const token = localCache.getCache("token")
      if (token) {
        commit("changeToken", token)
        dispatch("getInitialDataAction", null, { root: true })
      }
      const userInfo = localCache.getCache("userInfo")
      if (userInfo) commit("changeUserInfo", userInfo)
      const userMenus = localCache.getCache("userMenus")
      if (userMenus) commit("changeUserMenus", userMenus)
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute("main", route)
      })

      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
      console.log("permissions:", permissions)
    }
  }
}

export default loginModule
