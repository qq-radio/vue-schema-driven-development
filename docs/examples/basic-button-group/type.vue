<template>
  <BasicButtonGroup :buttons="buttons" />
</template>

<script setup lang="ts">
import { BasicButtonGroup, Button } from '@center/components'

const buttons: Button[] = [
  {
    text: '导入',
    type: 'import',
    props: {
      templateConfig: {
        url: 'mock-url',
        fileName: '导入模板',
      },
      uploadConfig: {
        url: 'mock-url',
      },
      importConfig: {
        api: () => new Promise(() => 'mock-api'),
        params: {
          id: 'mock-id',
        },
      },
    },
  },
  {
    text: '导出',
    type: 'export',
    props: {
      config: {
        url: 'mock-url',
        fileName: '导出文件名称',
      },
    },
  },
]
</script>
