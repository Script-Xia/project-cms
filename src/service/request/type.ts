import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface YWRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requerequestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface YWRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YWRequestInterceptors<T>
  showLoading?: boolean
}
