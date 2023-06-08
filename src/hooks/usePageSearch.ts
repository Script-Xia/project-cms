import { ref } from "vue"
import PageContent from "@/components/page-content"
import { usePermission } from "@/hooks/usePermission"
import type { PageName } from "components/page-content/types"

export function usePageSearch(pageName: PageName) {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  // 是否拥有搜索的权限
  const isSearch = usePermission(pageName, "query")

  // 重置操作
  const handleReset = () => {
    pageContentRef.value?.getPageList()
  }
  // 搜索操作
  const handleSearch = (formData: any) => {
    pageContentRef.value?.getPageList(formData)
  }

  return { pageContentRef, isSearch, handleSearch, handleReset }
}
