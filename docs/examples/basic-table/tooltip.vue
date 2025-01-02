<template>
  <BasicTable :data="userList" :schemas="schemas" />
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
    formatter: ({ value }) => value.slice(0, 3) + '****' + value.slice(7),
    headerTooltip: '为了用户隐私，仅当前登录人可查看完整手机号码',
  },
  {
    label: '岗位',
    prop: 'job',
    headerTooltip: '若您的岗位信息有误，请联系管理员修正',
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
