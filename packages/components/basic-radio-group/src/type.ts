export interface BasicRadioGroupProps {
  modelValue?: RadioModelValue
  isButton?: boolean
  disabled?: boolean

  options?: (RadioOption & Recordable)[]
  api?: () => Promise<any[]>
  resultField?: string
  labelField?: string
  valueField?: string
  formatter?: (option: RadioOption) => string

  render?: (params: RadioCallbackParams) => RenderType
}

export type RadioModelValue = undefined | string | number

export interface RadioOption extends Recordable {
  label?: string
  value?: string | number
  disabled?: boolean
  border?: boolean
  size?: 'large' | 'default' | 'small'

  isButton?: boolean
  customRender?: (params: RadioCallbackParams) => RenderType
  customSlot?: string
}

export interface RadioCallbackParams {
  label?: string
  value?: RadioModelValue
  option: RadioOption
}
