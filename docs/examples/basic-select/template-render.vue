<template>
  <BasicSelect v-model="value" :options="options" :render="customDrinkRender" />
  <div style="margin-top: 10px">双向绑定值：{{ value }}</div>
</template>

<script setup lang="tsx">
import { BasicSelect } from '@center/components'
import { IceDrink } from '@element-plus/icons-vue'

const value = ref()

const options = [
  { label: '牛奶', value: 'milk', price: 6 },
  { label: '咖啡', value: 'coffee', price: 8 },
  { label: '果汁', value: 'juice', price: 10 },
]

const customDrinkRender = ({ option }) => (
  <span style="display: flex; align-items: center">
    <el-icon style="color: #70adf9">
      <IceDrink />
    </el-icon>
    <span style="margin-left: 4px">
      {option.label}({option.price}元)
    </span>
  </span>
)
</script>
