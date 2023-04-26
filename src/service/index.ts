import YWRequest from "./request/request"
import localCache from "@/utils/cache"

const BASE_URL = import.meta.env.VITE_BASE_URL
const TIME_OUT = import.meta.env.VITE_TIME_OUT

export const ywRequest = new YWRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      // 添加 token 到请求头
      const token = localCache.getCache("token")
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

// export default ywRequest
