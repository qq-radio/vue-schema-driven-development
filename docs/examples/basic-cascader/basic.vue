<template>
  <BasicCascader
    v-model="value"
    :api="api"
    result-field="data"
    node-key="id"
    :props="{
      value: 'id',
      label: 'name',
      children: 'children',
      multiple: true,
    }"
    default-expand-all
    check-strictly
  />
  <div style="margin-top: 10px">双向绑定值：{{ value }}</div>
</template>

<script setup lang="ts">
import { BasicCascader } from '@center/components'

const value = ref()

const api = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        message: '响应成功',
        data: [
          {
            id: 7001,
            name: '广东',
            children: [
              {
                id: 7101,
                parentId: 7001,
                name: '佛山',
                children: [
                  { id: 9001, parentId: 7101, name: '南海' },
                  { id: 9002, parentId: 7101, name: '顺德' },
                ],
              },
              {
                id: 7102,
                parentId: 7001,
                name: '深圳',
                children: [
                  { id: 9003, parentId: 7102, name: '龙岗' },
                  { id: 9004, parentId: 7102, name: '龙华' },
                ],
              },
            ],
          },
          {
            id: 8001,
            name: '广西',
            children: [
              {
                id: 8101,
                parentId: 8001,
                name: '南宁',
                children: [
                  { id: 9005, parentId: 8101, name: '兴宁' },
                  { id: 9006, parentId: 8101, name: '青秀' },
                ],
              },
              {
                id: 8102,
                parentId: 8001,
                name: '桂林',
                children: [
                  { id: 9007, parentId: 8102, name: '秀峰' },
                  { id: 9008, parentId: 8102, name: '雁山' },
                ],
              },
            ],
          },
        ],
      })
    }, 500)
  })
}
</script>
