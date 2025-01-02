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

import { CoffeeCup, Baseball } from '@element-plus/icons-vue'

const activeNames = ref(['example'])

const formModel = ref({})

const formSchemas: FormSchema[] = [
  {
    title: '喜好',
    titleProps: {
      style: {
        color: '#409eff',
        fontWeight: 'bold',
        borderBottom: '1px solid #409eff',
      },
    },
    customTitleRender: () => (
      <div style="font-size: 20px;">
        <el-icon>
          <CoffeeCup />
        </el-icon>
        <span style="padding: 0 6px">-</span>
        <el-icon>
          <Baseball />
        </el-icon>
      </div>
    ),
  },
  {
    label: '咖啡',
    prop: 'coffee',
    component: 'radio-group',
    componentProps: {
      options: [
        { label: '拿铁', value: 'latte' },
        { label: '卡布奇诺', value: 'cappuccino' },
        { label: '美式', value: 'americano' },
      ],
    },
  },
  {
    label: '运动',
    prop: 'sport',
    component: 'checkbox-group',
    componentProps: {
      options: [
        { label: '足球', value: 'football' },
        { label: '篮球', value: 'basketball' },
        { label: '羽毛球', value: 'badminton' },
      ],
    },
  },
]
</script>
