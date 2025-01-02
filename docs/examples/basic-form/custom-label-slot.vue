<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="示例" name="example">
      <BasicForm v-model="formModel" :schemas="formSchemas" has-footer>
        <template #username>
          <el-icon v-for="i in 3" :key="i" style="color: #00cef0; vertical-align: middle">
            <StarFilled />
          </el-icon>
          <span style="margin: 0 10px">迈克尔</span>
          <el-icon v-for="i in 3" :key="i" style="color: #00cef0; vertical-align: middle">
            <StarFilled />
          </el-icon>
        </template>
        <template #label-username>
          <el-icon>
            <UserFilled />
          </el-icon>
        </template>
        <template #label-movie>
          <el-icon>
            <VideoCamera />
          </el-icon>
        </template>
        <template #label-music>
          <el-icon>
            <Headset />
          </el-icon>
        </template>
      </BasicForm>
    </el-collapse-item>
    <el-collapse-item title="表单值" name="data">
      {{ formModel }}
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { BasicForm, FormSchema } from '@center/components'

import { UserFilled, StarFilled, VideoCamera, Headset } from '@element-plus/icons-vue'

const activeNames = ref(['example'])

const formModel = ref({
  coffee: [],
  sport: '',
})

const formSchemas: FormSchema[] = [
  {
    label: '用户',
    prop: 'username',
    customLabelSlot: 'label-username',
    customSlot: 'username',
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
    customLabelSlot: 'label-movie',
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
    customLabelSlot: 'label-music',
  },
]
</script>
