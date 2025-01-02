export * from './src/types'

export { useTable } from './src/hooks/useTable'

import ComponentFile from './src/BasicTable.vue'

export type BasicTableInstance = InstanceType<typeof ComponentFile>

export const BasicTable = ComponentFile
