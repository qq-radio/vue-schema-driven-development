<template>
  <BasicRadioGroup v-model="value" :formatter="formatter" :options="options" />
  <div style="margin-top: 10px">双向绑定值：{{ value }}</div>
</template>

<script setup lang="ts">
import { BasicRadioGroup } from '@center/components'

const value = ref()

const options = [
  { province: '广东', city: '佛山', region: '顺德区', code: 'shun_de' },
  { province: '广东', city: '汕头', region: '金平区', code: 'jin_ping' },
  { province: '广东', city: '深圳', region: '南山区', code: 'nan_shan' },
]

const formatter = (option) => ({
  ...option,
  label: `${option.province}/${option.city}/${option.region}`,
  value: option.code,
})
</script>
