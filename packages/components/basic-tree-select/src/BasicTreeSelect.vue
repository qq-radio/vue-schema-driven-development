<template>
  <el-tree-select
    v-bind="getBindValues"
    v-model="stateValue"
    :data="treeDatas"
    @change="emitChange"
  >
    <template v-for="name in Object.keys(slots)" :key="name" #[name]="scope">
      <slot :name="name" v-bind="scope" />
    </template>
  </el-tree-select>
</template>

<script setup lang="ts">
import { BasicTreeSelectProps, TreeSelectModelValue } from './type'

import { isFunction, isArray, get } from 'lodash'
import { useAttrs, useSlots, computed, ref, watch } from 'vue'

defineOptions({
  name: 'BasicTreeSelect',
  inheritAttrs: false,
})

const attrs = useAttrs()
const slots = useSlots()

const props = withDefaults(defineProps<BasicTreeSelectProps>(), {
  clearable: true,
})

const emit = defineEmits(['update:modelValue', 'change'])

const getBindValues = computed(() => ({
  ...attrs,
  clearable: props.clearable,
}))

const stateValue = ref<TreeSelectModelValue>('')
const treeDatas = ref<Recordable[]>([])

watch(
  () => props.modelValue,
  () => {
    stateValue.value = props.modelValue || ''
  },
  { immediate: true },
)

const init = async () => {
  try {
    if (isArray(props.data)) {
      treeDatas.value = props.data
      return
    }

    if (isFunction(props.api)) {
      const result = await props.api()
      treeDatas.value = props.resultField ? get(result, props.resultField) : result
    }
  } catch (error) {
    console.error('BasicTreeSelect init error:', error)
  }
}

init()

const emitChange = () => {
  emit('update:modelValue', stateValue.value)
  emit('change', {
    value: stateValue.value,
    node: {},
  })
}
</script>
