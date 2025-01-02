<template>
  <span style="vertical-align: middle; padding-right: 4px"> 是否显示[岗位]列 </span>
  <el-switch v-model="isVisible" />
  <BasicTable :data="userList" :schemas="schemas" />
</template>

<script setup lang="ts">
import { BasicTable, TableSchema } from '@center/components'

import { userList } from '@mocks/mock-user'

const isVisible = ref(false)

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
    visible: computed(() => isVisible.value),
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
