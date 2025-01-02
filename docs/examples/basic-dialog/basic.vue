<template>
  <el-button @click="dialogVisible = true">打开弹窗</el-button>
  <BasicDialog v-model="dialogVisible" @cancel="handleCancel" @confirm="handleConfirm">
    弹窗内容示例
  </BasicDialog>
</template>

<script setup lang="ts">
import { BasicDialog } from '@center/components'

const dialogVisible = ref(false)

const handleCancel = () => {
  console.log('点击了取消')
}

const handleConfirm = () => {
  console.log('点击了确定')
  dialogVisible.value = false
}
</script>
