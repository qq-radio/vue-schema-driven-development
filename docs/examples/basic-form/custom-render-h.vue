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
import { BasicForm, FormSchema, BasicCheckboxGroup, BasicSelect } from '@center/components'

import { ElIcon } from 'element-plus'
import { StarFilled } from '@element-plus/icons-vue'

const activeNames = ref(['example'])

const formModel = ref<any>({
  fruit: [],
  breakfast: '',
})

const formSchemas: FormSchema[] = [
  {
    label: '用户',
    prop: 'username',
    customRender: () => {
      const icon = h(ElIcon, { style: { color: '#ff719c', 'vertical-align': 'middle' } }, () =>
        h(StarFilled),
      )
      return h('div', {}, [
        icon,
        icon,
        icon,
        h('span', { style: { margin: '0 10px' } }, '韩梅梅'),
        icon,
        icon,
        icon,
      ])
    },
  },
  {
    label: '水果',
    prop: 'fruit',
    customRender: () => {
      const options = [
        { label: '葡萄', value: 'grape' },
        { label: '樱桃', value: 'cherry' },
        { label: '橘子', value: 'orange' },
      ]
      return h(BasicCheckboxGroup, {
        modelValue: formModel.value.fruit,
        options,
        'onUpdate:modelValue': (value) => (formModel.value.fruit = value),
      })
    },
  },
  {
    label: '早餐',
    prop: 'breakfast',
    customRender: () => {
      const options = [
        { label: '鸡蛋', value: 'egg' },
        { label: '面包', value: 'bread' },
        { label: '培根', value: 'bacon' },
      ]
      return h(BasicSelect, {
        modelValue: formModel.value.breakfast,
        options,
        'onUpdate:modelValue': (value) => (formModel.value.breakfast = value),
      })
    },
  },
]
</script>
