import type { BasicTableProps } from '../types'
import type { BasicButtonGroupProps } from '@center/components/basic-button-group'

import type { ComputedRef } from 'vue'
import type { TableColumnCtx } from 'element-plus'

import { computed } from 'vue'

type Props = Pick<
  BasicTableProps,
  | 'radioSelectionColumnProps'
  | 'selectionColumnProps'
  | 'indexColumnProps'
  | 'expandColumnProps'
  | 'actionColumnProps'
  | 'actionProps'
>

type GetColumnProps = ComputedRef<Partial<TableColumnCtx<any>>>

export type UseTableColumnPropsReturn = ReturnType<typeof useTableColumnProps>

export function useTableColumnProps(props: Props) {
  const getRadioSelectionColumnProps: GetColumnProps = computed(() => ({
    key: 'radio-selection',
    align: 'center',
    width: 50,
    ...props.radioSelectionColumnProps,
  }))

  const getSelectionColumnProps: GetColumnProps = computed(() => ({
    key: 'selection',
    type: 'selection',
    align: 'center',
    width: 50,
    ...props.selectionColumnProps,
  }))

  const getIndexColumnProps: GetColumnProps = computed(() => ({
    key: 'index',
    type: 'index',
    label: '序号',
    width: '60',
    ...props.indexColumnProps,
  }))

  const getExpandColumnProps: GetColumnProps = computed(() => ({
    key: 'expand',
    label: '',
    width: '60',
    type: 'expand',
    ...props.expandColumnProps,
  }))

  const getActionColumnProps: GetColumnProps = computed(() => ({
    key: 'action',
    label: '操作',
    fixed: 'right',
    width: 160,
    ...props.actionColumnProps,
  }))

  const getActionProps: ComputedRef<Partial<BasicButtonGroupProps>> = computed(() => ({
    confirmType: 'pop-confirm',
    showNumber: 4,
    buttonProps: {
      link: true,
      type: 'primary',
    },
    ...props.actionProps,
  }))

  return {
    getRadioSelectionColumnProps,
    getSelectionColumnProps,
    getIndexColumnProps,
    getExpandColumnProps,
    getActionColumnProps,
    getActionProps,
  }
}
