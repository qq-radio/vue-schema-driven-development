<template>
  <BasicSelect v-model="value" :options="options" has-check-all />
  <div style="margin-top: 10px">双向绑定值：{{ value }}</div>
</template>

<script setup lang="ts">
import { BasicSelect } from '@center/components'

const value = ref()

const options = [
  { label: '面包', value: 'bread' },
  { label: '饼干', value: 'cookies' },
  { label: '糖果', value: 'candy' },
]
</script>
