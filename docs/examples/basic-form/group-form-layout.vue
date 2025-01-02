<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="示例" name="example">
      <BasicForm
        v-model="formModel"
        :schemas="formSchemas"
        :title-col-props="{
          span: 22,
        }"
        :col-props="{
          span: 10,
        }"
        has-footer
      />
    </el-collapse-item>
    <el-collapse-item title="表单值" name="data">
      {{ formModel }}
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { BasicForm, FormSchema } from '@center/components/basic-form'

const activeNames = ref(['example'])

const formModel = ref({})

const formSchemas: FormSchema[] = [
  {
    title: '基本信息',
    // titleColProps: {
    //   span: 15,
    // },
  },
  {
    label: '用户',
    prop: 'username',
  },
  {
    title: '喜好',
    titleProps: {
      style: {
        color: '#409eff',
        fontWeight: 'bold',
        borderBottom: '1px solid #409eff',
      },
    },
  },
  {
    label: '咖啡',
    prop: 'coffee',
    component: 'radio-group',
    componentProps: {
      options: [
        { label: '拿铁', value: 'latte' },
        { label: '卡布奇诺', value: 'cappuccino' },
        { label: '美式', value: 'americano' },
      ],
    },
  },
  {
    label: '运动',
    prop: 'sport',
    component: 'checkbox-group',
    componentProps: {
      options: [
        { label: '足球', value: 'football' },
        { label: '篮球', value: 'basketball' },
        { label: '羽毛球', value: 'badminton' },
      ],
    },
  },
  {
    title: '饮食',
    titleProps: {
      style: {
        color: '#409eff',
        fontWeight: 'bold',
        borderBottom: '1px solid #409eff',
      },
    },
  },
  {
    label: '水果',
    prop: 'fruit',
    component: 'radio-group',
    componentProps: {
      options: [
        { label: '葡萄', value: 'grape' },
        { label: '樱桃', value: 'cherry' },
        { label: '橘子', value: 'orange' },
      ],
    },
  },
  {
    label: '早餐',
    prop: 'breakfast',
    component: 'select',
    componentProps: {
      options: [
        { label: '鸡蛋', value: 'egg' },
        { label: '面包', value: 'bread' },
        { label: '培根', value: 'bacon' },
      ],
    },
  },
  {
    title: '兴趣',
    titleProps: {
      style: {
        color: '#409eff',
        fontWeight: 'bold',
        borderBottom: '1px solid #409eff',
      },
    },
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
