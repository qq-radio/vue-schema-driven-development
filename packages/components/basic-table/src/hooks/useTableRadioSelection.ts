import type { ComputedRef } from 'vue'

import { ref, unref } from 'vue'

import { ElMessage } from 'element-plus'

type RadioValue = string | number | boolean

type Props = ComputedRef<{
  rowKey: string
  tableDatas: Array<Recordable>
}>

export type UseTableRadioSelectionReturn = ReturnType<typeof useTableRadioSelection>

export function useTableRadioSelection(props: Props) {
  const radioSelectedValue = ref<RadioValue>()
  const radioSelectedRow = ref<Recordable>({})

  function getRadioSelectedValue() {
    return unref(radioSelectedValue)
  }

  function setRadioSelectedValue(value: RadioValue) {
    radioSelectedValue.value = value
    radioSelectedRow.value =
      props.value.tableDatas.find((d) => d[props.value.rowKey] === value) || {}
  }

  function getRadioSelectedRow() {
    return unref(radioSelectedRow)
  }

  function setRadioSelectedRow(row: Recordable) {
    radioSelectedValue.value = row[props.value.rowKey]
    radioSelectedRow.value = row
  }

  function clearRadioSelected() {
    radioSelectedValue.value = undefined
    radioSelectedRow.value = {}
  }

  function checkHasRadioSelection() {
    return !!unref(radioSelectedValue)
  }

  function validateHasRadioSelection() {
    const flag = checkHasRadioSelection()
    if (!flag) {
      const message = '请选择一条数据'
      ElMessage.warning(message)
    }
    return flag
  }

  return {
    radioSelectedValue,
    radioSelectedRow,
    getRadioSelectedValue,
    setRadioSelectedValue,
    getRadioSelectedRow,
    setRadioSelectedRow,
    clearRadioSelected,
    checkHasRadioSelection,
    validateHasRadioSelection,
  }
}
