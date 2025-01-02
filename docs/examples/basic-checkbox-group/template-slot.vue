<template>
  <BasicCheckboxGroup v-model="value" :options="options">
    <template #default="{ option }">
      <span style="display: flex; align-items: center">
        <el-icon style="margin-right: 4px"><Calendar /></el-icon>
        {{ option.label }} ({{ option.date }})
      </span>
    </template>
  </BasicCheckboxGroup>
  <div style="margin-top: 10px">双向绑定值：{{ value }}</div>
</template>

<script setup lang="ts">
import { BasicCheckboxGroup } from '@center/components'
import { Calendar } from '@element-plus/icons-vue'

const value = ref()

const options = [
  { label: '春节', value: 'china_year_festival', date: '正月初一' },
  { label: '端午节', value: 'dragon_boat_festival', date: '五月初五' },
  { label: '中秋节', value: 'mid_autumn_festival', date: '八月十五' },
]
</script>
