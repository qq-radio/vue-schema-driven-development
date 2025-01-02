<template>
  <BasicTable @register="registerTable">
    <template #header-phone="{ schema }">
      <div>
        {{ schema.label }}
        <el-icon style="cursor: pointer" @click="toggleHide">
          <Hide v-if="isShowFullPhone" /><View v-else />
        </el-icon>
      </div>
    </template>
    <template #phone="{ value }">
      {{ isShowFullPhone ? value : hidePhone(value) }}
    </template>
    <template #header-status>
      <BasicSelect
        v-model="statusValue"
        :options="statusOptions"
        v-bind="{
          labelField: 'text',
          placeholder: '请选择状态',
        }"
        @change="reQuery"
      />
    </template>
  </BasicTable>
</template>

<script setup lang="ts">
import { BasicTable, useTable, TableSchema, BasicSelect } from '@center/components'

import { userList } from '@mocks/mock-user'

import { Hide, View } from '@element-plus/icons-vue'

const isShowFullPhone = ref(false)

const toggleHide = () => {
  isShowFullPhone.value = !isShowFullPhone.value
}

const hidePhone = (value) => value.slice(0, 3) + '****' + value.slice(7)

const statusValue = ref()

const statusOptions = [
  {
    type: 'success',
    text: '在职中',
    value: 1,
  },
  {
    type: 'danger',
    text: '已离职',
    value: 2,
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
    customHeaderSlot: 'header-phone',
    customSlot: 'phone',
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
    customHeaderSlot: 'header-status',
    width: 140,
  },
  {
    label: '创建时间',
    prop: 'createTime',
  },
]

interface ApiResponse {
  total: number
  records: any[]
}

// 该api简单模拟查询接口数据的过滤
const userListApi = (): Promise<ApiResponse> => {
  let response = [...userList]
  if (statusValue.value) {
    response = userList.filter((user) => user.status === statusValue.value)
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        total: response.length,
        records: response,
      })
    }, 300)
  })
}

const [registerTable, { reQuery }] = useTable({
  request: userListApi,
  schemas,
})
</script>
