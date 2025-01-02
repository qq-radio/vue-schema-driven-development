<template>
  <BasicList :lists="lists" :formatter="formatter" />
</template>

<script setup lang="ts">
import { BasicList } from '@center/components'

const lists = [
  {
    label: '欧洲',
    level: 1,
    children: [
      {
        label: '法国',
        level: 2,
        children: [
          {
            label: '巴黎',
            level: 3,
          },
          {
            label: '尼斯',
            level: 3,
          },
        ],
      },
      {
        label: '德国',
        level: 2,
        children: [
          {
            label: '柏林',
            level: 3,
          },
          {
            label: '慕尼黑',
            level: 3,
          },
        ],
      },
    ],
  },
  {
    label: '北美洲',
    level: 1,
    children: [
      {
        label: '美国',
        level: 2,
        children: [
          {
            label: '纽约',
            level: 3,
          },
          {
            label: '芝加哥',
            level: 3,
          },
        ],
      },
      {
        label: '加拿大',
        level: 2,
        children: [
          {
            label: '多伦多',
            level: 3,
          },
          {
            label: '温哥华',
            level: 3,
          },
        ],
      },
    ],
  },
  {
    label: '亚洲',
    level: 1,
    children: [
      {
        label: '中国',
        level: 2,
        children: [
          {
            label: '北京',
            level: 3,
          },
          {
            label: '上海',
            level: 3,
          },
        ],
      },
      {
        label: '日本',
        level: 2,
        children: [
          {
            label: '东京',
            level: 3,
          },
          {
            label: '大阪',
            level: 3,
          },
        ],
      },
    ],
  },
]

const formatter = (item) => {
  const levelMap = {
    1: '州',
    2: '国家',
    3: '城市',
  }

  return `${levelMap[item.level]}: ${item.label}`
}
</script>
