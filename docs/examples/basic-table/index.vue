<template>
  <BasicTable
    :data="userList"
    :schemas="schemas"
    has-index
    :index-column-props="{
      fixed: true,
      align: 'center',
    }"
  />
</template>

<script setup lang="ts">
import { BasicTable, TableSchema } from '@center/components'

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
</script>
