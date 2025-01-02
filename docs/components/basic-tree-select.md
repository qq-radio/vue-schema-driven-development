# BasicTreeSelect 树形选择

## 简介

- 提供`api`配置获取数据

## 基本使用

:::demo
basic-tree-select/basic
:::

## BasicTreeSelect Attributes

| 属性名                 | 说明                                                                                                       | 类型                                          | 默认值 | 是否必填 |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------ | -------- |
| `modelValue`/`v-model` | 双向绑定值，选择的数据                                                                                     | `string` \| `number` \| `boolean` \| `object` | -      | -        |
| `clearable`            | 是否支持清空                                                                                               | `boolean`                                     | `true` | -        |
| `data`                 | 静态数据源                                                                                                 | `Recordable[]`                                | -      | -        |
| `api`                  | 异步数据获取方法                                                                                           | `() => Promise<any>`                          | -      | -        |
| `resultField`          | 异步接口返回结果字段路径                                                                                   | `string`                                      | -      | -        |
| ...                    | 同时支持 [el-tree-select](https://element-plus.org/zh-CN/component/tree-select.html#attributes) Attributes | ...                                           | ...    | ...      |

## BasicTreeSelect Events

| 事件名              | 说明                                                         | 类型                                              |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------- |
| `update:modelValue` | 选中值变化时触发                                             | `(value: TreeSelectModelValue) => void`           |
| `change`            | 选中值变化时触发                                             | `(params: {value: TreeSelectModelValue}) => void` |
| ...                 | 同时支持 [el-tree-select](https://element-plus.org/zh-CN/component/tree-select.html#events) Events | ...                                               |

## BasicTreeSelect Slots

| 插槽名 | 说明                                                                                             | 插槽参数类型 |
| ------ | ------------------------------------------------------------------------------------------------ | ------------ |
| ...    | 同时支持 [el-tree-select](https://element-plus.org/zh-CN/component/tree-select.html#slots) Slots | ...          |
