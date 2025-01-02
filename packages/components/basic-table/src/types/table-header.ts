import type { TableSchema } from './'
import type { TableColumnCtx } from 'element-plus'

export interface TableHeaderProps {
  rowIndex: number
  column: TableColumnCtx<any>
  schema: TableSchema
}

export type TableHeaderCallbackParams = TableHeaderProps
