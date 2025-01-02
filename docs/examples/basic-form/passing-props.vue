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
// import { User } from "@element-plus/icons-vue";

const activeNames = ref(['example'])

const formModel = ref({
  isEnable: true,
})

const formSchemas: FormSchema[] = [
  {
    label: '用户',
    prop: 'username',
    // help: use markraw ?
    // componentProps: {
    //   prefixIcon: User,
    // },
    required: true,
  },
  {
    label: '年龄',
    prop: 'age',
    component: 'input-number',
    componentProps: {
      precision: 0,
      min: 18,
    },
    required: true,
  },
  {
    label: '备注',
    prop: 'remark',
    component: 'textarea',
    componentProps: {
      maxlength: 100,
    },
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
      isButton: true,
    },
    required: true,
  },
  {
    label: '是否生效',
    prop: 'isEnable',
    component: 'checkbox',
    componentProps: {
      border: true,
    },
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
      isButton: true,
    },
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
