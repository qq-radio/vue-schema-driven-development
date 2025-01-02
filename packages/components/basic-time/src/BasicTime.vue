<template>
  <span>{{ formattedTime }}</span>
</template>

<script setup lang="ts">
import type { BasicTimeProps } from './type'

import { computed } from 'vue'
import dayjs from 'dayjs'

defineOptions({
  name: 'BasicTime',
})

const props = withDefaults(defineProps<BasicTimeProps>(), {
  format: 'YYYY-MM-DD',
})

const checkIsValid = (time) => {
  if (!time) {
    return false
  }

  return dayjs(time).isValid()
}

const formattedTime = computed(() => {
  const { time, format } = props

  if (!checkIsValid(time)) {
    return ''
  }

  return dayjs(time).format(format)
})
</script>
