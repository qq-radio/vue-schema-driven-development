export * from './src/types'

export { useForm } from './src/hooks/useForm'

import ComponentFile from './src/BasicForm.vue'

export type BasicFormInstance = InstanceType<typeof ComponentFile>

export const BasicForm = ComponentFile
