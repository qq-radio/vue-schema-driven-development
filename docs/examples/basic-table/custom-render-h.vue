<template>
  <BasicTable :data="userList" :schemas="schemas" />
</template>

<script setup lang="ts">
import { BasicTable, TableSchema } from '@center/components'

import { userList } from '@mocks/mock-user'

import { ElIcon } from 'element-plus'
import { Phone, CircleCheckFilled, CircleCloseFilled } from '@element-plus/icons-vue'

const schemas: TableSchema[] = [
  {
    label: '用户名',
    prop: 'username',
  },
  {
    label: '手机号',
    prop: 'phone',
    customRender: ({ value }) => {
      return h('span', [
        h(
          ElIcon,
          {
            style: {
              color: '#25a6e7',
              marginRight: '4px',
              verticalAlign: 'middle',
            },
          },
          () => h(Phone),
        ),
        value,
      ])
    },
  },
  {
    label: '岗位',
    prop: 'job',
  },
  {
    label: '地址',
    prop: 'address',
    customRender: ({ row }) => {
      return h('span', [`${row.provinceName}/${row.cityName}/${row.regionName}`])
    },
  },
  {
    label: '状态',
    prop: 'status',
    customRender: ({ value }) => {
      return h('span', [
        h(
          ElIcon,
          {
            style: {
              marginRight: '4px',
              verticalAlign: 'middle',
            },
          },
          () =>
            value === 1
              ? h(CircleCheckFilled, { style: { color: '#8dd35f' } })
              : h(CircleCloseFilled, { style: { color: '#ca5555' } }),
        ),
        value === 1 ? '在职中' : '已离职',
      ])
    },
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
]
</script>
