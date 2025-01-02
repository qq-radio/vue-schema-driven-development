<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="示例" name="example">
      <BasicForm v-model="formModel" :schemas="formSchemas" has-footer />
    </el-collapse-item>
    <el-collapse-item title="表单值" name="data">
      {{ formModel }}
    </el-collapse-item>
  </el-collapse>
</template>
<script setup lang="tsx">
import { BasicForm, FormSchema } from '@center/components/basic-form'

import { ElIcon } from 'element-plus'
import { Search, Location, Present } from '@element-plus/icons-vue'

const activeNames = ref(['example'])

const formModel = ref({})

const options = [
  {
    id: 7001,
    name: '广东',
    children: [
      {
        id: 7101,
        parentId: 7001,
        name: '佛山',
        children: [
          { id: 9001, parentId: 7101, name: '南海' },
          { id: 9002, parentId: 7101, name: '顺德' },
        ],
      },
      {
        id: 7102,
        parentId: 7001,
        name: '深圳',
        children: [
          { id: 9003, parentId: 7102, name: '龙岗' },
          { id: 9004, parentId: 7102, name: '龙华' },
        ],
      },
    ],
  },
  {
    id: 8001,
    name: '广西',
    children: [
      {
        id: 8101,
        parentId: 8001,
        name: '南宁',
        children: [
          { id: 9005, parentId: 8101, name: '兴宁' },
          { id: 9006, parentId: 8101, name: '青秀' },
        ],
      },
      {
        id: 8102,
        parentId: 8001,
        name: '桂林',
        children: [
          { id: 9007, parentId: 8102, name: '秀峰' },
          { id: 9008, parentId: 8102, name: '雁山' },
        ],
      },
    ],
  },
]

const formSchemas: FormSchema[] = [
  {
    label: '网址',
    prop: 'website',

    componentSlots: {
      prefix: () => '提示：',
      suffix: () => h(ElIcon, null, () => h(Search)),
      prepend: () => 'http://',
      append: () => '.com',
    },
  },
  {
    label: '省份',
    prop: 'provinceId',
    component: 'select',
    componentProps: {
      options: [],
    },
    componentSlots: {
      prefix: () => (
        <el-icon>
          <Location />
        </el-icon>
      ),
      empty: () => <div style="padding: 20px; color: red">无数据，请联系管理员</div>,
    },
  },
  {
    label: '区域',
    prop: 'regionId',
    component: 'cascader',
    componentProps: {
      options,
      props: {
        value: 'id',
        label: 'name',
        children: 'children',
        multiple: true,
      },
    },
    componentSlots: {
      default: ({ node, data }) => {
        return h('div', `${data.name}${!node.isLeaf ? '（' + data.children.length + '）' : ''}`)
      },
    },
  },
  {
    label: '入职日期',
    prop: 'joinDay',
    component: 'date-picker',
    componentProps: {
      type: 'daterange',
    },
    componentSlots: {
      'range-separator': () => h(ElIcon, null, () => h(Present)),
    },
  },
]
</script>
