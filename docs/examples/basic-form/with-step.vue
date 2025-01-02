<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="示例" name="example">
      <el-steps style="max-width: 400px; margin-left: 50px; margin-bottom: 20px" :active="active">
        <el-step title="商品信息" />
        <el-step title="收货信息" />
      </el-steps>
      <BasicForm
        v-show="active === 0"
        v-model="productFormModel"
        :schemas="productFormSchemas"
        has-footer
        :has-reset="false"
        submit-text="下一步"
        @submit="active = 1"
      />
      <BasicForm
        v-show="active === 1"
        v-model="deliveryFormModel"
        :schemas="deliveryFormSchemas"
        has-footer
        @submit="handleSubmit"
      >
        <template #footer="{ submit }">
          <el-button @click="active--">上一步</el-button>
          <el-button type="primary" @click="submit">完成</el-button>
        </template>
      </BasicForm>
    </el-collapse-item>
    <el-collapse-item title="表单值" name="data">
      <div>商品信息：{{ productFormModel }}</div>
      <div>收货信息：{{ deliveryFormModel }}</div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { BasicForm, FormSchema } from '@center/components/basic-form'

import { ElMessage } from 'element-plus'

const activeNames = ref(['example'])

const active = ref(0)

const productFormModel = ref({})

const deliveryFormModel = ref({})

const productFormSchemas: FormSchema[] = [
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
    required: true,
  },
  {
    label: '规格',
    prop: 'size',
    component: 'radio-group',
    componentProps: {
      options: [
        { label: '大杯(500ml)', value: 'large' },
        { label: '小杯(350ml)', value: 'small' },
      ],
    },
    required: true,
  },
  {
    label: '温度',
    prop: 'temperature',
    component: 'radio-group',
    componentProps: {
      options: [
        { label: '热', value: 'hot' },
        { label: '冰', value: 'ice' },
      ],
    },
    required: true,
  },
  {
    label: '吸管',
    prop: 'needStraw',
    component: 'switch',
    defaultValue: true,
    required: true,
  },
]

const deliveryFormSchemas: FormSchema[] = [
  {
    label: '联系人',
    prop: 'name',
    required: true,
  },
  {
    label: '联系电话',
    prop: 'phone',
    required: true,
  },
  {
    label: '收货地址',
    prop: 'address',
    component: 'textarea',
    required: true,
  },
]

const handleSubmit = () => {
  ElMessage.success('提交成功，请在[折叠面板/表单值]或[控制台]里查看数据')
  console.log('表单提交-商品信息:', productFormModel.value)
  console.log('表单提交-收货信息:', deliveryFormModel.value)
}
</script>
