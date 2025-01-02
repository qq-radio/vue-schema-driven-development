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
import { BasicForm, FormSchema } from '@center/components'

import { UserFilled, StarFilled, CoffeeCup, Baseball } from '@element-plus/icons-vue'

const activeNames = ref(['example'])

const formModel = ref({
  coffee: [],
  sport: '',
})

const formSchemas: FormSchema[] = [
  {
    label: '用户',
    prop: 'username',
    customLabelRender: () => (
      <el-icon>
        <UserFilled />
      </el-icon>
    ),
    customRender: () => {
      const icon = (
        <el-icon style="color: #f16268; vertical-align: middle">
          <StarFilled />
        </el-icon>
      )
      return (
        <div>
          {icon}
          {icon}
          {icon}
          <span style="margin:0 10px">李华</span>
          {icon}
          {icon}
          {icon}
        </div>
      )
    },
  },
  {
    label: '咖啡',
    prop: 'coffee',
    component: 'checkbox-group',
    componentProps: {
      options: [
        { label: '拿铁', value: 'latte' },
        { label: '卡布奇诺', value: 'cappuccino' },
        { label: '美式', value: 'americano' },
      ],
    },
    customLabelRender: () => (
      <el-icon>
        <CoffeeCup />
      </el-icon>
    ),
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
    customLabelRender: () => (
      <el-icon>
        <Baseball />
      </el-icon>
    ),
  },
]
</script>
