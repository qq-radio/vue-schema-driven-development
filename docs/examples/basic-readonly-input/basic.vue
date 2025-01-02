<template>
  <BasicReadonlyInput
    v-model="value"
    placeholder="请选择"
    @click="clickInput"
    @clear="clearInput"
  />
</template>

<script setup lang="ts">
import { BasicReadonlyInput } from '@center/components'

const value = ref([])

const clickInput = () => {
  console.log('点击input')
}

const clearInput = () => {
  console.log('清空')
}
</script>
