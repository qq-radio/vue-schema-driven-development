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
  {
    text: '启用',
    props: {
      type: 'success',
    },
    onClick: () => {
      console.log('点击了启用')
    },
  },
  {
    text: '禁用',
    props: {
      type: 'danger',
    },
    onClick: () => {
      console.log('点击了禁用')
    },
  },
  {
    text: '删除',
    props: {
      link: true,
      type: 'danger',
    },
    onClick: () => {
      console.log('点击了删除')
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
