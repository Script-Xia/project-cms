import axios from "axios"

// 全局配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = "http://httpbin.org"

axios
  .get("/get", {
    params: {
      name: "Joy",
      age: "22"
    },
    timeout: 20000
  })
  .then(res => {
    console.log(res)
  })

axios
  .post("/post", {
    data: {
      name: "Jackie",
      age: 23
    }
  })
  .then(res => {
    console.log(res)
  })

axios
  .all([
    axios.get("/get", {
      params: {
        name: "Joy",
        age: 22
      }
    }),
    axios.post("/post", {
      data: {
        name: "Jackie",
        age: 23
      }
    })
  ])
  .then(res => {
    console.log(res[0].data)
    console.log(res[1].data)
  })

// axios拦截器
// 请求拦截
/**
 *  fn1 请求成功后执行的拦截
 *  fn2 请求失败后执行的拦截
 */
axios.interceptors.request.use(
  config => {
    // 1. 给请求添加token
    // 2. isLoading动画
    return config
  },
  err => {
    return err
  }
)

// 响应拦截
/**
 * fn1 响应成功后执行的拦截 20x
 * fn2 响应失败后执行的拦截
 */
axios.interceptors.response.use(
  res => {
    return res
  },
  err => {
    console.log(err)
    return err
  }
)

// promise本身是可以有类型的
// 实例化promise后的泛型也是resolve函数中参数的类型
// new Promise<string>((resolve, reject) => {
//   resolve("Joy")
// }).then(res => {
//   console.log(res)
// })
