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
    getRadioSelectedValue,
    setRadioSelectedValue,
    getRadioSelectedRow,
    setRadioSelectedRow,
    clearRadioSelected,
    checkHasRadioSelection,
    validateHasRadioSelection,
  },
] = useTable({
  schemas,
  data: userList,
  rowKey: 'code',
  hasRadioSelection: true,
  radioSelectionColumnProps: {
    fixed: true,
    align: 'center',
  },
})

const buttons: Button[] = [
  {
    text: 'getRadioSelectedValue',
    onClick: () => {
      const value = getRadioSelectedValue()
      console.log('(单选)获取勾选值', value)
    },
  },
  {
    text: 'setRadioSelectedValue',
    onClick: () => {
      setRadioSelectedValue(userList[1].code)
      console.log('(单选)设置勾选值成功')
    },
  },
  {
    text: 'getRadioSelectedRow',
    onClick: () => {
      const row = getRadioSelectedRow()
      console.log('(单选)获取勾选项', row)
    },
  },
  {
    text: 'setRadioSelectedRow',
    onClick: () => {
      setRadioSelectedRow(userList[2])
      console.log('(单选)设置勾选项成功')
    },
  },
  {
    text: 'clearRadioSelected',
    onClick: () => {
      clearRadioSelected()
      console.log('(单选)清空勾选成功')
    },
  },
  {
    text: 'checkHasRadioSelection',
    onClick: () => {
      const flag = checkHasRadioSelection()
      console.log('(单选)是否有勾选值', flag)
    },
  },
  {
    text: 'validateHasRadioSelection',
    onClick: () => {
      const flag = validateHasRadioSelection()
      console.log('(单选)校验是否有勾选值', flag)
    },
  },
]
</script>
