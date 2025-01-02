<template>
  <BasicStatus text="状态" />
  <BasicStatus type="danger">禁用</BasicStatus>
  <BasicStatus type="success">启用</BasicStatus>
</template>

<script setup lang="ts">
import { BasicStatus } from '@center/components'
</script>

<style scoped lang="scss">
:deep(.basic-status) {
  margin-right: 30px;
}
</style>
