# BasicDescription 描述

## 简介

- 通过`schemas`配置渲染描述列表

## 基本使用

:::demo
basic-description/basic
:::

## 透传属性

您可以通过`itemProps`设置公共的描述项属性，也可以自定义各项的属性

:::demo
basic-description/item-props
:::

## 文字提示

您可以通过`labelTooltip`设置描述项的`label`提示语

:::demo
basic-description/label-tooltip
:::

## 自定义渲染 - `customLabelRender`/`tsx`

您可以通过`customLabelRender`/`tsx`自定义渲染描述项的`label`

:::demo
basic-description/custom-label-render-tsx
:::

## 自定义渲染 - `customLabelRender`/`h`

您可以通过`customLabelRender`/`h`自定义渲染描述项的`label`

:::demo
basic-description/custom-label-render-h
:::

## 自定义渲染 - `customLabelSlot`

您可以通过`customLabelSlot`自定义渲染描述项的`label`

:::demo
basic-description/custom-label-slot
:::

## 自定义渲染 - `customRender`/`tsx`

您可以通过`customRender`/`tsx`自定义渲染描述项

:::demo
basic-description/custom-render-tsx
:::

## 自定义渲染 - `customRender`/`h`

您可以通过`customRender`/`h`自定义渲染描述项

:::demo
basic-description/custom-render-h
:::

## 自定义渲染 - `customSlot`

您可以通过`customSlot`自定义渲染描述项

:::demo
basic-description/custom-slot
:::

## 自定义渲染 - `display`

您可以通过`display`自定义渲染描述项

:::demo
basic-description/display
:::

## BasicDescription Attributes

| 属性名      | 说明                                                                                                                          | 类型                                      | 默认值 | 是否必填 |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------ | -------- |
| `data`      | 描述数据                                                                                                                      | `Recordable`                              | -      | 是       |
| `schemas`   | 描述项配置数组                                                                                                                | [DescriptionSchema](#descriptionschema)[] | -      | 是       |
| `itemProps` | [el-descriptions-item](https://element-plus.org/zh-CN/component/descriptions.html#descriptionsitem-attributes) 描述项透传属性 | `Recordable`                              | -      | -        |
| ...         | 同时支持 [el-descriptions](https://element-plus.org/zh-CN/component/descriptions.html#descriptions-attributes) Attributes     | ...                                       | ...    | ...      |

## BasicDescription Slots

| 事件名 | 说明                                                                                                            | 插槽参数类型 |
| ------ | --------------------------------------------------------------------------------------------------------------- | ------------ |
| ...    | 同时支持 [el-descriptions](https://element-plus.org/zh-CN/component/descriptions.html#descriptions-slots) Slots | ...          |

## DescriptionSchema

| 属性名              | 说明                 | 类型                                                    | 是否必填 |
| ------------------- | -------------------- | ------------------------------------------------------- | -------- |
| `prop`              | 描述项字段名         | `string`                                                | 是       |
| `label`             | 描述项标签           | `string`                                                | 是       |
| `visible`           | 描述项是否可见       | `MaybeRefOrGetter<boolean>`                             | -        |
| `itemProps`         | 描述项的属性         | `Recordable`                                            | -        |
| `labelTooltip`      | 标签提示信息         | `string`                                                | -        |
| `customLabelRender` | 自定义标签渲染函数   | `() => RenderType`                                      | -        |
| `customLabelSlot`   | 自定义标签插槽       | `string`                                                | -        |
| `formatter`         | 描述项格式化函数     | `(params: DescriptionItemCallbackParams) => any`        | -        |
| `customRender`      | 自定义描述项渲染函数 | `(params: DescriptionItemCallbackParams) => RenderType` | -        |
| `customSlot`        | 自定义描述项插槽名称 | `string`                                                | -        |
| `display`           | 显示类型             | `DisplayType`                                           | -        |
| `displayProps`      | 显示组件的属性       | `Recordable`                                            | -        |
| `displaySlots`      | 显示组件的插槽       | `Recordable`                                            | -        |
