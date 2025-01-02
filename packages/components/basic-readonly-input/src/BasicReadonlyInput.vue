<template>
  <el-input
    v-bind="attrs"
    v-model="stateValue"
    :disabled="disabled"
    readonly
    @click="emit('click')"
  >
    <template v-if="!disabled" #prepend>
      <el-button :icon="Search" @click="emit('click')" />
    </template>
    <template v-if="clearable && !disabled" #append>
      <span @click="clear">清空</span>
    </template>
  </el-input>
</template>

<script setup lang="ts">
import type { BasicReadonlyInputProps } from './type'

import { ref, watchEffect, useAttrs } from 'vue'

import { Search } from '@element-plus/icons-vue'

defineOptions({
  name: 'BasicReadonlyInput',
})

const attrs = useAttrs()

const props = withDefaults(defineProps<BasicReadonlyInputProps>(), {
  clearable: true,
})

const emit = defineEmits(['update:modelValue', 'change', 'click', 'clear'])

const stateValue = ref('')

watchEffect(() => {
  stateValue.value = props.modelValue
})

const clear = () => {
  stateValue.value = ''
  emitChange()
  emit('clear')
}

const emitChange = () => {
  emit('update:modelValue', stateValue.value)
  emit('change', stateValue.value)
}
</script>
