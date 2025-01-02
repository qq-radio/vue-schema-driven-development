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

<script setup lang="ts">
import { BasicForm, FormSchema } from '@center/components/basic-form'

const activeNames = ref(['example'])

const formModel = ref({})

const formSchemas: FormSchema[] = [
  {
    title: '基本信息',
    titleTooltip: '数据收集将会保密，不会透露您的隐私，请放心填写',
  },
  {
    label: '用户',
    prop: 'username',
    labelTooltip: '名称至少2个文字',
  },
  {
    title: '技能',
    titleTooltip: '请根据实际情况选择您熟悉的技能',
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
    },
    labelTooltip: '可以选择多项，但请至少选择一项',
  },
]
</script>
