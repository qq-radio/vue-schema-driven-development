<template>
  <BasicButtonGroup
    :button-props="{
      type: 'success',
      size: 'large',
      plain: true,
    }"
    :buttons="buttons"
    confirm-type="pop-confirm"
  />
</template>

<script setup lang="ts">
import { BasicButtonGroup, Button } from '@center/components'

const buttons: Button[] = [
  {
    text: '新增',
    onClick: () => {
      console.log('点击了新增')
    },
  },
  {
    text: '编辑',
    onClick: () => {
      console.log('点击了编辑')
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
