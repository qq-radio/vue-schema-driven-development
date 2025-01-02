<template>
  <component :is="getComponent(type)" v-if="hasComponent(type)" v-bind="displayProps">
    <template v-for="(slot, key) in displaySlots" :key="key" #[key]="data">
      <component :is="slot" v-bind="data" />
    </template>
  </component>
</template>

<script setup lang="ts">
import type { BasicDisplayProps } from './type'

import { hasComponent, getComponent } from './component'

defineOptions({
  name: 'BasicDisplay',
})

withDefaults(defineProps<BasicDisplayProps>(), {
  displayProps: () => ({}),
  displaySlots: () => ({}),
})
</script>
