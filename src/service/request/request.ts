import axios from "axios"
import type { AxiosInstance } from "axios"
import type { YWRequestConfig, YWRequestInterceptors } from "./type"
import type { LoadingInstance } from "element-plus/lib/components/loading/src/loading"

const DEFAULT_LOADING = true

export default class YWRequest {
  instance: AxiosInstance
  interceptors?: YWRequestInterceptors
  loading?: LoadingInstance
  showLoading: boolean

  constructor(config: YWRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // showLoading 默认为 true
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    // config 参数中有 interceptors 属性的实例才会有的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requerequestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所有的实例都会有的拦截器
    this.instance.interceptors.request.use(
      config => {
        // 添加 loading
        if (this.showLoading) {
          this.loading = ElLoading.service({
            text: "正在发送请求......",
            lock: true,
            background: "rgba(0, 0, 0, 0.5)"
          })
        }
        return config
      },
      err => err
    )

    this.instance.interceptors.response.use(
      res => {
        // 移除 loading
        this.loading?.close()

        const data = res.data
        if (data.returnCode === "-1001") {
          console.log("请求失败", "错误信息")
        } else {
          return data
        }
      },
      err => {
        // 移除 loading
        this.loading?.close()

        if (err.response.status === "404") {
          console.log("404")
        }
        return err
      }
    )
  }

  // 对单个请求也做了拦截
  request<T>(config: YWRequestConfig<T>): Promise<T> {
    // 请求成功拦截
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    return this.instance
      .request<any, T>(config)
      .then(res => {
        // 响应成功拦截
        if (config.showLoading === false) {
          this.showLoading = config.showLoading
        }

        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        this.showLoading = DEFAULT_LOADING
        return res
      })
      .catch(err => {
        this.showLoading = DEFAULT_LOADING
        return err
      })
  }

  get<T>(config: YWRequestConfig<T>) {
    return this.request<T>({ ...config, method: "GET" })
  }

  post<T>(config: YWRequestConfig<T>) {
    return this.request<T>({ ...config, method: "POST" })
  }

  delete<T>(config: YWRequestConfig<T>) {
    return this.request<T>({ ...config, method: "DELETE" })
  }

  patch<T>(config: YWRequestConfig<T>) {
    return this.request<T>({ ...config, method: "PATCH" })
  }
}
