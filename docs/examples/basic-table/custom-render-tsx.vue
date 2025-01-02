<template>
  <BasicTable :data="userList" :schemas="schemas" />
</template>

<script setup lang="tsx">
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
    customRender: ({ value }) => (
      <>
        <el-icon style="color: #25a6e7; margin-right: 4px; vertical-align: middle">
          <Phone />
        </el-icon>
        {value}
      </>
    ),
  },
  {
    label: '岗位',
    prop: 'job',
  },
  {
    label: '地址',
    prop: 'address',
    customRender: ({ row }) => `${row.provinceName}/${row.cityName}/${row.regionName}`,
  },
  {
    label: '状态',
    prop: 'status',
    customRender: ({ value }) => (
      <>
        <el-icon style="margin-right: 4px; vertical-align: middle">
          {value === 1 ? (
            <CircleCheckFilled style="color: #8dd35f" />
          ) : (
            <CircleCloseFilled style="color: #ca5555" />
          )}
        </el-icon>
        {value === 1 ? '在职中' : '已离职'}
      </>
    ),
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
]
</script>
