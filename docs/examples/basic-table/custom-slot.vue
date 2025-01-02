<template>
  <BasicTable :data="userList" :schemas="schemas">
    <template #phone="{ value }">
      <el-icon style="color: #25a6e7; margin-right: 4px; vertical-align: middle"> <Phone /></el-icon
      >{{ value }}
    </template>
    <template #address="{ row }">
      {{ `${row.provinceName}/${row.cityName}/${row.regionName}` }}
    </template>
    <template #status="{ value }">
      <el-icon style="margin-right: 4px; vertical-align: middle">
        <CircleCheckFilled v-if="value === 1" style="color: #8dd35f" /><CircleCloseFilled
          v-else
          style="color: #ca5555"
        />
      </el-icon>
      {{ value === 1 ? '在职中' : '已离职' }}
    </template>
  </BasicTable>
</template>

<script setup lang="ts">
import { BasicTable, TableSchema } from '@center/components'

import { userList } from '@mocks/mock-user'

import { Phone, CircleCheckFilled, CircleCloseFilled } from '@element-plus/icons-vue'

const schemas: TableSchema[] = [
  {
    label: '用户名',
    prop: 'username',
  },
  {
    label: '手机号',
    prop: 'phone',
    customSlot: 'phone',
  },
  {
    label: '岗位',
    prop: 'job',
  },
  {
    label: '地址',
    prop: 'address',
    customSlot: 'address',
  },
  {
    label: '状态',
    prop: 'status',
    customSlot: 'status',
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
]
</script>
