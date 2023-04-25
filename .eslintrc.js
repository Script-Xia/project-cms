module.exports = {
  root: true,
  env: {
    node: true,
    // 在setup中使用宏（defineExpose、defineEmit...）时跳过类型检测
    "vue/setup-compiler-macros": true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
    "plugin:prettier/recommended" // eslint标准兼容prettier
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 跳过 any 检测，在某些情况下需要用到 any
    "@typescript-eslint/no-explicit-any": "off",
    // 跳过检测没使用的变量，在引入组件后也会警告，所以关闭
    "@typescript-eslint/no-unused-vars": "off",
    // v3建议定义组件名时使用多词组合以避免与 HTML 标签名重复
    "vue/multi-word-component-names": "off"
  }
}
