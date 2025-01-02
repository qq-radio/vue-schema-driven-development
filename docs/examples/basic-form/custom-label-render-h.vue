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
import { BasicForm, FormSchema } from '@center/components'

import { ElIcon } from 'element-plus'
import { UserFilled, StarFilled, Cherry, KnifeFork } from '@element-plus/icons-vue'

const activeNames = ref(['example'])

const formModel = ref({
  fruit: [],
  breakfast: '',
})

const formSchemas: FormSchema[] = [
  {
    label: '用户',
    prop: 'username',
    customLabelRender: () => h(ElIcon, null, () => h(UserFilled)),
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
    component: 'checkbox-group',
    componentProps: {
      options: [
        { label: '葡萄', value: 'grape' },
        { label: '樱桃', value: 'cherry' },
        { label: '橘子', value: 'orange' },
      ],
    },
    customLabelRender: () => h(ElIcon, null, () => h(Cherry)),
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
    customLabelRender: () => h(ElIcon, null, () => h(KnifeFork)),
  },
]
</script>
