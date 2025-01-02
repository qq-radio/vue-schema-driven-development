<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="示例" name="example">
      <BasicForm
        v-model="formModel"
        :schemas="formSchemas"
        has-footer
        @submit="handleSubmit"
        @submit-error="handleSubmitError"
      />
    </el-collapse-item>
    <el-collapse-item title="表单值" name="data">
      {{ formModel }}
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { BasicForm, FormSchema } from '@center/components/basic-form'

import { ElMessage } from 'element-plus'

const activeNames = ref(['example'])

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

function filterTreeByDepth(data, depth) {
  if (depth < 1) return []

  return data.map(({ children, ...rest }) => {
    if (depth === 1) {
      return rest
    }

    return {
      ...rest,
      children: children ? filterTreeByDepth(children, depth - 1) : undefined,
    }
  })
}

const formModel = ref({
  isEnable: true,
  isFull: true,
})

const formSchemas: FormSchema[] = [
  {
    label: '用户',
    prop: 'username',
    required: true,
  },
  {
    label: '年龄',
    prop: 'age',
    component: 'input-number',
    required: true,
  },
  {
    label: '分数',
    prop: 'score',
    component: 'input-number-range',
    required: true,
  },
  {
    label: '备注',
    prop: 'remark',
    component: 'textarea',
    required: true,
  },
  {
    label: '岗位',
    prop: 'job',
    component: 'radio-group',
    componentProps: {
      options: [
        { label: '产品经理', value: 'product_manager' },
        { label: '开发', value: 'developer' },
        { label: '测试', value: 'tester' },
      ],
    },
    required: true,
  },
  {
    label: '是否生效',
    prop: 'isEnable',
    component: 'checkbox',
    componentSlots: {
      default: () => '已生效',
    },
    required: true,
  },
  {
    label: '工作',
    prop: 'work',
    component: 'checkbox-group',
    componentProps: {
      options: [
        { label: '前端开发', value: 'front_end_dev' },
        { label: '后端开发', value: 'back_end_dev' },
        { label: '全栈', value: 'full_dev' },
      ],
      hasCheckAll: true,
    },
    required: true,
  },
  {
    label: '省份',
    prop: 'provinceId',
    component: 'select',
    componentProps: {
      options: filterTreeByDepth(options, 1),
      labelField: 'name',
      valueField: 'id',
      hasCheckAll: true,
    },
    required: true,
  },
  {
    label: '城市',
    prop: 'cityId',
    component: 'tree-select',
    componentProps: {
      data: filterTreeByDepth(options, 2),
      props: {
        value: 'id',
        label: 'name',
        children: 'children',
      },
    },
    required: true,
  },
  {
    label: '区域',
    prop: 'regionId',
    component: 'cascader',
    componentProps: {
      options: filterTreeByDepth(options, 3),
      props: {
        value: 'id',
        label: 'name',
        children: 'children',
        multiple: true,
      },
    },
    required: true,
  },
  {
    label: '入职日期',
    prop: 'joinDay',
    component: 'date-picker',
    required: true,
  },
  {
    label: '入职时间',
    prop: 'joinTime',
    component: 'time-picker',
    required: true,
  },
  {
    label: '是否全职',
    prop: 'isFull',
    component: 'switch',
    defaultValue: 0,
    required: true,
  },
  {
    label: '绩效评分',
    prop: 'performanceScore',
    component: 'rate',
    required: true,
  },
  {
    label: '技能评分',
    prop: 'skillScore',
    component: 'slider',
    required: true,
  },
  {
    label: '颜色',
    prop: 'color',
    component: 'color-picker',
    required: true,
  },
]

const handleSubmit = (values) => {
  ElMessage.success('提交成功，请在[折叠面板/表单值]或[控制台]里查看数据')
  console.log(values)
}

const handleSubmitError = (errors) => {
  ElMessage.warning('填写有误，请重新填写后提交')
  console.error(errors)
}
</script>
