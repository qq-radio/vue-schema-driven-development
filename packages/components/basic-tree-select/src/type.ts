export interface BasicTreeSelectProps {
  modelValue?: TreeSelectModelValue
  clearable?: boolean

  data?: Recordable[]
  api?: () => Promise<any>
  resultField?: string
}

export type TreeSelectModelValue = string | number | boolean | object
