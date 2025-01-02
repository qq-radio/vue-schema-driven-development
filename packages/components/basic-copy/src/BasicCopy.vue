<template>
  <div :class="ns.b()">
    <slot>{{ text }}</slot>
    <el-icon :class="ns.e('icon')" @click="copyToClipboard">
      <DocumentCopy />
    </el-icon>
    <span v-if="showAnimation" :class="ns.e('animation')">复制成功!</span>
  </div>
</template>

<script setup lang="ts">
import type { BasicCopyProps } from './type'

import { useBasicNamespace } from '@center/composables'

import { ref, useSlots } from 'vue'
import { DocumentCopy } from '@element-plus/icons-vue'

const ns = useBasicNamespace('copy')

defineOptions({
  name: 'BasicCopy',
  inheritAttrs: false,
})

const slots = useSlots()

const props = withDefaults(defineProps<BasicCopyProps>(), {})

const getText = () => props.text || (slots && slots.default?.()[0].children)

const showAnimation = ref(false)

const copyToClipboard = async () => {
  try {
    const words = getText() as string
    await navigator.clipboard.writeText(words)
    showAnimation.value = true
    setTimeout(() => {
      showAnimation.value = false
    }, 2000)
  } catch (error) {
    console.error('BasicCopy 复制失败:', error)
  }
}
</script>

<style scoped lang="scss">
@use './style.scss';
</style>
