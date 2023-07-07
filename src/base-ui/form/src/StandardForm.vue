<template>
  <div class="form">
    <slot name="header"></slot>
    <ElForm :label-width="labelWidth">
      <slot name="prepend"></slot>
      <ElRow>
        <template v-for="item in formItems" :key="item.label">
          <ElCol v-bind="colLayout">
            <ElFormItem
              v-if="!item.isHidden"
              :label="item.label"
              :style="itemStyle"
              :rules="item.rules"
            >
              <component
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
                  >
                    {{ option.label }}
                  </ElOption>
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
import _ from "lodash"
import type { IItemConfig } from "../types"

interface IProp {
  modelValue: { [key: string]: any }
  formItems: IItemConfig[]
  disabled?: boolean
  labelWidth?: string
  colLayout?: { [key: string]: number }
  itemStyle?: { [key: string]: any }
}
const props = withDefaults(defineProps<IProp>(), {
  disabled: false,
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
  () => props.modelValue,
  (newValue: any) => {
    formData.value = newValue
  },
  { deep: true }
)

watch(
  formData,
  newValue => {
    emit("update:modelValue", newValue)
  },
  { deep: true }
)

const isSelectCmp = (conf: IItemConfig) => {
  return [
    "select",
    "tree-select",
    "radio",
    "checkbox",
    "cascader",
    "switch",
    "date"
  ].includes(conf.type)
}

const setRequiredRule = (conf: IItemConfig) => {
  //如果设置了required=true,但没有写rules，则给予默认的必选项rules
  if (conf.required) {
    let pre = isSelectCmp(conf) ? "请选择" : "请输入"
    let requiredMsg = pre + conf.label
    let requiredRule: any = {
      message: requiredMsg,
      trigger: ["blur", "change"]
    }
    if (typeof conf.required === "function") {
      //如果必填项是函数，则取函数条件下时候的必填规则
      requiredRule.validator = (rule: any, value: any, callback: any) => {
        //满足特定条件下的规则函数，并且值为空，则抛出当前规则下的必填验证
        if (
          typeof conf.required === "function" &&
          conf.required.call(this, value, formData) &&
          !value
        ) {
          callback(new Error(rule.message))
        } else {
          callback()
        }
      }
    } else {
      //如果含有创建字段，则验证规则还要包含到创建值
      // if (conf.createField) {
      //   let prop = this.getRealProp(conf)
      //   requiredRule.validator = (rule, value, callback) => {
      //     //属性值和创建值同时都不存在时，验证必填规则
      //     if (!this.formModel[prop] && !this.formModel[conf.createField]) {
      //       callback(new Error(rule.message))
      //     } else {
      //       callback()
      //     }
      //   }
      // } else {
      requiredRule.required = true
      // }
    }
    if (conf.rules) {
      //如果已存在了自定义规则，要判断类型，进行合并
      if (Array.isArray(conf.rules)) {
        //如果自定义的规则中，没有配置required规则，则默认加入requiredRule
        if (conf.rules.find(a => a.required === undefined)) {
          conf.rules.unshift(requiredRule)
        }
      } else if (_.isPlainObject(conf.rules)) {
        if (conf.rules.required === undefined) {
          //定义的不是required规则
          conf.rules = [requiredRule, conf.rules] //合并规则为数组
        }
      }
    } else {
      conf.rules = requiredRule
    }
  } else {
    conf.required = false
  }
}

const rebuildformItems = (items: IItemConfig[]) => {
  const formConf = _.cloneDeep(items)

  formConf.forEach((conf: IItemConfig) => {
    if (props.disabled && conf.disabled !== false) {
      //如果form被禁用，且item没有被解禁,设置子item禁用
      conf.disabled = true
    }

    if (conf.disabled === false || !props.disabled) {
      //如果没有被禁用，给每个字段属性设置规则
      setRequiredRule(conf)
    }
  })
}
const formConf = ref(rebuildformItems(props.formItems))
</script>

<style lang="less">
.form {
  padding-top: 22px;
}

.el-form-item--default .el-form-item__content > div {
  width: 100%;
}
</style>
