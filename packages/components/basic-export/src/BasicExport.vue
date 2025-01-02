<template>
  <el-button type="primary" @click="handleExport">
    <el-icon><Download /></el-icon><span>导出</span>
  </el-button>
</template>

<script setup lang="ts">
import { BasicExportProps } from './type'

import { isFunction, isUndefined } from 'lodash'

import { ElMessage } from 'element-plus'
import { Download } from '@element-plus/icons-vue'

defineOptions({
  name: 'BasicExport',
})

const props = withDefaults(defineProps<BasicExportProps>(), {})

const emit = defineEmits(['success', 'fail', 'complete'])

const handleExport = async () => {
  try {
    // const { url, params, beforeExport, fileName } = props.config
    const { url, params, beforeExport } = props.config

    if (!url) {
      ElMessage.error('导出链接不能为空')
      return
    }

    if (isUndefined(params)) {
      ElMessage.error('导出参数不能为空')
      return
    }

    const exportParams = isFunction(params) ? params() : params

    if (isFunction(beforeExport) && !beforeExport(exportParams)) {
      return
    }

    // await downloadBlob(url, exportParams, fileName, 'post')
    ElMessage.success('导出成功')
    emit('success')
  } catch (error) {
    ElMessage.error(`导出失败:${error}`)
    emit('fail')
  } finally {
    emit('complete')
  }
}
</script>
