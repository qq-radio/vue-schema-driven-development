<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="示例" name="example">
      <BasicButtonGroup :buttons="buttons" style="margin: 20px" />
    </el-collapse-item>
    <el-collapse-item title="表单值" name="data">
      {{ formModel }}
    </el-collapse-item>
  </el-collapse>
  <BasicDialog @register="registerDialog" @confirm="submit">
    <BasicForm
      v-model="formModel"
      @register="registerForm"
      @submit="handleSubmit"
      @submit-error="handleSubmitError"
    />
  </BasicDialog>
</template>

<script setup lang="ts">
import {
  BasicDialog,
  useDialog,
  BasicForm,
  FormSchema,
  useForm,
  BasicButtonGroup,
  Button,
} from '@center/components'

import { ElMessage } from 'element-plus'

const activeNames = ref(['example'])

const [registerDialog, { setDialogProps, openDialog, setDialogTitle }] = useDialog({
  title: '弹窗表单示例',
})

const formModel = ref<any>({})

const formSchemas: FormSchema[] = [
  {
    label: '咖啡',
    prop: 'drink',
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

const [registerForm, { setFormProps, submit, reset }] = useForm({
  schemas: formSchemas,
})

const detailData = {
  drink: 'americano',
  size: 'large',
  temperature: 'ice',
  needStraw: true,
  name: '李娟娟',
  phone: '13513699874',
  address: '广东省南山市塘朗城',
}

const buttons: Button[] = [
  {
    text: '新增',
    onClick: async () => {
      setDialogTitle('新增')
      openDialog()
      await nextTick()
      reset()
      setDialogProps({ disabled: false })
      setFormProps({ disabled: false })
      formModel.value = {}
    },
  },
  {
    text: '编辑',
    onClick: async () => {
      setDialogTitle('编辑')
      openDialog()
      await nextTick()
      reset()
      setDialogProps({ disabled: false })
      setFormProps({ disabled: false })
      formModel.value = {
        ...detailData,
      }
    },
  },
  {
    text: '复制',
    onClick: async () => {
      setDialogTitle('复制')
      openDialog()
      await nextTick()
      setDialogProps({ disabled: false })
      setFormProps({ disabled: false })
      reset()
      formModel.value = {
        ...detailData,
        name: undefined,
        phone: undefined,
        address: undefined,
      }
    },
  },
  {
    text: '查看详情',
    onClick: async () => {
      setDialogTitle('查看详情')
      openDialog()
      await nextTick()
      setDialogProps({ disabled: true })
      setFormProps({ disabled: true })
      formModel.value = {
        ...detailData,
      }
    },
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
