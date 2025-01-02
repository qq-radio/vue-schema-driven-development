import type { InputNumberProps } from 'element-plus'

export type InputNumberRangeModelValue = (null | undefined | number)[]

export interface BasicInputNumberRangeProps {
  modelValue?: InputNumberRangeModelValue
  disabled?: boolean
  startPlaceholder?: string
  endPlaceholder?: string
  inputNumberProps?: Partial<InputNumberProps>

  prefix?: string
  suffix?: string
  rangeSeparator?: string
}
