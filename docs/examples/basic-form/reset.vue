<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="示例" name="example">
      <BasicForm v-model="formModel" :schemas="formSchemas" has-footer @reset="handleReset" />
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
    label: '收件人姓名',
    prop: 'receiverName',
    defaultValue: '',
  },
  {
    label: '配送方式',
    prop: 'deliveryMethod',
    component: 'select',
    defaultValue: 'standard',
    componentProps: {
      options: [
        { label: '标准配送', value: 'standard' },
        { label: '自提', value: 'selfPickup' },
      ],
    },
  },
  {
    label: '配送地址',
    prop: 'deliveryAddress',
    visible: ({ model }) => model.deliveryMethod === 'standard',
  },
  {
    label: '自提点',
    prop: 'pickupLocation',
    visible: ({ model }) => model.deliveryMethod === 'selfPickup',
    component: 'select',
    componentProps: {
      options: [
        { label: '美宜佳小卖部', value: 'mei_yi_jia' },
        { label: '711便利店', value: 'seven_eleven' },
      ],
    },
  },
]

const handleReset = () => {
  console.log('重置成功')
}
</script>
