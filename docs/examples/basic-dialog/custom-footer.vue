<template>
  <el-button @click="dialogVisible = true">自定义footer</el-button>
  <BasicDialog v-model="dialogVisible">
    <template #footer>
      <el-button @click="handleCancel">取消</el-button>
      <el-button type="primary" @click="handleAudit">审核通过</el-button>
    </template>
  </BasicDialog>
</template>

<script setup lang="ts">
import { BasicDialog } from '@center/components'

const dialogVisible = ref(false)

const handleCancel = () => {
  console.log('点击了取消')
}

const handleAudit = () => {
  console.log('点击了审核通过')
  dialogVisible.value = false
}
</script>
