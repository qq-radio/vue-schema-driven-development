<template>
  <BasicTable
    v-model:search-params="searchParams"
    :request="userListApi"
    :schemas="schemas"
    :operations="operations"
    :actions="actions"
  />
  <el-collapse v-model="activeNames">
    <el-collapse-item title="搜索值" name="params">
      {{ searchParams }}
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { BasicTable, TableSchema, Button } from '@center/components'

import { userListApi } from '@mocks/mock-user'

const schemas: TableSchema[] = [
  {
    label: '用户名',
    prop: 'username',
    searchConfig: {
      label: '用户名',
      prop: 'username',
      component: 'input',
    },
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
    searchConfig: {
      label: '状态',
      prop: 'status',
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

const operations: Button[] = [
  {
    text: '新增',
    onClick: () => {
      console.log('点击了新增')
    },
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
    text: '删除',
    onConfirm: ({ row, rowIndex, column, button }) => {
      console.log('点击了删除', row, rowIndex, column, button)
    },
  },
]

const activeNames = ref([])

const searchParams = ref<any>({})
</script>
