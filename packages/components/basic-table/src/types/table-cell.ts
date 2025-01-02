import type { TableSchema } from './'
import type { TableColumnCtx } from 'element-plus'

export interface TableCellProps {
  row: Recordable
  rowIndex: number
  column: TableColumnCtx<any>
  schema: TableSchema
}

export type TableCellCallbackParams = TableCellProps & {
  value: any
}
