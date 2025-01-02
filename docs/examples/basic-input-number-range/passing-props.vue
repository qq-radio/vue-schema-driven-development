<template>
  <BasicInputNumberRange
    v-model="value"
    :input-number-props="{
      controls: true,
      size: 'large',
      step: 0.2,
      precision: 2,
      min: 2,
      max: 5,
    }"
  />
  <div style="margin-top: 10px">双向绑定值：{{ value }}</div>
</template>

<script setup lang="ts">
import { BasicInputNumberRange } from '@center/components'

const value = ref()
</script>
