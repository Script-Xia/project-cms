<template>
  <div class="page-modal">
    <ElDialog v-model="dialogVisible" :title="dialogTitle" width="30%" center>
      <YWForm v-bind="modalConfig" v-model="formData"></YWForm>
      <template #footer>
        <span class="dialog-footer">
          <ElButton @click="dialogVisible = false">取消</ElButton>
          <ElButton type="primary" @click="handleModalConfirm"> 确认 </ElButton>
        </span>
      </template>
    </ElDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useSystemStore } from "@/store"
import type { IForm } from "@/base-ui/form"
import YWForm from "@/base-ui/form"
import { watch } from "vue"

interface IProp {
  pageName: string
  modalConfig: IForm
  defaultInfo: { [key: string]: any }
}

const props = withDefaults(defineProps<IProp>(), {
  defaultInfo: () => ({})
})

const store = useSystemStore()
const dialogVisible = ref(false)
const dialogTitle = ref("")
const formData = ref<any>({})

watch(
  () => props.defaultInfo,
  (newValue: any) => {
    for (const conf of props.modalConfig.formItems) {
      formData.value[`${conf.field}`] = newValue[`${conf.field}`]
    }
  }
)

const handleModalConfirm = () => {
  dialogVisible.value = false

  if (Object.keys(props.defaultInfo).length) {
    // 编辑
    store.editPageDataAction({
      pageName: props.pageName,
      editData: { ...formData.value },
      id: props.defaultInfo.id
    })
  } else {
    // 新增
    store.createPageDataAction({
      pageName: props.pageName,
      newData: { ...formData.value }
    })
  }
}

defineExpose({ dialogVisible, dialogTitle })
</script>

<style scoped lang="less">
.page-modal {
  :deep(.el-dialog--center .el-dialog__body) {
    padding: 0;
  }
}
</style>
