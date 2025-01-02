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

import { ElIcon } from 'element-plus'
import { Cherry, KnifeFork } from '@element-plus/icons-vue'

const activeNames = ref(['example'])

const formModel = ref({})

const formSchemas: FormSchema[] = [
  {
    title: '饮食',
    titleProps: {
      style: {
        color: '#409eff',
        fontWeight: 'bold',
        borderBottom: '1px solid #409eff',
      },
    },
    customTitleRender: () => {
      return h('div', { style: { fontSize: '20px' } }, [
        h(ElIcon, null, () => h(Cherry)),
        h('span', { style: { padding: '0 6px' } }, '-'),
        h(ElIcon, null, () => h(KnifeFork)),
      ])
    },
  },
  {
    label: '水果',
    prop: 'fruit',
    component: 'radio-group',
    componentProps: {
      options: [
        { label: '葡萄', value: 'grape' },
        { label: '樱桃', value: 'cherry' },
        { label: '橘子', value: 'orange' },
      ],
    },
  },
  {
    label: '早餐',
    prop: 'breakfast',
    component: 'select',
    componentProps: {
      options: [
        { label: '鸡蛋', value: 'egg' },
        { label: '面包', value: 'bread' },
        { label: '培根', value: 'bacon' },
      ],
    },
  },
]
</script>
