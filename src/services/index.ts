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
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default ldRqusest
