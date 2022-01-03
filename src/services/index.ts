import LDRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const ldRqusest = new LDRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = ""
      if (token && config.headers) {
        config.headers.Authorization = `bearer ${token}`
      }

      console.log("请求成功的拦截")
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log("请求失败的拦截")
      return err
    },
    responseInterceptor: (res) => {
      console.log("响应成功的拦截")
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log("响应失败的拦截")
      return err
    }
  }
})

export default ldRqusest
