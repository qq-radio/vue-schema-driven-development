<template>
  <BasicDescription :data="data" :schemas="schemas" />
</template>

<script setup lang="ts">
import { BasicDescription, DescriptionSchema } from '@center/components'

const data = {
  productName: '笔记本电脑',
  productCode: '50018899776',
  categoryName: '电子产品',
  stockQuantity: 14,
  price: 3999.9901,
  supplier: 'XYZ科技公司',
  address: '广东省南山市塘朗城',
  lastUpdated: new Date().toLocaleString(),
}

const schemas: DescriptionSchema[] = [
  {
    label: '产品名称',
    prop: 'productName',
  },
  {
    label: '产品编码',
    prop: 'productCode',
  },
  {
    label: '产品类别',
    prop: 'categoryName',
  },
  {
    label: '价格',
    prop: 'price',
    formatter: ({ value }) => `￥${value.toFixed(2)}`,
  },
  {
    label: '库存数量',
    prop: 'stockQuantity',
    formatter: ({ value }) => `${value}件`,
  },
  {
    label: '库存预警',
    prop: 'stockWarning',
    labelTooltip: "产品数量低于20件时提示'库存不足''",
    formatter: ({ data }) => (data.stockQuantity > 20 ? '库存充足' : '库存不足'),
  },
  {
    label: '供应商',
    prop: 'supplier',
  },
  {
    label: '生产地址',
    prop: 'address',
  },
  {
    label: '上次更新',
    prop: 'lastUpdated',
    labelTooltip: '库存数量实时更新',
  },
]
</script>
