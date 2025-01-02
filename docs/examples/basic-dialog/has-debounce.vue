<template>
  <el-button @click="dialogVisible = true">打开弹窗</el-button>
  <BasicDialog v-model="dialogVisible" has-debounce @confirm="handleConfirm"
    >确定按钮已实现防抖处理，2s中内重复点击只会触发confirm事件一次</BasicDialog
  >
</template>

<script setup lang="ts">
import { BasicDialog } from '@center/components'

const dialogVisible = ref(false)

const handleConfirm = () => {
  console.log('点击了确定')
  dialogVisible.value = false
}
</script>
