<template>
  <div :class="ns.b()">
    <span v-if="prefix" :class="ns.e('prefix')">{{ prefix }}</span>
    <el-input-number
      v-bind="getItemProps"
      v-model="minValue"
      :class="ns.e('start')"
      :placeholder="startPlaceholder"
      :disabled="disabled"
      @change="emitChange"
      @blur="emitChange"
    />
    <span :class="ns.e('range-separator')">{{ rangeSeparator }}</span>
    <el-input-number
      v-bind="getItemProps"
      v-model="maxValue"
      :class="ns.e('end')"
      :placeholder="endPlaceholder"
      :disabled="disabled"
      @change="emitChange"
      @blur="emitChange"
    />
    <span v-if="suffix" :class="ns.e('suffix')">{{ suffix }}</span>
  </div>
</template>

<script setup lang="ts">
import type { BasicInputNumberRangeProps } from './type'

import { useBasicNamespace } from '@center/composables'

import { computed, ref, watchEffect } from 'vue'

const ns = useBasicNamespace('input-number-range')

defineOptions({
  name: 'BasicInputNumberRange',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BasicInputNumberRangeProps>(), {
  modelValue: () => [null, null],
  startPlaceholder: '请输入数字',
  endPlaceholder: '请输入数字',
  rangeSeparator: '-',
  inputNumberProps: () => ({}),
})

const emit = defineEmits(['update:modelValue', 'change'])

const minValue = ref<null | undefined | number>()
const maxValue = ref<null | undefined | number>()

const getItemProps = computed(() => ({
  controls: false,
  ...props.inputNumberProps,
}))

watchEffect(() => {
  const [minV, maxV] = props.modelValue
  minValue.value = minV
  maxValue.value = maxV
})

const emitChange = () => {
  const value = [minValue.value, maxValue.value]
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<style scoped lang="scss">
@use './style.scss';
</style>
