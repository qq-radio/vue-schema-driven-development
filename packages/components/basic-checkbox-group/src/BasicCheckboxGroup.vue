<template>
  <div style="width: 100%">
    <el-checkbox
      v-if="hasCheckAll"
      v-model="isCheckAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    >
      全选
    </el-checkbox>
  </div>
  <el-checkbox-group v-bind="getBindValues" v-model="stateLabel" @change="handleCheckChange">
    <template v-for="(item, index) in stateOptions" :key="index">
      <component
        :is="getComponent(item.isButton)"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
        :border="item.border"
        :size="item.size"
      >
        <component
          :is="item.customRender(getCallbackParams(item))"
          v-if="isFunction(item.customRender)"
        />
        <slot
          v-else-if="isString(item.customSlot)"
          :name="item.customSlot"
          v-bind="getCallbackParams(item)"
        />
        <component :is="render(getCallbackParams(item))" v-else-if="isFunction(render)" />
        <slot v-else-if="slots.default" v-bind="getCallbackParams(item)" />
        <span v-else>{{ item.label }}</span>
      </component>
    </template>
  </el-checkbox-group>
</template>

<script setup lang="ts">
import {
  BasicCheckboxGroupProps,
  CheckboxOption,
  CheckboxModelValue,
  CheckboxCallbackParams,
} from './type'

import { useOptionQuery } from '@center/composables'

import { isFunction, isString, isEmpty } from 'lodash'
import { useAttrs, useSlots, computed, onMounted, ref, watch } from 'vue'

defineOptions({
  name: 'BasicCheckboxGroup',
  inheritAttrs: false,
})

const attrs = useAttrs()
const slots = useSlots()

const props = withDefaults(defineProps<BasicCheckboxGroupProps>(), {})

const emit = defineEmits(['update:modelValue', 'change'])

const getBindValues = computed(() => ({
  ...attrs,
}))

const isCheckAll = ref(false)
const isIndeterminate = ref(false)

const stateLabel = ref<string[]>()
const stateValue = ref<CheckboxModelValue>([])

const {
  options: stateOptions,
  init,
  getAllLabels,
  findOptions,
  findLabels,
  findValues,
} = useOptionQuery<CheckboxOption>(props)

onMounted(() => {
  init()
})

watch(
  () => props.modelValue,
  () => {
    stateValue.value = props.modelValue || []
    stateLabel.value = findLabels(props.modelValue)
    if (isEmpty(stateValue.value)) {
      isCheckAll.value = false
      isIndeterminate.value = false
    }
  },
  { immediate: true },
)

const getComponent = (isButton?: boolean) =>
  isButton || props.isButton ? 'el-checkbox-button' : 'el-checkbox'

const getCallbackParams = (item: CheckboxOption): CheckboxCallbackParams => ({
  values: stateValue.value,
  labels: stateLabel.value,
  option: item,
})

const handleCheckAllChange = (checkAll: boolean) => {
  stateLabel.value = checkAll ? getAllLabels() : []
  isIndeterminate.value = false
  emitChange()
}

const handleCheckChange = (values: string[]) => {
  const checkedCount = values.length
  isCheckAll.value = checkedCount === stateOptions.value.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < stateOptions.value.length
  emitChange()
}

const emitChange = () => {
  stateValue.value = findValues(stateLabel.value)
  emit('update:modelValue', stateValue.value)
  emit('change', {
    values: stateValue.value,
    labels: stateLabel.value,
    options: findOptions(stateValue.value),
  })
}
</script>
