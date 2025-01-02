export interface BasicCheckboxGroupProps {
  modelValue?: CheckboxModelValue
  isButton?: boolean
  hasCheckAll?: boolean

  options?: (CheckboxOption & Recordable)[]
  api?: () => Promise<any[]>
  resultField?: string
  labelField?: string
  valueField?: string
  formatter?: (option: any) => any

  render?: (params: CheckboxCallbackParams) => RenderType
}

export type CheckboxModelValue = (string | number | boolean)[]

export interface CheckboxOption extends Recordable {
  label?: string
  value?: string | number
  disabled?: boolean
  border?: boolean
  size?: 'large' | 'default' | 'small'

  isButton?: boolean
  customRender?: (params: CheckboxCallbackParams) => RenderType
  customSlot?: string
}

export interface CheckboxCallbackParams {
  labels?: string[]
  values?: CheckboxModelValue
  option: CheckboxOption
}
