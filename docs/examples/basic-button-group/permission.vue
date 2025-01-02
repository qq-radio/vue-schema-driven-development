<template>
  <BasicButtonGroup :buttons="buttons" :show-number="3" />
</template>

<script setup lang="ts">
import { BasicButtonGroup, Button } from '@center/components'

const buttons: Button[] = [
  {
    text: '新增',
    props: {
      type: 'primary',
      // 请结合您项目的权限控制逻辑自行实现permission控制
      // permission: ""
    },
    onClick: () => {
      console.log('点击了新增')
    },
  },
  {
    text: '查看',
    props: {
      type: 'success',
    },
    onClick: () => {
      console.log('点击了查看')
    },
  },
]
</script>
