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
import { BasicForm, FormSchema, BasicCheckboxGroup, BasicSelect } from '@center/components'

import { StarFilled } from '@element-plus/icons-vue'

const activeNames = ref(['example'])

const formModel = ref<any>({
  coffee: [],
  sport: '',
})

const formSchemas: FormSchema[] = [
  {
    label: '用户',
    prop: 'username',
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
    customRender: () => {
      const options = [
        { label: '拿铁', value: 'latte' },
        { label: '卡布奇诺', value: 'cappuccino' },
        { label: '美式', value: 'americano' },
      ]

      return (
        <BasicCheckboxGroup
          modelValue={formModel.value.coffee}
          options={options}
          onUpdate:modelValue={(value) => (formModel.value.coffee = value)}
        />
      )
    },
  },
  {
    label: '运动',
    prop: 'sport',
    customRender: () => {
      const options = [
        { label: '足球', value: 'football' },
        { label: '篮球', value: 'basketball' },
        { label: '羽毛球', value: 'badminton' },
      ]

      return (
        <BasicSelect
          modelValue={formModel.value.sport}
          options={options}
          onUpdate:modelValue={(value) => (formModel.value.sport = value)}
        />
      )
    },
  },
]
</script>
