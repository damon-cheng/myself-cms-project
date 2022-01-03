import axios from "axios"
import type { AxiosInstance } from "axios"
import type { LDRquestInterceptors, LDRquestConfig } from "./types"

import { ElLoading } from "element-plus"
import { LoadingInstance } from "element-plus/lib/components/loading/src/loading"

const DEFAULT_LOADING = true

class LDRequest {
  instance: AxiosInstance
  interceptors?: LDRquestInterceptors
  loading?: LoadingInstance
  showLoding: boolean

  constructor(config: LDRquestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoding = config.showLoding ?? DEFAULT_LOADING

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoding) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在加载",
            background: "rgba(0, 0, 0, .5)"
          })
        }
        console.log("全局请求成功")
        return config
      },
      (err) => {
        console.log("全局请求失败")
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        console.log("全局响应成功")
        return res.data
      },
      (err) => {
        this.loading?.close()
        console.log("全局响应失败")
        return err
      }
    )
  }
  request<T>(config: LDRquestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoding === false) {
        this.showLoding = config.showLoding
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoding = DEFAULT_LOADING
          console.log("axios:", res)
          resolve(res)
        })
        .catch((err) => {
          this.showLoding = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: LDRquestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }

  post<T>(config: LDRquestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }

  delete<T>(config: LDRquestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }

  patch<T>(config: LDRquestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }
}

export default LDRequest
