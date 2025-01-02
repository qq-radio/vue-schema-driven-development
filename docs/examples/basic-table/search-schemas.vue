<template>
  <BasicTable
    v-model:search-params="searchParams"
    :request="userListApi"
    :search-schemas="searchSchemas"
    :schemas="schemas"
  />
  <el-collapse v-model="activeNames">
    <el-collapse-item title="搜索值" name="params">
      {{ searchParams }}
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { BasicTable, FormSchema, TableSchema } from '@center/components'

import { userListApi } from '@mocks/mock-user'

const searchSchemas: FormSchema[] = [
  {
    label: '用户名',
    prop: 'username',
    component: 'input',
  },
  {
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
]

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

const activeNames = ref([])

const searchParams = ref<any>({})
</script>
