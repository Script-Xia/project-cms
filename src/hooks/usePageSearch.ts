import { ref } from "vue"
import PageContent from "@/components/page-content"

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleReset = () => {
    pageContentRef.value?.getPageList()
  }
  const handleSearch = (formData: any) => {
    pageContentRef.value?.getPageList(formData)
  }

  return { pageContentRef, handleSearch, handleReset }
}
