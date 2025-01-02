<template>
  <BasicList :lists="lists" type="ol" child-key="childrenList" />
</template>

<script setup lang="ts">
import { BasicList } from '@center/components'

const lists = [
  {
    label: '欧洲',
    childrenList: [
      {
        label: '法国',
        childrenList: [{ label: '巴黎' }, { label: '尼斯' }],
      },
      {
        label: '德国',
        childrenList: [{ label: '柏林' }, { label: '慕尼黑' }],
      },
    ],
  },
  {
    label: '北美洲',
    childrenList: [
      {
        label: '美国',
        childrenList: [{ label: '纽约' }, { label: '芝加哥' }],
      },
      {
        label: '加拿大',
        childrenList: [{ label: '多伦多' }, { label: '温哥华' }],
      },
    ],
  },
  {
    label: '亚洲',
    childrenList: [
      {
        label: '中国',
        childrenList: [{ label: '北京' }, { label: '上海' }],
      },
      {
        label: '日本',
        childrenList: [{ label: '东京' }, { label: '大阪' }],
      },
    ],
  },
]
</script>
