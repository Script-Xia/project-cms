// 配置不同环境下的环境变量
// 1. 手动修改
// 开发环境
// const BASE_URL = "http://joy.org/dev"
// const BASE_NAME = "Joy"

// 测试环境
// const BASE_URL = "http://joy.org/test"
// const BASE_NAME = "Jackie"

// 生产环境
// const BASE_URL = "http://joy.org/prod"
// const BASE_NAME = "Kobe"

// 2.根据process.env.NODE_ENV的值来判断不同的环境
// 开发环境： "development"
// 测试环境： "test"
// 生产环境： "production"
let BASE_URL = ""
let BASE_NAME = ""

if (process.env.NODE_ENV == "development") {
  BASE_URL = BASE_URL = "http://joy.org/dev"
  BASE_NAME = "Joy"
} else if (process.env.NODE_ENV == "test") {
  BASE_URL = "http://joy.org/test"
  BASE_NAME = "Jackie"
} else if (process.env.NODE_ENV == "production") {
  BASE_URL = "http://joy.org/prod"
  BASE_NAME = "Kobe"
}

export { BASE_NAME, BASE_URL }
