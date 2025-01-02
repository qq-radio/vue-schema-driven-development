<template>
  <BasicStatus>初始化</BasicStatus>
  <BasicStatus type="success">已生效</BasicStatus>
  <BasicStatus type="info">计算中</BasicStatus>
  <BasicStatus type="warning">生效中</BasicStatus>
  <BasicStatus type="danger">未生效</BasicStatus>
</template>

<script setup lang="ts">
import { BasicStatus } from '@center/components'
</script>

<style scoped lang="scss">
:deep(.basic-status) {
  margin-right: 30px;
}
</style>
