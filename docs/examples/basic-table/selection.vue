<template>
  <BasicButtonGroup
    :buttons="buttons"
    :button-props="{
      style: {
        marginBottom: '14px',
      },
    }"
  />
  <BasicTable @register="register" />
</template>

<script setup lang="ts">
import { BasicTable, useTable, TableSchema, BasicButtonGroup, Button } from '@center/components'

import { userList } from '@mocks/mock-user'

const schemas: TableSchema[] = [
  {
    label: '用户名',
    prop: 'username',
  },
  {
    label: '手机号',
    prop: 'phone',
  },
  {
    label: '岗位',
    prop: 'job',
  },
  {
    label: '状态',
    prop: 'status',
    display: 'status',
    displayProps: ({ value }) => ({
      text: value === 1 ? '在职中' : '已离职',
      type: value === 1 ? 'success' : 'danger',
    }),
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
]

const [
  register,
  {
    getSelectedValues,
    setSelectedValues,
    getSelectedRows,
    setSelectedRows,
    clearSelected,
    checkHasSelection,
    validateHasSelection,
  },
] = useTable({
  schemas,
  data: userList,
  rowKey: 'code',
  hasSelection: true,
  selectionColumnProps: {
    fixed: true,
    align: 'center',
  },
})

const buttons: Button[] = [
  {
    text: 'getSelectedValues',
    onClick: () => {
      const values = getSelectedValues()
      console.log('(多选)获取勾选值', values)
    },
  },
  {
    text: 'setSelectedValues',
    disabled: true,
    disabledReason: '功能开发中',
    onClick: () => {
      setSelectedValues([userList[0].code, userList[1].code])
      console.log('(多选)设置勾选值成功')
    },
  },
  {
    text: 'getSelectedRows',
    onClick: () => {
      const rows = getSelectedRows()
      console.log('(多选)获取勾选项', rows)
    },
  },
  {
    text: 'setSelectedRows',
    disabled: true,
    disabledReason: '功能开发中',
    onClick: () => {
      const rows = setSelectedRows([userList[1], userList[2]])
      console.log('(多选)设置勾选项成功', rows)
    },
  },
  {
    text: 'clearSelected',
    disabled: true,
    disabledReason: '功能开发中',
    onClick: () => {
      clearSelected()
      console.log('(多选)清空勾选成功')
    },
  },
  {
    text: 'checkHasSelection',
    onClick: () => {
      const flag = checkHasSelection()
      console.log('(多选)是否有勾选值', flag)
    },
  },
  {
    text: 'validateHasSelection',
    onClick: () => {
      const flag = validateHasSelection()
      console.log('(多选)校验是否有勾选值', flag)
    },
  },
]
</script>
