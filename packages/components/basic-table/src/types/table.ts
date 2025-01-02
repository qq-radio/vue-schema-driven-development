import type { TableHeaderCallbackParams, TableCellCallbackParams } from './'
import type { BasicFormProps, FormSchema } from '@center/components/basic-form/src/types'
import type { BasicButtonGroupProps, Button } from '@center/components/basic-button-group'
import { DisplayType } from '@center/components/basic-display'
import type { Page } from '@center/components/basic-pagination'

import type { UseTableDataReturn } from '../hooks/useTableData'
import type { UseTableSelectionReturn } from '../hooks/useTableSelection'
import type { UseTableRadioSelectionReturn } from '../hooks/useTableRadioSelection'

import type { Ref, ComputedRef } from 'vue'
import type { PaginationProps, TableColumnCtx } from 'element-plus'

export interface BasicTableProps {
  schemas?: TableSchema[]

  // for table search
  request?: (params: Recordable) => Promise<{
    records: Array<Recordable>
    total: number
  }>
  searchParams?: Recordable
  extraParams?: Recordable
  paramsFormatter?: (params: Recordable) => Recordable
  searchSchemas?: FormSchema[]
  searchProps?: Partial<BasicFormProps>
  immediate?: boolean
  loading?: boolean

  // for table data
  data?: Array<Recordable>
  dataFormatter?: (tableDatas: Array<Recordable>) => Array<Recordable>

  // for table pagination
  showPagination?: boolean
  paginationProps?: Partial<PaginationProps>
  currentPageField?: string
  pageSizeField?: string

  // for table operation
  operations?: Button[]
  operationProps?: Pick<
    BasicButtonGroupProps,
    'confirmType' | 'showNumber' | 'callbackParams' | 'buttonProps'
  >

  // for table special column
  rowKey?: string

  hasRadioSelection?: boolean
  radioSelectionColumnProps?: Partial<TableColumnCtx<any>>

  hasSelection?: boolean
  selectionColumnProps?: Partial<TableColumnCtx<any>>

  hasIndex?: boolean
  indexColumnProps?: Partial<TableColumnCtx<any>>

  hasExpand?: boolean
  expandColumnProps?: Partial<TableColumnCtx<any>>

  actions?: Button[]
  actionColumnProps?: Partial<TableColumnCtx<any>>
  actionProps?: Pick<
    BasicButtonGroupProps,
    'confirmType' | 'showNumber' | 'callbackParams' | 'buttonProps'
  >
}

export interface BasicTableEmits {
  (e: 'register', methods: TableMethods): void
  (e: 'search', params: Recordable): void
  (e: 'search-params-change', params: Recordable): void
  (e: 'update:searchParams', params: Recordable): void
  (e: 'reset', params: Recordable): void
  (e: 'pagination-change', page: Page): void
  (e: 'request-success', tableDatas: Array<Recordable>): void
  (e: 'request-error', error: unknown): void
  (e: 'request-complete', tableDatas: Array<Recordable>): void
}

export interface TableSchema {
  prop?: string
  label?: string
  width?: string | number
  minWidth?: string | number
  fixed?: 'left' | 'right' | boolean
  visible?: boolean | Ref<boolean> | ComputedRef<boolean>
  formatter?: (params: TableCellCallbackParams) => any
  columnProps?: Partial<TableColumnCtx<any>>

  // for column search
  searchable?: boolean
  searchConfig?: FormSchema

  // for column header
  headerTooltip?: string
  customHeaderRender?: (params: TableHeaderCallbackParams) => RenderType
  customHeaderSlot?: string

  // for column cell
  customRender?: (params: TableCellCallbackParams) => RenderType
  customSlot?: string
  display?: DisplayType
  displayProps?: Recordable
  displaySlots?: Recordable
}

export interface TableMethods
  extends Pick<
      UseTableDataReturn,
      'getTableDatas' | 'getSearchParams' | 'getRequestParams' | 'reQuery'
    >,
    Pick<
      UseTableSelectionReturn,
      | 'getSelectedValues'
      | 'setSelectedValues'
      | 'getSelectedRows'
      | 'setSelectedRows'
      | 'clearSelected'
      | 'checkHasSelection'
      | 'validateHasSelection'
    >,
    Pick<
      UseTableRadioSelectionReturn,
      | 'getRadioSelectedValue'
      | 'setRadioSelectedValue'
      | 'getRadioSelectedRow'
      | 'setRadioSelectedRow'
      | 'clearRadioSelected'
      | 'checkHasRadioSelection'
      | 'validateHasRadioSelection'
    > {
  setTableProps: (props: Partial<BasicTableProps>) => void
}
