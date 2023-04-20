import { defineStore } from "pinia"
import { ref } from "vue"

const useNameStore = defineStore("name", () => {
  const name = ref("Jackie")

  return { name }
})

export default useNameStore
