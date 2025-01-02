<template>
  <BasicButtonGroup
    :buttons="buttons"
    :show-number="3"
    :button-props="{
      link: true,
    }"
  />
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
      type: 'danger',
    },
    onClick: () => {
      console.log('点击了删除')
    },
  },
]
</script>
