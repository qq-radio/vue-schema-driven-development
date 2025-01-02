<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="表单项组件总览" name="display-overview">
      <div class="widgets">
        <template v-for="widget in formItemWidgets" :key="widget.name">
          <span class="widget" @click="goToPage(widget.link)">
            {{ widget.key }}<br />{{ widget.name }}
          </span>
        </template>
      </div>
    </el-collapse-item>
    <el-collapse-item title="显示组件总览" name="form-item-overview">
      <div class="widgets">
        <template v-for="widget in displayWidgets" :key="widget.name">
          <span class="widget" @click="goToPage(widget.link)">
            {{ widget.key }}<br />{{ widget.name }}
          </span>
        </template>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import formItemWidgets from './configs/form-item'
import displayWidgets from './configs/display'

import { useRouter } from 'vitepress'

const activeNames = ref(['display-overview', 'form-item-overview'])

const router = useRouter()

const goToPage = (link) => {
  if (link.startsWith('http')) {
    window.open(link, '_blank')
  } else {
    router.go(link)
  }
}
</script>

<style scoped lang="scss">
.widgets {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.widget {
  width: 180px;
  padding: 6px 12px;
  font-size: 12px;
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 4px;
  background: rgba(242, 247, 254);
  border: #d3e3fd 1px solid;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #0072ff;
  }
}
</style>
