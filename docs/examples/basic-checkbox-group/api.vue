<template>
  <BasicCheckboxGroup
    v-model="value"
    v-bind="{
      resultField: 'data',
      labelField: 'province',
      valueField: 'name',
    }"
    :api="api"
  />
  <div style="margin-top: 10px">双向绑定值：{{ value }}</div>
</template>

<script setup lang="ts">
import { BasicCheckboxGroup } from '@center/components'

const value = ref()

const api = (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        message: '响应成功',
        data: [
          { province: '北京', name: 'beijing' },
          { province: '上海', name: 'shanghai' },
          { province: '广州', name: 'guangzhou' },
          { province: '深圳', name: 'shenzhen' },
        ],
      })
    }, 500)
  })
}
</script>
