<template>
  <BasicDescription :column="2" :data="data" :schemas="schemas" />
</template>

<script setup lang="tsx">
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
    customRender: ({ value }) => (
      <span>
        <el-icon>
          <Monitor />
        </el-icon>
        {value}
      </span>
    ),
  },
  {
    label: '价格',
    prop: 'price',
    customRender: ({ value }) => (
      <span>
        <el-icon>
          <Money />
        </el-icon>
        {`￥${value.toFixed(2)}`}
      </span>
    ),
  },
  {
    label: '库存数量',
    prop: 'stockQuantity',
    customRender: ({ value }) => (
      <span>
        <el-icon>
          <Box />
        </el-icon>
        {`${value}件`}
      </span>
    ),
  },
  {
    label: '上次更新',
    prop: 'lastUpdated',
    customRender: ({ value }) => (
      <span>
        <el-icon>
          <Clock />
        </el-icon>
        {value}
      </span>
    ),
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
