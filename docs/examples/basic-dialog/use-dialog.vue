<template>
  <el-button @click="open">打开弹窗</el-button>
  <BasicDialog @register="registerDialog" @confirm="handleConfirm"> 弹窗内容示例 </BasicDialog>
</template>

<script setup lang="ts">
import { BasicDialog, useDialog } from '@center/components'

const [registerDialog, { openDialog, closeDialog, setDialogTitle }] = useDialog()

const open = () => {
  openDialog()
  setDialogTitle('组合式函数示例')
}

const handleConfirm = () => {
  console.log('点击了确定')
  closeDialog()
}
</script>
