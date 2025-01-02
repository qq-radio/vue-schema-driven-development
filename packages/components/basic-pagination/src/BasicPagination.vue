<template>
  <el-pagination
    v-bind="getBindValues"
    :current-page="page.currentPage"
    :page-size="page.pageSize"
    :total="page.total"
    background
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script setup lang="ts">
import type { BasicPaginationProps, Page } from './type'

import { ref, computed, watchEffect, useAttrs } from 'vue'

defineOptions({
  name: 'BasicPagination',
})

const attrs = useAttrs()

const emit = defineEmits(['update:modelValue', 'change'])

const props = withDefaults(defineProps<BasicPaginationProps>(), {
  modelValue: () => ({
    currentPage: 1,
    pageSize: 10,
    total: 0,
  }),
})

const defaultProps = {
  layout: 'total, sizes, prev, pager, next, jumper',
  pageSizes: [10, 20, 30, 40, 50, 100],
  currentPage: 1,
  pageSize: 10,
}

const getBindValues = computed(() => ({
  ...defaultProps,
  ...attrs,
}))

const page = ref<Page>({
  currentPage: 1,
  pageSize: 10,
  total: 0,
})

watchEffect(() => {
  page.value = { ...props.modelValue }
})

const emitChange = () => {
  emit('update:modelValue', page.value)
  emit('change', page.value)
}

const handleCurrentChange = (p: number) => {
  page.value.currentPage = p
  emitChange()
}

const handleSizeChange = (s: number) => {
  page.value.pageSize = s
  page.value.currentPage = 1
  emitChange()
}
</script>
