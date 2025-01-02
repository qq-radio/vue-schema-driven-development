<template>
  <div :class="ns.b()">
    <el-image v-bind="getBindValues">
      <template v-for="name in Object.keys(slots)" :key="name" #[name]="scope">
        <slot :name="name" v-bind="scope" />
      </template>
    </el-image>
    <div v-if="isMultiple" :class="ns.e('total')">
      {{ `共${images.length}张图片` }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BasicImageProps } from './type'

import { useBasicNamespace } from '@center/composables'

import { useSlots, useAttrs, computed } from 'vue'
import { isArray } from 'lodash'

const ns = useBasicNamespace('image')

defineOptions({
  name: 'BasicImage',
  inheritAttrs: false,
})

const attrs = useAttrs()
const slots = useSlots()

const props = withDefaults(defineProps<BasicImageProps>(), {})

const images = computed<string[]>(() => (isArray(props.src) ? props.src : [props.src]))

const isMultiple = computed(() => images.value.length > 1)

const defaultProps = {
  fit: 'cover',
  previewTeleported: true,
  hideOnClickModal: true,
  style: {
    width: '80px',
    height: '80px',
  },
}

const getBindValues = computed(() => ({
  ...defaultProps,
  ...attrs,
  src: images.value[0],
  previewSrcList: images.value,
}))
</script>

<style scoped lang="scss">
@use './style.scss';
</style>
