<template>
  <el-radio-group v-bind="getBindValues" v-model="stateLabel">
    <template v-for="(item, index) in stateOptions" :key="index">
      <component
        :is="getComponent(item.isButton)"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
        :border="item.border"
        :size="item.size"
        @click.prevent="handleClick(item)"
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
  </el-radio-group>
</template>

<script setup lang="ts">
import { BasicRadioGroupProps, RadioOption, RadioModelValue, RadioCallbackParams } from './type'

import { useOptionQuery } from '@center/composables'

import { isFunction, isString } from 'lodash'
import { useAttrs, useSlots, computed, onMounted, ref, watch } from 'vue'

defineOptions({
  name: 'BasicRadioGroup',
  inheritAttrs: false,
})

const attrs = useAttrs()
const slots = useSlots()

const props = withDefaults(defineProps<BasicRadioGroupProps>(), {})

const emit = defineEmits(['update:modelValue', 'change'])

const getBindValues = computed(() => ({
  ...attrs,
}))

const stateLabel = ref<string>()
const stateValue = ref<RadioModelValue>()

const { options: stateOptions, init, findLabel, findOption } = useOptionQuery<RadioOption>(props)

onMounted(() => {
  init()
})

watch(
  () => props.modelValue,
  () => {
    stateValue.value = props.modelValue
    stateLabel.value = findLabel(props.modelValue)
  },
  { immediate: true },
)

const getComponent = (isButton?: boolean) =>
  isButton || props.isButton ? 'el-radio-button' : 'el-radio'

const getCallbackParams = (item: RadioOption): RadioCallbackParams => ({
  value: stateValue.value,
  label: stateLabel.value,
  option: item,
})

const handleClick = (option: RadioOption) => {
  const { label, value, disabled } = option

  if (props.disabled === true || disabled === true) {
    return
  }

  const flag = stateLabel.value === label

  stateLabel.value = flag ? undefined : label
  stateValue.value = flag ? '' : value

  emitChange()
}

const emitChange = () => {
  emit('update:modelValue', stateValue.value)
  emit('change', {
    value: stateValue.value,
    label: stateLabel.value,
    option: findOption(stateValue.value),
  })
}
</script>
