<template>
  <BasicButtonGroup :buttons="buttons" confirm-type="pop-confirm" />
</template>

<script setup lang="ts">
import { BasicButtonGroup, Button } from '@center/components'

const buttons: Button[] = [
  {
    text: '禁用',
    props: {
      type: 'danger',
    },
    onConfirm: () => {
      console.log('二次确认禁用-确定')
    },
    onCancel: () => {
      console.log('二次确认禁用-取消')
    },
  },
  {
    text: '删除',
    props: {
      type: 'danger',
    },
    onConfirm: () => {
      console.log('二次确认删除-确定')
    },
    onCancel: () => {
      console.log('二次确认删除-取消')
    },
  },
]
</script>
