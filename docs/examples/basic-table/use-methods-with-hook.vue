<template>
  <div v-for="example in examples" :key="example.description" class="example">
    <el-tooltip placement="top" :content="example.description">
      <el-icon class="example__description">
        <InfoFilled />
      </el-icon>
    </el-tooltip>
    <BasicButtonGroup
      :buttons="example.buttons"
      :button-props="{
        type: 'default',
        style: {
          marginBottom: '14px',
        },
      }"
    />
  </div>
  <BasicTable @register="register" />
</template>

<script setup lang="ts">
import { BasicTable, useTable, TableSchema, BasicButtonGroup, Button } from '@center/components'

import { userList, userListApi } from '@mocks/mock-user'

import { InfoFilled } from '@element-plus/icons-vue'

const schemas: TableSchema[] = [
  {
    label: '用户名',
    prop: 'username',
    searchable: true,
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

const [
  register,
  {
    setTableProps,

    getTableDatas,
    getSearchParams,
    getRequestParams,
    reQuery,

    getRadioSelectedValue,
    setRadioSelectedValue,
    getRadioSelectedRow,
    setRadioSelectedRow,
    clearRadioSelected,
    checkHasRadioSelection,
    validateHasRadioSelection,

    getSelectedValues,
    setSelectedValues,
    getSelectedRows,
    setSelectedRows,
    clearSelected,
    checkHasSelection,
    validateHasSelection,
  },
] = useTable({
  schemas,
  request: userListApi,
  rowKey: 'code',
  hasRadioSelection: true,
  radioSelectionColumnProps: {
    fixed: true,
    align: 'center',
  },
  hasSelection: true,
})

type Example = {
  description: string
  buttons: Button[]
}

const examples: Example[] = [
  {
    description: '设置表格属性',
    buttons: [
      {
        text: 'setTableProps',
        onClick: () => {
          setTableProps({
            hasIndex: true,
            actions: [
              {
                text: '设置',
                onClick: () => {
                  console.log('点击了设置')
                },
              },
            ],
          })
          console.log('设置表格属性成功')
        },
      },
    ],
  },
  {
    description: '与表格搜索、表格数据相关功能的函数',
    buttons: [
      {
        text: 'getTableDatas',
        onClick: () => {
          const datas = getTableDatas()
          console.log('获取表格数据', datas)
        },
      },
      {
        text: 'getSearchParams',
        onClick: () => {
          const params = getSearchParams()
          console.log('获取搜索参数', params)
        },
      },
      {
        text: 'getRequestParams',
        onClick: () => {
          const params = getRequestParams()
          console.log('获取网络请求参数', params)
        },
      },
      {
        text: 'reQuery',
        onClick: () => {
          reQuery()
          console.log('重新请求接口获取表格数据成功')
        },
      },
    ],
  },
  {
    description: '提供一组用于表格单选功能的函数',
    buttons: [
      {
        text: 'getRadioSelectedValue',
        onClick: () => {
          const value = getRadioSelectedValue()
          console.log('(单选)获取勾选值', value)
        },
      },
      {
        text: 'setRadioSelectedValue',
        onClick: () => {
          setRadioSelectedValue(userList[1].code)
          console.log('(单选)设置勾选值成功')
        },
      },
      {
        text: 'getRadioSelectedRow',
        onClick: () => {
          const row = getRadioSelectedRow()
          console.log('(单选)获取勾选项', row)
        },
      },
      {
        text: 'setRadioSelectedRow',
        onClick: () => {
          setRadioSelectedRow(userList[2])
          console.log('(单选)设置勾选项成功')
        },
      },
      {
        text: 'clearRadioSelected',
        onClick: () => {
          clearRadioSelected()
          console.log('(单选)清空勾选成功')
        },
      },
      {
        text: 'checkHasRadioSelection',
        onClick: () => {
          const flag = checkHasRadioSelection()
          console.log('(单选)是否有勾选值', flag)
        },
      },
      {
        text: 'validateHasRadioSelection',
        onClick: () => {
          const flag = validateHasRadioSelection()
          console.log('(单选)校验是否有勾选值', flag)
        },
      },
    ],
  },
  {
    description: '提供一组用于表格多选功能的函数',
    buttons: [
      {
        text: 'getSelectedValues',
        onClick: () => {
          const values = getSelectedValues()
          console.log('(多选)获取勾选值', values)
        },
      },
      {
        text: 'setSelectedValues',
        disabled: true,
        disabledReason: '功能开发中',
        onClick: () => {
          setSelectedValues([userList[0].code, userList[1].code])
          console.log('(多选)设置勾选值成功')
        },
      },
      {
        text: 'getSelectedRows',
        onClick: () => {
          const rows = getSelectedRows()
          console.log('(多选)获取勾选项', rows)
        },
      },
      {
        text: 'setSelectedRows',
        disabled: true,
        disabledReason: '功能开发中',
        onClick: () => {
          const rows = setSelectedRows([userList[1], userList[2]])
          console.log('(多选)设置勾选项成功', rows)
        },
      },
      {
        text: 'clearSelected',
        disabled: true,
        disabledReason: '功能开发中',
        onClick: () => {
          clearSelected()
          console.log('(多选)清空勾选成功')
        },
      },
      {
        text: 'checkHasSelection',
        onClick: () => {
          const flag = checkHasSelection()
          console.log('(多选)是否有勾选值', flag)
        },
      },
      {
        text: 'validateHasSelection',
        onClick: () => {
          const flag = validateHasSelection()
          console.log('(多选)校验是否有勾选值', flag)
        },
      },
    ],
  },
]
</script>

<style scoped lang="scss">
.example {
  display: flex;

  .example__description {
    margin-top: 8px;
    margin-right: 10px;
    color: #409eff;
  }
}
</style>
