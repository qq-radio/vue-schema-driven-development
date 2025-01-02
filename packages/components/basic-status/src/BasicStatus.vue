<template>
  <span :class="ns.b()">
    <span
      :class="[ns.e('circle'), ns.em('circle', type)]"
      :style="{
        backgroundColor: color,
      }"
    />
    <span :class="ns.e('text')">
      <slot>{{ text }}</slot>
    </span>
  </span>
</template>

<script setup lang="ts">
import type { BasicStatusProps } from './type'

import { useBasicNamespace } from '@center/composables'

const ns = useBasicNamespace('status')

defineOptions({
  name: 'BasicStatus',
  inheritAttrs: false,
})

withDefaults(defineProps<BasicStatusProps>(), {
  type: 'primary',
})
</script>

<style scoped lang="scss">
@use './style.scss';
</style>
