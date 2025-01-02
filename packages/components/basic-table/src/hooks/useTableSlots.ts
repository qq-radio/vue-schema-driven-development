import type { TableSchema } from '../types'
import type { FormSchema } from '@center/components/basic-form/src/types'
import type { ComputedRef, Slots } from 'vue'

import { isArray, isEmpty, pick } from 'lodash'
import { shallowRef, watch } from 'vue'

type Props = ComputedRef<{
  searchSchemas?: FormSchema[]
  tableSchemas: TableSchema[]
}>

type Context = {
  slots: Slots
}

export type UseTableSlotsReturn = ReturnType<typeof useTableSlots>

export function useTableSlots(getProps: Props, context: Context) {
  const { slots } = context

  /**
   * search 插槽
   */
  const searchSlots = shallowRef<Slots>({})

  const setSearchSlots = (schemas: FormSchema[]) => {
    const h = schemas
      ?.filter((s) => s.customLabelSlot || s.customSlot)
      ?.map((s) => s.customLabelSlot || s.customSlot) as string[]
    searchSlots.value = isEmpty(h) ? {} : pick(slots, h)
  }

  watch(
    () => getProps.value.searchSchemas,
    (schemas) => {
      if (isArray(schemas)) {
        setSearchSlots(schemas)
      }
    },
    { immediate: true, deep: true },
  )

  /**
   * table header 插槽
   */
  const tableHeaderSlots = shallowRef<Slots>({})

  const setTableHeaderSlots = (schemas: TableSchema[]) => {
    const h = schemas?.filter((s) => s.customHeaderSlot)?.map((s) => s.customHeaderSlot) as string[]
    tableHeaderSlots.value = isEmpty(h) ? {} : pick(slots, h)
  }

  /**
   * table cell 插槽
   */
  const tableCellSlots = shallowRef<Slots>({})

  const setTableCellSlots = (schemas: TableSchema[]) => {
    const h = schemas?.filter((s) => s.customSlot)?.map((s) => s.customSlot) as string[]
    tableCellSlots.value = isEmpty(h) ? {} : pick(slots, h)
  }

  watch(
    () => getProps.value.tableSchemas,
    (schemas) => {
      if (isArray(schemas)) {
        setTableHeaderSlots(schemas)
        setTableCellSlots(schemas)
      }
    },
    { immediate: true, deep: true },
  )

  return {
    searchSlots,
    tableHeaderSlots,
    tableCellSlots,
  }
}
