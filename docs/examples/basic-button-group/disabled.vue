<template>
  <span style="vertical-align: middle; padding-right: 6px">是否禁用</span>
  <el-switch v-model="isDisabled" style="margin-right: 40px" />
  <BasicButtonGroup :buttons="buttons" />
  <el-divider />
  <BasicButtonGroup :buttons="buttons2" />
</template>

<script setup lang="ts">
import { BasicButtonGroup, Button } from '@center/components'

const isDisabled = ref(false)

const buttons: Button[] = [
  {
    text: '编辑',
    disabled: isDisabled,
    disabledReason: '按钮禁止点击时提示文字',
    onClick: () => {
      console.log('点击了编辑')
    },
  },
]

const buttons2: Button[] = [
  {
    text: '编辑',
    disabled: true,
    disabledReason: '活动已启用，不可编辑',
  },
  {
    text: '删除',
    props: {
      type: 'danger',
    },
    disabled: true,
    disabledReason: '活动已生效，无法删除',
  },
]
</script>
