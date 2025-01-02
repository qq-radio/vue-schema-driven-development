<template>
  <BasicTable @register="registerTable" />
</template>

<script setup lang="ts">
import { BasicTable, useTable, TableSchema } from '@center/components'

import { userListApi } from '@mocks/mock-user'

const schemas: TableSchema[] = [
  {
    label: '用户名',
    prop: 'username',
    headerTooltip: '为了展示link的用法，实际是个假的用户跳转',
    width: 120,
    display: 'link',
    displayProps: {
      href: '/',
      type: 'success',
    },
    displaySlots: ({ value }) => ({
      default: () => value,
    }),
  },
  {
    label: '手机号',
    prop: 'phone',
    width: 160,
    display: 'copy',
    displayProps: ({ value }) => ({
      text: value,
    }),
  },
  {
    label: '岗位',
    prop: 'job',
    width: 120,
    display: 'tag',
    displayProps: {
      type: 'success',
    },
    displaySlots: ({ value }) => ({
      default: () => value,
    }),
  },
  {
    label: '开发进度',
    prop: 'progress',
    width: 140,
    display: 'progress',
    displayProps: ({ value }) => ({
      percentage: value,
      textInside: true,
      strokeWidth: 16,
      status: value > 60 ? (value > 90 ? 'success' : 'warning') : 'exception',
    }),
  },
  {
    label: '头像',
    prop: 'image',
    width: 120,
    display: 'avatar',
    displayProps: ({ value }) => ({
      src: value,
      size: 80,
    }),
  },
  {
    label: '图片',
    prop: 'image',
    width: 120,
    display: 'image',
    displayProps: ({ value }) => ({
      src: value,
    }),
  },
  {
    label: '状态',
    prop: 'status',
    width: 120,
    display: 'status',
    displayProps: ({ value }) => ({
      text: value === 1 ? '在职中' : '已离职',
      type: value === 1 ? 'success' : 'danger',
    }),
  },
  {
    label: '创建时间',
    prop: 'createTime',
    width: 120,
    display: 'time',
    displayProps: ({ value }) => ({
      time: value,
    }),
  },
]

const [registerTable] = useTable({
  request: userListApi,
  schemas,
})
</script>
