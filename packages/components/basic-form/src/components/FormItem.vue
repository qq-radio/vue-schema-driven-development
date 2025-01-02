<template>
  <template v-if="formItem.title">
    <el-col v-bind="getTitleColProps">
      <div :class="ns.e('title')" v-bind="formItem.titleProps">
        <div>
          <component :is="renderCustomTitle" v-if="isCustomTitle" />
          <span v-else :class="ns.e('title-text')">{{ formItem.title }}</span>
        </div>
        <div>
          <component :is="renderTooltip(formItem.titleTooltip)" v-if="formItem.titleTooltip" />
        </div>
      </div>
    </el-col>
  </template>
  <template v-else>
    <el-col v-if="getVisible" v-bind="getColProps">
      <el-form-item :prop="formItem.prop" :rules="getRules" :label-width="getLabelWidth">
        <template #label>
          <div :class="ns.e('label')">
            <div>
              <component :is="renderCustomLabel" v-if="isCustomLabel" />
              <span v-else>{{ getLabel }}</span>
            </div>
            <div>
              <component :is="renderTooltip(formItem.labelTooltip)" v-if="formItem.labelTooltip" />
            </div>
          </div>
        </template>
        <template #default>
          <component :is="renderCustomField" v-if="isCustomField" />
          <component
            :is="renderComponent"
            v-else
            v-bind="formItem.componentProps"
            v-model="stateValue"
            :disabled="getDisabled"
            @change="(...v: unknown[]) => onChange(v)"
          >
            <template v-for="(fieldSlot, key) in formItem.componentSlots" :key="key" #[key]="data">
              <component :is="fieldSlot" v-bind="data" />
            </template>
          </component>
        </template>
      </el-form-item>
    </el-col>
  </template>
</template>

<script setup lang="tsx">
import type {
  FormItemProps,
  FormItemEmits,
  FormItemCallbackParams,
  FieldValue,
  FormSchema,
  EnhancedFormSchema,
  ComponentProps,
} from '../types'

import { useBasicNamespace, useCustomRender } from '@center/composables'
import { useFormItemHandler } from '../hooks/useFormItemHandler'

import { getComponent } from '../tools/component'
import { normalizeSchema } from '../tools/normalize-schema'
import { normalizeRule } from '../tools/normalize-rule'

import { useSlots, ref, watchEffect, computed, unref } from 'vue'
import { isFunction, isUndefined } from 'lodash'
import { InfoFilled } from '@element-plus/icons-vue'

const ns = useBasicNamespace('form-item')

defineOptions({
  name: 'FormItem',
})

const slots = useSlots()

const props = withDefaults(defineProps<FormItemProps>(), {
  formProps: () => ({}),
  formModel: () => ({}),
})

const emit = defineEmits<FormItemEmits>()

const stateValue = ref<FieldValue>('')

const formItem = ref<EnhancedFormSchema>({
  prop: '',
  label: '',
  component: 'input',
  componentProps: {},
})

const callbackParams = computed<FormItemCallbackParams>(() => ({
  value: props.modelValue,
  model: props.formModel,
  schema: props.schemaItem,
}))

const enhanceSchema = (schemaItem: FormSchema): EnhancedFormSchema => {
  const { componentProps: originComponentProps } = schemaItem
  let componentProps = originComponentProps as ComponentProps
  if (isFunction(originComponentProps)) {
    componentProps = originComponentProps({
      ...callbackParams.value,
      methods: props.formMethods,
    })
  }
  return normalizeSchema({
    ...schemaItem,
    componentProps,
    component: schemaItem.component || 'input',
  })
}

watchEffect(() => {
  stateValue.value = props.modelValue
  // escape ts error can't understand
  formItem.value = enhanceSchema(props.schemaItem) as any
})

const getTitleColProps = computed(() => ({
  ...props.formProps.titleColProps,
  ...formItem.value.titleColProps,
}))

const getColProps = computed(() => ({ ...props.formProps.colProps, ...formItem.value.colProps }))

const getVisible = computed(() => {
  const { prop, visible } = formItem.value
  const isVisible = isFunction(visible) ? visible(callbackParams.value) : unref(visible)
  const flag = isVisible !== false
  emit('visible-change', prop as string, flag)
  return flag
})

const getLabelWidth = computed(() => formItem.value.labelWidth || props.formProps.labelWidth)

const getLabel = computed(() => {
  const { hasLabel: formHasLabel, labelSuffix = '' } = props.formProps
  const { hasLabel, label } = formItem.value
  const flag = isUndefined(hasLabel) ? formHasLabel : hasLabel
  return flag ? label + labelSuffix : ''
})

const getRules = computed(() => normalizeRule(formItem.value))

const getDisabled = computed(() => {
  const { disabled: formDisabled } = props.formProps
  const { disabled } = formItem.value

  if (isUndefined(disabled)) {
    return unref(formDisabled)
  }

  if (isFunction(disabled)) {
    return disabled(callbackParams.value)
  }

  return unref(disabled)
})

const { handleChange } = useFormItemHandler({
  emit,
})

const onChange = (values: unknown[]) => {
  handleChange(values, formItem.value)
  emit('update:modelValue', stateValue.value)
  emit('change', stateValue.value, formItem.value)
}

const { renderItem } = useCustomRender({ slots })

const isCustomTitle = formItem.value.customTitleRender || formItem.value.customTitleSlot

const renderCustomTitle = renderItem(
  {
    customRender: formItem.value.customTitleRender,
    customSlot: formItem.value.customTitleSlot,
  },
  callbackParams.value,
)

const isCustomLabel = formItem.value.customLabelRender || formItem.value.customLabelSlot

const renderCustomLabel = renderItem(
  {
    customRender: formItem.value.customLabelRender,
    customSlot: formItem.value.customLabelSlot,
  },
  callbackParams.value,
)

const isCustomField = formItem.value.customRender || formItem.value.customSlot

const renderCustomField = renderItem(
  {
    customRender: formItem.value.customRender,
    customSlot: formItem.value.customSlot,
  },
  callbackParams.value,
)

const renderComponent = getComponent(formItem.value.component)

const renderTooltip = (content) =>
  content && (
    <el-tooltip placement="top" content={content}>
      <el-icon>
        <InfoFilled />
      </el-icon>
    </el-tooltip>
  )
</script>

<style scoped lang="scss">
@use '../style.scss';
</style>
