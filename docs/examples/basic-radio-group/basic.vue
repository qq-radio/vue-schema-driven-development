<template>
  <BasicRadioGroup v-model="value" :options="options" />
  <div style="margin-top: 10px">双向绑定值：{{ value }}</div>
</template>

<script setup lang="ts">
import { BasicRadioGroup } from '@center/components'

const value = ref()

const options = [
  { label: '苹果', value: 'iphone' },
  { label: '小米', value: 'xiaomi' },
  { label: '华为', value: 'huawei' },
]
</script>
