<template>
  <div v-for="item in array" :key="item.label">
    <div style="display: flex">
      <span style="margin-right: 10px">{{ item.label }}：</span>
      <BasicTime :time="item.time" :format="item.format" />
    </div>
    <el-divider style="margin: 10px 0" />
  </div>
</template>

<script setup lang="ts">
import { BasicTime } from '@center/components'

const array = [
  {
    label: '基本使用',
    time: new Date(),
  },
  {
    label: '指定时间格式',
    time: new Date(),
    format: 'YYYY-MM-DD HH:mm:ss',
  },
  {
    label: '传入时间戳',
    time: Date.now(),
  },
  {
    label: '时间无效时，显示为空',
    time: 'abcdef',
  },
]
</script>
