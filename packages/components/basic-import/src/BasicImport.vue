<template>
  <div :class="ns.b()">
    <el-button type="primary" @click="visible = true">
      <el-icon><Upload /></el-icon><span>导入</span>
    </el-button>
    <el-dialog v-model="visible" title="导入" width="650px" append-to-body>
      <div :class="ns.e('template')">
        <span>下载模板：</span>
        <span class="template-text" @click="downloadTemplate">
          {{ templateConfig.fileName }}
        </span>
      </div>
      <el-upload
        ref="upload"
        method="post"
        accept=".xlsx, .xls"
        :limit="1"
        :action="uploadConfig.url"
        :disabled="isUploading"
        :on-progress="handleUploadProgress"
        :on-success="handleUploadSuccess"
        :on-error="handleUploadError"
        :auto-upload="true"
        drag
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
      </el-upload>
      <div class="tip-text">只能导入xls、xlsx格式文件，不超过5MB，每次只能导入10000条数据。</div>
      <template #footer>
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" :loading="isUploading" @click="handleSubmit">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import type { BasicImportProps, UploadResult } from './type'
import type { VNode } from 'vue'

import { useBasicNamespace } from '@center/composables'

import { ref, reactive, toRaw, h } from 'vue'
import { ElMessage } from 'element-plus'
import { Upload } from '@element-plus/icons-vue'

const ns = useBasicNamespace('import')

defineOptions({
  name: 'BasicImport',
})

const props = withDefaults(defineProps<BasicImportProps>(), {})

const emit = defineEmits(['success', 'fail', 'complete'])

const visible = ref(false)
const isUploading = ref(false)

const uploadResult = reactive<UploadResult>({
  fileUrl: '',
  fileName: '',
})

const downloadTemplate = async () => {
  // const { url, params, fileName } = props.templateConfig
  const { url } = props.templateConfig

  if (!url) {
    ElMessage.error('导入模板链接不能为空')
    return
  }

  // downloadBlob(url, params, fileName);
}

const handleUploadProgress = () => {
  isUploading.value = true
}

const handleUploadError = (error) => {
  const message = JSON.parse(error.message)
  ElMessage.error((message && message.msg) || '上传失败')
  isUploading.value = true
}

const handleUploadSuccess = (response) => {
  try {
    isUploading.value = false

    if (response.code === 1) {
      ElMessage.error(response.msg || '上传失败')
      return
    }

    const { failCount, failMsgs } = response.data

    if (failCount) {
      const errorNodes: VNode[] = []

      failMsgs.forEach((v) => {
        errorNodes.push(h('div', { style: 'color: #f56c6c' }, v))
      })

      ElMessage({
        message: h('p', { style: 'padding: 5px 20px;' }, errorNodes),
        showClose: true,
        duration: 0,
        type: 'error',
        customClass: 'message-text',
      })
    }

    uploadResult.fileUrl = response.data.fileUrl
    uploadResult.fileName = response.data.fileName
  } catch (error) {
    console.log('error:', error)
  }
}

const handleSubmit = async () => {
  try {
    const { api, params } = props.importConfig

    if (!api) {
      ElMessage.error('导入接口不能为空')
      return
    }

    if (!uploadResult.fileUrl) {
      ElMessage.error('请先上传文件')
      return
    }

    await api({
      ...toRaw(uploadResult),
      ...params,
    })

    ElMessage.success('导入成功')
    emit('success')
    handleCancel()
  } catch (error: any) {
    console.log('导入Error:', error)
    emit('fail')
  } finally {
    isUploading.value = false
    emit('complete')
  }
}

const handleCancel = () => {
  visible.value = false
}
</script>

<style lang="scss">
@use './style.scss';
</style>
