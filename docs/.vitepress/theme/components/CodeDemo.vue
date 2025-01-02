<template>
  <ClientOnly>
    <div class="docs-example-showcase">
      <AppAsyncComponent />
    </div>
    <div class="docs-example-buttons">
      <el-tooltip content="复制代码">
        <el-icon :size="size"><DocumentCopy v-copy="content" /></el-icon>
      </el-tooltip>
      <el-tooltip :content="show ? '收起源代码' : '查看源代码'">
        <el-icon :size="size" @click="handleToggle">
          <ArrowUp v-if="show" />
          <ArrowDown v-else />
        </el-icon>
      </el-tooltip>
    </div>
    <div
      :style="{
        display: show ? 'block' : 'none',
      }"
      class="docs-example-language-vue language-vue"
    >
      <div class="content">
        <highlightjs language="js" :code="decoded"></highlightjs>
      </div>
      <div class="line-numbers-wrapper">
        <template v-for="item in total" :key="item">
          <span class="line-number">
            {{ item }}
          </span>
          <br />
        </template>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { DocumentCopy, ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import { ElIcon, ElTooltip } from 'element-plus'

const getComponent = (moduleFiles: Record<string, any>, path: string) => {
  const key = Object.keys(moduleFiles).find((i) => i.endsWith(`/examples/${path}.vue`)) as string
  return moduleFiles[key]?.default
}

const moduleFiles = import.meta.glob('../../../examples/**/*.vue', {
  eager: true,
})

const props = defineProps<{
  source: string
  path: string
  rawSource: string
}>()

const show = ref(false)
const total = ref(0)
const size = 18

const AppAsyncComponent = getComponent(moduleFiles, props.path)

const handleToggle = () => {
  show.value = !show.value
}

const decoded = computed(() => decodeURIComponent(props.source))
const content = computed(() => decodeURIComponent(props.rawSource))

const tem = content.value.split('\r\n')
total.value = tem.length
</script>

<style scoped lang="scss">
.docs-example-showcase {
  border: 1px solid #dcdfe6;
  border-radius: 4px 4px 0 0;
  padding: 20px;
  overflow: auto;
}
.docs-example-buttons {
  border: 1px solid #dcdfe6;
  border-top: 0;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 0 0 4px 4px;
  .el-icon {
    cursor: pointer;
    margin-left: 20px;
    color: #747578;
  }
}
.content {
  padding-left: 32px;
}

.line-numbers-wrapper {
  border-color: #dcdfe6;
  line-height: 1.4;
  padding-top: 11px;
  user-select: none;
  .line-number {
    color: #aaa;
    line-height: 1.4;
  }
}
</style>
