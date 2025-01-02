<template>
  <el-descriptions v-bind="attrs" border>
    <template v-for="item in descriptionSchemas" :key="item.prop">
      <el-descriptions-item v-bind="getItemProps(item)" :label="item.label">
        <template #label>
          <component :is="renderCustomLabel(item)" v-if="isCustomLabel(item)" />
          <template v-else>{{ item.label }}</template>
          <el-tooltip v-if="item.labelTooltip" placement="top" :content="item.labelTooltip">
            <el-icon style="vertical-align: middle; margin-left: 4px">
              <InfoFilled />
            </el-icon>
          </el-tooltip>
        </template>
        <component :is="renderCustomCell(item)" v-if="isCustomCell(item)" />
        <BasicDisplay
          v-else-if="item.display && hasComponent(item.display)"
          :type="item.display"
          :value="formattedValue(item)"
          :display-props="getDisplayProps(item)"
          :display-slots="getDisplaySlots(item)"
        />
        <span v-else>
          {{ formattedValue(item) }}
        </span>
      </el-descriptions-item>
    </template>

    <template #title>
      <slot name="title" />
    </template>

    <template #extra>
      <slot name="extra" />
    </template>
  </el-descriptions>
</template>

<script setup lang="ts">
import type {
  BasicDescriptionProps,
  DescriptionSchema,
  DescriptionItemCallbackParams,
} from './type'

import { computed, unref, useAttrs, useSlots } from 'vue'
import { isFunction } from 'lodash'

import { merge, get } from 'lodash'

import { BasicDisplay, hasComponent } from '@center/components/basic-display'

import { useCustomRender } from '@center/composables'

import { InfoFilled } from '@element-plus/icons-vue'

defineOptions({
  name: 'BasicDescription',
})

const attrs = useAttrs()
const slots = useSlots()

const props = withDefaults(defineProps<BasicDescriptionProps>(), {
  data: () => ({}),
  schemas: () => [],
})

const descriptionSchemas = computed(() =>
  props.schemas.filter((item) => unref(item.visible) !== false),
)

const getItemProps = (item) => merge(props.itemProps, item.itemProps)

const { renderItem } = useCustomRender({ slots })

const isCustomLabel = (item: DescriptionSchema) => item.customLabelRender || item.customLabelSlot

const renderCustomLabel = (item: DescriptionSchema) =>
  renderItem({
    customRender: item.customLabelRender,
    customSlot: item.customLabelSlot,
  })

const getCallbackParams = (item: DescriptionSchema): DescriptionItemCallbackParams => {
  return {
    data: props.data,
    value: get(props.data, item.prop),
    schema: item,
  }
}

const isCustomCell = (item) => item.customRender || item.customSlot

const renderCustomCell = (item: DescriptionSchema) =>
  renderItem(
    {
      customRender: item.customRender,
      customSlot: item.customSlot,
    },
    getCallbackParams(item),
  )

const formattedValue = (item: DescriptionSchema) => {
  const { formatter } = item

  return isFunction(formatter) ? formatter(getCallbackParams(item)) : getCallbackParams(item).value
}

const getDisplayProps = (item: DescriptionSchema) => {
  const { displayProps } = item

  return isFunction(displayProps) ? displayProps(getCallbackParams(item)) : displayProps
}

const getDisplaySlots = (item: DescriptionSchema) => {
  const { displaySlots } = item

  return isFunction(displaySlots) ? displaySlots(getCallbackParams(item)) : displaySlots
}
</script>
