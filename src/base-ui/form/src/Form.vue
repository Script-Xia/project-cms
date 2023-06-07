<template>
  <div class="form">
    <slot name="header"></slot>
    <ElForm :label-width="labelWidth">
      <slot name="prepend"></slot>
      <ElRow>
        <template v-for="item in formItems" :key="item.label">
          <ElCol v-bind="colLayout">
            <ElFormItem
              :label="item.label"
              :style="itemStyle"
              :rules="item.rules"
            >
              <component
                v-if="!item.isHidden"
                :is="componentName(item.type)"
                :disabled="item.disabled"
                :placeholder="item.placeholder"
                :show-password="item.showPassword"
                :required="item.required"
                v-bind="item.otherConfig"
                v-model="formData[item.field]"
              >
                <template v-if="item.type === 'select'">
                  <ElOption
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                    >{{ option.label }}</ElOption
                  >
                </template>
              </component>
            </ElFormItem>
          </ElCol>
        </template>
      </ElRow>
      <slot name="append"></slot>
    </ElForm>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import type { IItemConfig } from "../types"

// :model-value="modelValue[item.field]"
// @update:modelValue="handleValueChange($event, item.field)"
interface IProp {
  modelValue: { [key: string]: any }
  formItems: IItemConfig[]
  colLayout?: { [key: string]: number }
  itemStyle?: { [key: string]: any }
  labelWidth?: string
}
const props = withDefaults(defineProps<IProp>(), {
  labelWidth: "100px",
  colLayout: () => ({
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }),
  itemStyle: () => ({
    padding: "0 40px"
  }),
  formItems: () => [],
  modelValue: () => ({})
})
const emit = defineEmits(["update:modelValue"])
const componentName = (type: string) => `el-${type}`
// 通过浅拷贝获得传入表单数据对象的拷贝
const formData = ref({ ...props.modelValue })

watch(
  formData,
  newValue => {
    emit("update:modelValue", newValue)
  },
  { deep: true }
)
</script>

<style lang="less">
.form {
  padding-top: 22px;
}

.el-form-item--default .el-form-item__content > div {
  width: 100%;
}
</style>
