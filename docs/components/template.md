# BasicXX

## 基本使用

## BasicXX Attributes

| 属性名                 | 说明                                                                                             | 类型  | 默认值 | 是否必填 |
| ---------------------- | ------------------------------------------------------------------------------------------------ | ----- | ------ | -------- |
| `modelValue`/`v-model` | 双向绑定值，填写的数据                                                                           | `any` | -      | 是       |
| ...                    | 同时支持 [el-dialog](https://element-plus.org/zh-CN/component/dialog.html#attributes) Attributes | ...   | ...    | ...      |

## BasicXX Events

| 事件名              | 说明                                                                                     | 类型           |
| ------------------- | ---------------------------------------------------------------------------------------- | -------------- |
| `update:modelValue` | 填写值变化时触发                                                                         | `(value: any)` |
| change              | 填写值变化时触发                                                                         |                |
| ...                 | 同时支持 [el-dialog](https://element-plus.org/zh-CN/component/dialog.html#events) Events | ...            |

## BasicXX Slots

| 插槽名  | 说明                                                                                   | 插槽参数类型 |
| ------- | -------------------------------------------------------------------------------------- | ------------ |
| default | 自定义文本内容                                                                         | -            |
| ...     | 同时支持 [el-dialog](https://element-plus.org/zh-CN/component/dialog.html#slots) Slots | ...          |

## BasicXX Exposes

| 方法名       | 说明     | 类型                                     |
| ------------ | -------- | ---------------------------------------- |
| `setXXProps` | 设置属性 | `(props: Partial<BasicXXProps>) => void` |
