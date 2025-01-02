<template>
  <BasicList :lists="lists" />
</template>

<script setup lang="ts">
import { BasicList } from '@center/components'

const lists = [
  {
    label: '欧洲',
    children: [
      {
        label: '法国',
        children: [{ label: '巴黎' }, { label: '尼斯' }],
      },
      {
        label: '德国',
        children: [{ label: '柏林' }, { label: '慕尼黑' }],
      },
    ],
  },
  {
    label: '北美洲',
    children: [
      {
        label: '美国',
        children: [{ label: '纽约' }, { label: '芝加哥' }],
      },
      {
        label: '加拿大',
        children: [{ label: '多伦多' }, { label: '温哥华' }],
      },
    ],
  },
  {
    label: '亚洲',
    children: [
      {
        label: '中国',
        children: [{ label: '北京' }, { label: '上海' }],
      },
      {
        label: '日本',
        children: [{ label: '东京' }, { label: '大阪' }],
      },
    ],
  },
]
</script>
