<template>
  <BasicTable
    :data="userList"
    :schemas="schemas"
    :actions="actions"
    :action-column-props="{ width: 300 }"
  />
</template>

<script setup lang="ts">
import { BasicTable, TableSchema, Button } from '@center/components'

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

const actions: Button[] = [
  {
    text: '编辑',
    onClick: ({ row, rowIndex, column, button }) => {
      console.log('点击了编辑', row, rowIndex, column, button)
    },
  },
  {
    text: '启用',
    onConfirm: ({ row, rowIndex, column, button }) => {
      console.log('确认了启用', row, rowIndex, column, button)
    },
  },
  {
    text: '禁用',
    props: {
      type: 'danger',
    },
    onConfirm: ({ row, rowIndex, column, button }) => {
      console.log('确认了禁用', row, rowIndex, column, button)
    },
  },
  {
    text: '删除',
    props: {
      type: 'danger',
    },
    onConfirm: ({ row, rowIndex, column, button }) => {
      console.log('确认了删除', row, rowIndex, column, button)
    },
  },
  {
    text: '复制',
    onClick: ({ row, rowIndex, column, button }) => {
      console.log('点击了复制', row, rowIndex, column, button)
    },
  },
  {
    text: '查看详情',
    onClick: ({ row, rowIndex, column, button }) => {
      console.log('点击了查看详情', row, rowIndex, column, button)
    },
  },
  {
    text: '查看明细',
    onClick: ({ row, rowIndex, column, button }) => {
      console.log('点击了查看明细', row, rowIndex, column, button)
    },
  },
]
</script>
