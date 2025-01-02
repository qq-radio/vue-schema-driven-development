# BasicStatus 状态

## 简介

- 在字段的含义表示为"禁用/启用"、"生效/未生效"、"审核通过/已驳回"等场景中，我们更希望为文字加上对应的状态颜色从而使数据更加直观，因此提供该组件方便使用

## 基本使用

:::demo
basic-status/basic
:::

## 内置类型

组件提供5种`type`状态：`primary`、`success`、`info`、`warning`、`primary`，`type`默认为`primary`

:::demo
basic-status/type
:::

## 自定义颜色

:::demo
basic-status/color
:::

## BasicStatus Attributes

| 属性名  | 说明         | 类型                                                        | 默认值    | 是否必填 |
| ------- | ------------ | ----------------------------------------------------------- | --------- | -------- |
| `text`  | 状态文本内容 | `string`                                                    | -         | -        |
| `type`  | 状态类型     | `'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'` | `primary` | -        |
| `color` | 自定义颜色   | `string`                                                    | -         | -        |

## BasicStatus Slots

| 插槽名    | 说明       | 插槽参数类型 |
| --------- | ---------- | ------------ |
| `default` | 自定义内容 | -            |
