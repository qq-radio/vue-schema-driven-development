<template>
  <component :is="renderCustomHeader" v-if="isCustomHeader" />
  <span v-else>
    {{ schema.label }}
  </span>
  <el-tooltip v-if="schema.headerTooltip" :content="schema.headerTooltip" placement="top">
    <el-icon :size="16" style="vertical-align: middle; margin-left: 4px">
      <WarningFilled />
    </el-icon>
  </el-tooltip>
</template>

<script setup lang="ts">
import type { TableHeaderProps, TableHeaderCallbackParams } from '../types'

import { useCustomRender } from '@center/composables'

import { useSlots, computed } from 'vue'

import { WarningFilled } from '@element-plus/icons-vue'

defineOptions({
  name: 'TableHeader',
})

const slots = useSlots()

const props = withDefaults(defineProps<TableHeaderProps>(), {
  schema: () => ({
    prop: '',
    label: '',
  }),
})

const params = computed<TableHeaderCallbackParams>(() => {
  const { rowIndex, column, schema } = props
  return {
    rowIndex,
    column,
    schema,
  }
})

const { renderItem } = useCustomRender({ slots })

const isCustomHeader = props.schema.customHeaderRender || props.schema.customHeaderSlot

const renderCustomHeader = renderItem(
  {
    customRender: props.schema.customHeaderRender,
    customSlot: props.schema.customHeaderSlot,
  },
  params.value,
)
</script>
