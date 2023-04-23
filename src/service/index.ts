import YWRequest from "./request/request"

const BASE_URL = import.meta.env.VITE_BASE_URL
const TIME_OUT = import.meta.env.VITE_TIME_OUT

const ywRequest = new YWRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      // 添加token
      const token = "token"
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    }
  }
})

export default ywRequest
