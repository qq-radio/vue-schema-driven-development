<template>
  <BasicDescription :column="2" :data="data" :schemas="schemas">
    <template #product-name="{ value }">
      <span>
        <el-icon>
          <Monitor />
        </el-icon>
        {{ value }}
      </span>
    </template>
    <template #price="{ value }">
      <span>
        <el-icon>
          <Money />
        </el-icon>
        {{ `￥${value.toFixed(2)}` }}
      </span>
    </template>
    <template #stock-quantity="{ value }">
      <span>
        <el-icon>
          <Box />
        </el-icon>
        {{ `${value}件` }}
      </span>
    </template>
    <template #last-updated="{ value }">
      <span>
        <el-icon>
          <Clock />
        </el-icon>
        {{ value }}
      </span>
    </template>
  </BasicDescription>
</template>

<script setup lang="ts">
import { BasicDescription, DescriptionSchema } from '@center/components'

import { Monitor, Money, Box, Clock } from '@element-plus/icons-vue'

const data = {
  productName: '笔记本电脑',
  price: 3999.9901,
  stockQuantity: 150,
  lastUpdated: new Date().toLocaleString(),
}

const schemas: DescriptionSchema[] = [
  {
    label: '产品名称',
    prop: 'productName',
    customSlot: 'product-name',
  },
  {
    label: '价格',
    prop: 'price',
    customSlot: 'price',
  },
  {
    label: '库存数量',
    prop: 'stockQuantity',
    customSlot: 'stock-quantity',
  },
  {
    label: '上次更新',
    prop: 'lastUpdated',
    customSlot: 'last-updated',
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
