<template>
  <BasicCheckboxGroup v-model="value" :options="options">
    <template #grape="{ option }">
      <span style="color: purple; display: flex; align-items: center">
        <el-icon style="margin-right: 4px">
          <Grape />
        </el-icon>
        {{ option.label }}
      </span>
    </template>
    <template #cherry="{ option }">
      <span style="color: red; display: flex; align-items: center">
        <el-icon style="margin-right: 4px">
          <Cherry />
        </el-icon>
        {{ option.label }}
      </span>
    </template>
    <template #orange="{ option }">
      <span style="color: orange; display: flex; align-items: center">
        <el-icon style="margin-right: 4px">
          <Orange />
        </el-icon>
        {{ option.label }}
      </span>
    </template>
  </BasicCheckboxGroup>
  <div style="margin-top: 10px">双向绑定值：{{ value }}</div>
</template>

<script setup lang="ts">
import { BasicCheckboxGroup } from '@center/components'
import { Grape, Cherry, Orange } from '@element-plus/icons-vue'

const value = ref()

const options = [
  {
    label: '葡萄',
    value: 'grape',
    customSlot: 'grape',
  },
  {
    label: '樱桃',
    value: 'cherry',
    customSlot: 'cherry',
  },
  {
    label: '橘子',
    value: 'orange',
    customSlot: 'orange',
  },
]
</script>
