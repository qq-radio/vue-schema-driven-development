<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="示例" name="example">
      <BasicForm v-model="formModel" :schemas="formSchemas" has-footer>
        <template #title-interest>
          <div style="font-size: 20px">
            <el-icon>
              <VideoCamera />
            </el-icon>
            <span style="padding: 0 6px">-</span>
            <el-icon>
              <Headset />
            </el-icon>
          </div>
        </template>
      </BasicForm>
    </el-collapse-item>
    <el-collapse-item title="表单值" name="data">
      {{ formModel }}
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { BasicForm, FormSchema } from '@center/components/basic-form'

import { ElIcon } from 'element-plus'
import { VideoCamera, Headset } from '@element-plus/icons-vue'

const activeNames = ref(['example'])

const formModel = ref({})

const formSchemas: FormSchema[] = [
  {
    title: '兴趣',
    titleProps: {
      style: {
        color: '#409eff',
        fontWeight: 'bold',
        borderBottom: '1px solid #409eff',
      },
    },
    customTitleSlot: 'title-interest',
  },
  {
    label: '电影',
    prop: 'movie',
    component: 'checkbox-group',
    componentProps: {
      options: [
        { label: '动作', value: 'action' },
        { label: '喜剧', value: 'comedy' },
        { label: '恐怖', value: 'horror' },
      ],
    },
  },
  {
    label: '音乐',
    prop: 'music',
    component: 'select',
    componentProps: {
      options: [
        { label: '古典乐', value: 'classical' },
        { label: '蓝调', value: 'blues' },
        { label: '摇滚', value: 'rock' },
      ],
    },
  },
]
</script>
