<template>
  <BasicDescription :column="2" :data="data" :schemas="schemas" />
</template>

<script setup lang="ts">
import { BasicDescription, DescriptionSchema } from '@center/components'

import { ElIcon } from 'element-plus'
import { Monitor, Money, Box, Clock } from '@element-plus/icons-vue'

const data = {
  productName: '笔记本电脑',
  price: 4820.7788,
  stockQuantity: 82,
  lastUpdated: new Date().toLocaleString(),
}

const schemas: DescriptionSchema[] = [
  {
    label: '产品名称',
    prop: 'productName',
    customRender: ({ value }) => h('span', [h(ElIcon, () => h(Monitor)), value]),
  },
  {
    label: '价格',
    prop: 'price',
    customRender: ({ value }) => h('span', [h(ElIcon, () => h(Money)), `￥${value.toFixed(2)}`]),
  },
  {
    label: '库存数量',
    prop: 'stockQuantity',
    customRender: ({ value }) => h('span', [h(ElIcon, () => h(Box)), `${value}件`]),
  },
  {
    label: '上次更新',
    prop: 'lastUpdated',
    customRender: ({ value }) => h('span', [h(ElIcon, () => h(Clock)), value]),
  },
]
</script>

<style scoped lang="scss">
:deep(.el-icon) {
  vertical-align: middle;
  margin-right: 4px;
  color: #409eff;
}
</style>
