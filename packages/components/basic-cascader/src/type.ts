export interface BasicCascaderProps {
  modelValue?: CascaderModelValue
  clearable?: boolean

  options?: Recordable[]
  api?: () => Promise<any>
  resultField?: string
}

export type CascaderModelValue = undefined | string | number | string[] | number[]
