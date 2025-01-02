<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="示例" name="example">
      <BasicForm v-model="formModel" v-bind="formProps" :schemas="formSchemas" has-footer />
    </el-collapse-item>
    <el-collapse-item title="表单值" name="data">
      {{ formModel }}
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { BasicForm, FormSchema } from '@center/components/basic-form'
import type { RowProps } from 'element-plus'

const activeNames = ref(['example'])

const formModel = ref({})

const formSchemas: FormSchema[] = [
  {
    label: '用户',
    prop: 'username',
    component: 'input',
  },
  {
    label: '年龄',
    prop: 'age',
    component: 'input-number',
  },
  {
    label: '水果',
    prop: 'fruit',
    component: 'checkbox-group',
    componentProps: {
      options: [
        { label: '葡萄', value: 'grape' },
        { label: '樱桃', value: 'cherry' },
        { label: '橘子', value: 'orange' },
      ],
    },
  },
  {
    label: '运动',
    prop: 'sport',
    component: 'select',
    componentProps: {
      options: [
        { label: '足球', value: 'football' },
        { label: '篮球', value: 'basketball' },
        { label: '羽毛球', value: 'badminton' },
      ],
    },
  },
  {
    label: '绩效评分',
    prop: 'score',
    component: 'rate',
  },
  {
    label: '技能评分',
    prop: 'skill',
    component: 'slider',
  },
]

const formProps = {
  labelWidth: '140px',
  rowProps: {
    justify: 'start',
  } as Partial<RowProps>,
  colProps: {
    span: 22,
  },
  footerColProps: {
    // push: 19,
  },
}
</script>
