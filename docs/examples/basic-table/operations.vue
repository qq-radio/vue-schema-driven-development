<template>
  <BasicTable :data="userList" :schemas="schemas" :operations="operations" />
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

const operations: Button[] = [
  {
    text: '新增',
    onClick: () => {
      console.log('点击了新增')
    },
  },
  {
    text: '批量启用',
    onConfirm: () => {
      console.log('点击了批量启用')
    },
  },
  {
    text: '批量禁用',
    props: {
      type: 'danger',
    },
    onConfirm: () => {
      console.log('点击了批量禁用')
    },
  },
  {
    text: '批量删除',
    props: {
      type: 'danger',
    },
    onConfirm: () => {
      console.log('点击了批量删除')
    },
  },
]
</script>
