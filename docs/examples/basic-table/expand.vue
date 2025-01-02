<template>
  <BasicTable
    :data="userList"
    :schemas="schemas"
    :expand-column-props="{
      label: '展开',
    }"
    has-expand
  >
    <template #expand="{ row }">
      <div style="margin: 10px 9px 10px 80px">
        <span style="font-weight: bold">详细地址：</span>
        <span style="color: #409eff">
          <el-icon><LocationInformation /></el-icon>
          {{ row.provinceName }}/{{ row.cityName }}/{{ row.regionName }}
        </span>
      </div>
    </template>
  </BasicTable>
</template>

<script setup lang="ts">
import { BasicTable, TableSchema } from '@center/components'

import { userList } from '@mocks/mock-user'

import { LocationInformation } from '@element-plus/icons-vue'

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
