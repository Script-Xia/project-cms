import { ref } from "vue"
import PageModal from "@/components/page-modal"

type callbackFn = () => void

export function usePageModal(addCb: callbackFn, editCb: callbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  const handleAdd = () => {
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      pageModalRef.value.dialogTitle = "新增"
    }
    defaultInfo.value = {}
    addCb && addCb()
  }

  const handleEdit = (rowData: any) => {
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      pageModalRef.value.dialogTitle = "编辑"
    }
    defaultInfo.value = { ...rowData }
    editCb && editCb()
  }

  return { pageModalRef, defaultInfo, handleAdd, handleEdit }
}
