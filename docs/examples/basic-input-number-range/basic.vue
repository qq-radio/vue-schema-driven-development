<template>
  <BasicInputNumberRange v-model="value" />
  <div style="margin-top: 10px">双向绑定值：{{ value }}</div>
</template>

<script setup lang="ts">
import { BasicInputNumberRange } from '@center/components'

const value = ref()
</script>
