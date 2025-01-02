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

const formModel = ref<Recordable>({
  username: '李华',
})

const formSchemas: FormSchema[] = [
  {
    label: '用户',
    prop: 'username',
  },
  {
    label: '礼物',
    prop: 'gift',
    component: 'radio-group',
    componentProps: {
      options: [
        { label: '手机', value: 'phone' },
        { label: '电脑', value: 'computer' },
      ],
    },
  },
  {
    label: '手机品牌',
    prop: 'phoneBrand',
    component: 'select',
    componentProps: {
      options: [
        { label: '苹果', value: 'iphone' },
        { label: '小米', value: 'xiaomi' },
        { label: '华为', value: 'huawei' },
      ],
    },
    disabled: ({ model }) => !model.gift || model.gift === 'computer',
  },
  {
    label: '电脑品牌',
    prop: 'computerBrand',
    component: 'select',
    componentProps: {
      options: [
        { label: '联想', value: 'lenovo' },
        { label: '惠普', value: 'hp' },
        { label: '戴尔', value: 'dell' },
      ],
    },
    disabled: ({ model }) => !model.gift || model.gift === 'phone',
  },
]
</script>
