import type { FormItemCallbackParams, FormItemComponentPropsCallbackParams } from './'
import type { UseFormSelfReturn } from '../hooks/useFormSelf'
import type { UseFormEventReturn } from '../hooks/useFormEvent'

import type { RowProps, ColProps, FormItemRule } from 'element-plus'
import type { Mutable } from 'element-plus/es/utils'
import type { MaybeRefOrGetter } from 'vue'

export interface BasicFormProps {
  modelValue?: Recordable
  schemas?: FormSchema[]

  loading?: boolean
  disabled?: boolean | MaybeRefOrGetter<boolean>
  filterHiddenFields?: boolean

  // for form layout
  rowProps?: Partial<Mutable<RowProps>>
  colProps?: Partial<Mutable<ColProps>>
  titleColProps?: Partial<Mutable<ColProps>>

  // for form label
  hasLabel?: boolean
  labelSuffix?: string
  labelWidth?: string | number
  labelPosition?: 'left' | 'right' | 'top'

  // for form footer
  hasFooter?: boolean
  footerAlign?: 'left' | 'right' | 'center'
  footerColProps?: Partial<Mutable<ColProps>>

  // for form footer button
  hasReset?: boolean
  resetText?: string
  submitText?: string
  hasErrorMessageTip?: boolean

  // for form adapt
  modelAdaptee?: (model: Recordable) => Recordable // interface data -> form model
  modelAdapter?: (model: Recordable) => Recordable // form model -> interface data
}

export interface BasicFormEmits {
  (e: 'register', methods: FormMethods): void
  (e: 'update:modelValue', values: Recordable): void
  (e: 'submit-error', errors: Recordable): void
  (e: 'submit', values: Recordable): void
  (e: 'reset', values?: Recordable): void
}

export interface FormSchema {
  prop?: string
  label?: string
  defaultValue?: string | number | boolean
  hasLabel?: boolean
  labelWidth?: string | number
  sort?: number
  visible?: boolean | ((parmas: FormItemCallbackParams) => boolean)
  disabled?: boolean | ((parmas: FormItemCallbackParams) => boolean)
  colProps?: Partial<Mutable<ColProps>>
  titleColProps?: Partial<Mutable<ColProps>>

  // for form item label
  labelTooltip?: string
  customLabelRender?: (params: FormItemCallbackParams) => RenderType
  customLabelSlot?: string

  // for form item field
  customRender?: (params: FormItemCallbackParams) => RenderType
  customSlot?: string
  component?: ComponentType
  componentProps?:
    | ComponentProps
    | ((parmas: FormItemComponentPropsCallbackParams) => ComponentProps)
  componentSlots?: Recordable

  // for form item rule
  required?: boolean
  min?: number
  max?: number
  noWhitespace?: boolean
  rules?: FormItemRule[]

  // for group form item
  title?: string
  titleProps?: Recordable
  titleTooltip?: string
  customTitleRender?: (params: FormItemCallbackParams) => RenderType
  customTitleSlot?: string
}

export type EnhancedFormSchema = Omit<FormSchema, 'component' | 'componentProps'> & {
  component: ComponentType
  componentProps: ComponentProps
}

export type FormSubmitResult = {
  valid: boolean
  values?: Recordable
  errors?: any
}

export interface FormMethods
  extends UseFormSelfReturn,
    Pick<
      UseFormEventReturn,
      | 'updateSchema'
      | 'removeSchema'
      | 'appendSchema'
      | 'getFieldValue'
      | 'getFieldsValue'
      | 'setFieldsValue'
    > {
  setFormProps: (props: Partial<BasicFormProps>) => void
  submit: () => Promise<FormSubmitResult>
  reset: () => void
}

export type ElementPlusComponentType =
  | 'input'
  | 'input-number'
  | 'textarea'
  | 'checkbox'
  | 'date-picker'
  | 'time-picker'
  | 'switch'
  | 'rate'
  | 'slider'
  | 'color-picker'

export type CustomComponentType =
  | 'input-number-range'
  | 'radio-group'
  | 'checkbox-group'
  | 'select'
  | 'tree-select'
  | 'cascader'
  | 'upload'

export type ComponentType = ElementPlusComponentType | CustomComponentType

export type ComponentProps = {
  placeholder?: string
  extraFields?: string[][]
  timeRangeMapFields?: [string, string]
  type?: string
} & Recordable
