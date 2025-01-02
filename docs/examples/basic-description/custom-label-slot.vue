<template>
  <BasicDescription :column="2" :data="data" :schemas="schemas">
    <template #label-product-name>
      <span>
        <el-icon>
          <Monitor />
        </el-icon>
        产品名称
      </span>
    </template>
    <template #label-price>
      <span>
        <el-icon>
          <Money />
        </el-icon>
        价格
      </span>
    </template>
    <template #label-stock-quantity>
      <span>
        <el-icon>
          <Box />
        </el-icon>
        库存数量
      </span>
    </template>
    <template #label-last-updated>
      <span>
        <el-icon>
          <Clock />
        </el-icon>
        上次更新
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
    customLabelSlot: 'label-product-name',
  },
  {
    label: '价格',
    prop: 'price',
    customLabelSlot: 'label-price',
    formatter: ({ value }) => `￥${value.toFixed(2)}`,
  },
  {
    label: '库存数量',
    prop: 'stockQuantity',
    customLabelSlot: 'label-stock-quantity',
    formatter: ({ value }) => `${value}件`,
  },
  {
    label: '上次更新',
    prop: 'lastUpdated',
    customLabelSlot: 'label-last-updated',
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
