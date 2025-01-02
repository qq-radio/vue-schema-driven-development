<template>
  <BasicExport
    v-bind="{
      config,
    }"
    @success="handleSuccess"
  />
</template>

<script setup lang="ts">
import { BasicExport, ExportConfig } from '@center/components'

const config: ExportConfig = {
  url: 'mock-url',
  fileName: '导出文件名称',
}

const handleSuccess = () => {
  console.log('导入成功')
}
</script>
