<template>
  <BasicPagination
    v-model="page"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
    @change="handleChange"
  />
  <div style="margin-top: 10px">双向绑定值：{{ page }}</div>
</template>

<script setup lang="ts">
import { BasicPagination } from '@center/components'

const page = ref({
  currentPage: 1,
  pageSize: 20,
  total: 86,
})

const handleCurrentChange = (p) => {
  console.log('current-change', p)
}

const handleSizeChange = (s) => {
  console.log('size-change', s)
}

const handleChange = (page) => {
  console.log('change', page)
}
</script>
