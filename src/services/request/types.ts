import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface LDRquestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface LDRquestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: LDRquestInterceptors<T>
  showLoding?: boolean
}
