<template>
  <div v-for="item in array" :key="item.label">
    <div style="display: flex">
      <span style="margin-right: 10px">{{ item.label }}：</span>
      <BasicDisplay
        :type="item.type"
        :display-props="getDisplayProps(item)"
        :display-slots="getDisplaySlots(item)"
      />
    </div>
    <el-divider style="margin: 10px 0" />
  </div>
</template>

<script setup lang="ts">
import { BasicDisplay, DisplaySchema } from '@center/components'

import { isFunction } from 'lodash'

const getDisplayProps = (item) => {
  const { displayProps } = item

  return isFunction(displayProps)
    ? displayProps({ item, value: row.value[item.prop], row: row.value })
    : displayProps
}

const getDisplaySlots = (item) => {
  const { displaySlots } = item

  return isFunction(displaySlots)
    ? displaySlots({ item, value: row.value[item.prop], row: row.value })
    : displaySlots
}

const array: DisplaySchema[] = [
  {
    label: '链接',
    prop: 'link',
    type: 'link',
    displayProps: {
      href: '/',
      type: 'success',
    },
    displaySlots: ({ value }) => ({
      default: () => value,
    }),
  },
  {
    label: '标签',
    prop: 'tag',
    type: 'tag',
    displayProps: {
      type: 'danger',
    },
    displaySlots: ({ value }) => ({
      default: () => value,
    }),
  },
  {
    label: '进度条',
    prop: 'progress',
    type: 'progress',
    displayProps: ({ value }) => ({
      percentage: value,
      textInside: true,
      strokeWidth: 16,
      status: value > 60 ? (value > 90 ? 'success' : 'warning') : 'exception',
      style: {
        width: '240px',
      },
    }),
  },
  {
    label: '头像',
    prop: 'avatar',
    type: 'avatar',
    displayProps: ({ value }) => ({
      src: value,
      size: 80,
    }),
  },
  {
    label: '图片',
    prop: 'image',
    type: 'image',
    displayProps: ({ value }) => ({
      src: value,
    }),
  },
  {
    label: '复制',
    prop: 'copy',
    type: 'copy',
    displayProps: ({ value }) => ({
      text: value,
    }),
  },
  {
    label: '状态',
    prop: 'status',
    type: 'status',
    displayProps: ({ value }) => ({
      text: value === 1 ? '安全' : '危险',
      type: value === 1 ? 'success' : 'danger',
    }),
  },
  {
    label: '时间',
    prop: 'time',
    type: 'time',
    displayProps: ({ value }) => ({
      time: value,
    }),
  },
]

const row = ref({
  link: '自定义跳转',
  tag: '这是个标签',
  progress: 45,
  avatar: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  image: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  copy: '这是一段文字，您可以点击右侧图标复制它',
  status: 1,
  time: new Date(),
})
</script>
