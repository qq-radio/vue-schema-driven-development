<template>
  <el-cascader
    ref="instanceRef"
    v-bind="getBindValues"
    v-model="stateValue"
    :options="cascaderDatas"
    @change="emitChange"
  >
    <template v-for="name in Object.keys(slots)" :key="name" #[name]="scope">
      <slot :name="name" v-bind="scope" />
    </template>
  </el-cascader>
</template>

<script setup lang="ts">
import { BasicCascaderProps, CascaderModelValue } from './type'

import { isFunction, isArray, get } from 'lodash'
import { useAttrs, useSlots, computed, ref, watch } from 'vue'

defineOptions({
  name: 'BasicCascader',
  inheritAttrs: false,
})

const attrs = useAttrs()
const slots = useSlots()

const props = withDefaults(defineProps<BasicCascaderProps>(), {
  clearable: true,
})

const emit = defineEmits(['update:modelValue', 'change'])

const getBindValues = computed(() => ({
  ...attrs,
  clearable: props.clearable,
}))

const instanceRef = ref()
const stateValue = ref<CascaderModelValue>()
const cascaderDatas = ref<Recordable[]>([])

watch(
  () => props.modelValue,
  () => {
    stateValue.value = props.modelValue
  },
  { immediate: true },
)

const init = async () => {
  try {
    if (isArray(props.options)) {
      cascaderDatas.value = props.options
      return
    }

    if (isFunction(props.api)) {
      const result = await props.api()
      cascaderDatas.value = props.resultField ? get(result, props.resultField) : result
    }
  } catch (error) {
    console.error('BasicCascader init error:', error)
  }
}

init()

const emitChange = () => {
  emit('update:modelValue', stateValue.value)
  emit('change', {
    value: stateValue.value,
    node: instanceRef.value.getCheckedNodes(),
  })
}
</script>
