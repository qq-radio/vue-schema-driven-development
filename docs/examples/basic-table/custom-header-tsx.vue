<template>
  <BasicTable @register="registerTable" />
</template>

<script setup lang="tsx">
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
    customHeaderRender: ({ schema }) => {
      return (
        <div>
          {schema.label}
          <el-icon
            style={{
              cursor: 'pointer',
              marginLeft: '4px',
              verticalAlign: 'middle',
            }}
            onClick={toggleHide}
          >
            {isShowFullPhone.value ? <Hide /> : <View />}
          </el-icon>
        </div>
      )
    },
    customRender: ({ value }) => (isShowFullPhone.value ? value : hidePhone(value)),
    width: 120,
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
    customHeaderRender: () => (
      <BasicSelect
        modelValue={statusValue.value}
        options={statusOptions}
        labelField="text"
        {...{ placeholder: '请选择状态' }}
        onUpdate:modelValue={(value) => (statusValue.value = value)}
        onChange={reQuery}
      />
    ),
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
