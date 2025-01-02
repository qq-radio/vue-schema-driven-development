export interface BasicSelectProps {
  modelValue?: SelectModelValue
  hasCheckAll?: boolean
  multiple?: boolean
  clearable?: boolean

  options?: (SelectOption & Recordable)[]
  api?: () => Promise<any[]>
  resultField?: string
  labelField?: string
  valueField?: string
  formatter?: (option: any) => any

  render?: (params: SelectCallbackParams) => RenderType
}

export type SelectModelValue = any

export interface SelectOption extends Recordable {
  label?: string
  value?: string | number
  disabled?: boolean

  customRender?: (params: SelectCallbackParams) => RenderType
  customSlot?: string
}

export interface SelectCallbackParams {
  labels?: string[]
  values?: SelectModelValue
  option: SelectOption
}
