import { useLoginStore } from "@/store"
import type { PageName } from "components/page-content/types"

type IHandleType = "create" | "update" | "delete" | "query"

// 根据页面名称和操作类型得到操作权限
export function usePermission(pageName: PageName, handleType: IHandleType) {
  const permissions = useLoginStore().permissions
  const permission = `system:${pageName}:${handleType}`
  return permissions.includes(permission)
}
