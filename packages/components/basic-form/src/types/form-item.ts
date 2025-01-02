import type { BasicFormProps, FormSchema, FormMethods } from './'

export interface FormItemProps {
  modelValue: FieldValue
  schemaItem: FormSchema

  formProps: FormProps
  formModel: Recordable
  formMethods: FormMethods
}

export interface FormItemEmits {
  (e: 'update:modelValue', value: FieldValue): void
  (e: 'change', value: FieldValue, schemaItem: FormSchema): void
  (e: 'field-change', values: Recordable): void
  (e: 'visible-change', prop: string, visible: boolean): void
}

type FormProps = Pick<
  BasicFormProps,
  'colProps' | 'titleColProps' | 'disabled' | 'hasLabel' | 'labelSuffix' | 'labelWidth'
>

export interface FormItemCallbackParams {
  value: FieldValue
  model: Recordable
  schema: FormSchema
}

export interface FormItemComponentPropsCallbackParams {
  value: FieldValue
  model: Recordable
  schema: FormSchema
  methods: FormMethods
}

export type FieldValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Date
  | string[]
  | number[]
  | boolean[]
  | Date[]
  | [Date, Date]
  | [number, number]
  | [string, string]
  | string[][]
  | number[][]
  | Recordable
