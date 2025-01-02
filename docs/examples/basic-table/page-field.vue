<template>
  <BasicTable
    :request="userListApi"
    :schemas="schemas"
    current-page-field="current"
    page-size-field="size"
  />
</template>

<script setup lang="ts">
import { BasicTable, TableSchema } from '@center/components'

import { userListApi } from '@mocks/mock-user'

const schemas: TableSchema[] = [
  {
    label: '用户名',
    prop: 'username',
    searchable: true,
  },
  {
    label: '手机号',
    prop: 'phone',
    searchable: true,
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
    searchConfig: {
      component: 'select',
      componentProps: {
        options: [
          { label: '在职中', value: 1 },
          { label: '已离职', value: 2 },
        ],
      },
    },
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
]
</script>
