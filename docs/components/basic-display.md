# BasicDisplay 显示

## 简介

- 整合"数据展示"章节里的组件

:::info
该组件主要用于[`BasicTable`](/components/basic-table)列配置指定`display`时使用、[`BasicDescription`](/components/basic-description)描述项配置指定`display`时使用
:::

## 基本使用

:::demo
basic-display/basic
:::

## BasicDisplay Attributes

| 名称           | 说明           | 类型                                                                                   | 默认值 | 是否必填 |
| -------------- | -------------- | -------------------------------------------------------------------------------------- | ------ | -------- |
| `type`         | 显示组件的类型 | `'link' \| 'tag' \| 'progress' \| 'avatar' \| 'image' \| 'copy' \| 'status' \| 'time'` | -      | 是       |
| `displayProps` | 组件透传属性   | `Recordable`                                                                           | -      | -        |
| `displaySlots` | 组件透传插槽   | `Recordable`                                                                           | -      | -        |
