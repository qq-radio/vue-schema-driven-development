<template>
  <BasicTable
    v-model:search-params="searchParams"
    :request="userListApi"
    :schemas="schemas"
    :search-props="{
      labelWidth: 60,
      labelPosition: 'left',
      rowProps: {
        gutter: 40,
      },
      colProps: {
        span: 12,
      },
    }"
  >
    <template #search-username>
      <el-input v-model="searchParams.username" placeholder="请输入用户名" />
    </template>
    <template #search-status>
      <BasicSelect
        v-model="searchParams.status"
        :options="statusOptions"
        placeholder="请选择状态"
      />
    </template>
  </BasicTable>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="搜索值" name="params">
      {{ searchParams }}
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { BasicTable, TableSchema, BasicSelect } from '@center/components'

import { userListApi } from '@mocks/mock-user'

const statusOptions = [
  { label: '在职中', value: 1 },
  { label: '已离职', value: 2 },
]

const schemas: TableSchema[] = [
  {
    label: '用户名',
    prop: 'username',
    searchConfig: {
      customSlot: 'search-username',
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
      customSlot: 'search-status',
      required: true,
    },
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
]

const activeNames = ref([])

const searchParams = ref<any>({
  status: 1,
})
</script>
