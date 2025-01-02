<template>
  <BasicDescription :column="2" :data="data" :schemas="schemas" />
</template>

<script setup lang="ts">
import { BasicDescription, DescriptionSchema } from '@center/components'

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
    display: 'copy',
    displayProps: ({ value }) => ({
      text: value,
    }),
  },
  {
    label: '价格',
    prop: 'price',
    display: 'tag',
    displaySlots: ({ value }) => ({
      default: () => `￥${value.toFixed(2)}`,
    }),
  },
  {
    label: '库存数量',
    prop: 'stockQuantity',
    display: 'progress',
    displayProps: ({ value }) => ({
      percentage: value,
      textInside: true,
      strokeWidth: 16,
      status: value > 100 ? 'success' : 'exception',
      style: {
        width: '240px',
      },
    }),
  },
  {
    label: '上次更新',
    prop: 'lastUpdated',
    display: 'time',
    displayProps: ({ value }) => ({
      format: 'YYYY-MM-DD HH:mm:ss',
      time: value,
    }),
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
