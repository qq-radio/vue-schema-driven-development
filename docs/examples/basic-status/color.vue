<template>
  <BasicStatus color="#484686">审核通过</BasicStatus>
  <BasicStatus color="#5b1f1f">已驳回</BasicStatus>
</template>

<script setup lang="ts">
import { BasicStatus } from '@center/components'
</script>

<style scoped lang="scss">
:deep(.basic-status) {
  margin-right: 30px;
}
</style>
