# BasicDialog 弹窗

## 基本使用

:::demo
basic-dialog/basic
:::

## 自定义`footer`

您可以通过插槽`footer`自定义按钮

:::demo
basic-dialog/custom-footer
:::

## 防抖

在新增、编辑等需要与后端接口交互的弹窗中，对提交按钮进行防抖处理防止重复提交是个高频的场景，您只需传入`hasDebounce`便可实现防抖处理，默认防抖时间为`2s`

:::demo
basic-dialog/has-debounce
:::

## BasicDialog Attributes

| 属性名                 | 说明                                                                                             | 类型               | 默认值  | 是否必填 |
| ---------------------- | ------------------------------------------------------------------------------------------------ | ------------------ | ------- | -------- |
| `modelValue`/`v-model` | 双向绑定值，控制对话框的显示与隐藏                                                               | `boolean`          | `false` | 是       |
| `title`                | 对话框标题                                                                                       | `string`           | -       | 是       |
| `width`                | 对话框宽度                                                                                       | `string \| number` | `780px` | -        |
| `height`               | 对话框高度                                                                                       | `string \| number` | `760`   | -        |
| `loading`              | 确认按钮的加载状态                                                                               | `boolean`          | `false` | -        |
| `hasFooter`            | 是否显示底部操作按钮                                                                             | `boolean`          | `true`  | -        |
| `cancelText`           | 取消按钮的文本                                                                                   | `string`           | `取消`  | -        |
| `confirmText`          | 确认按钮的文本                                                                                   | `string`           | `确定`  | -        |
| ...                    | 同时支持 [el-dialog](https://element-plus.org/zh-CN/component/dialog.html#attributes) Attributes | ...                | ...     | ...      |

## BasicDialog Events

| 事件名              | 说明                                                                                     | 类型                               |
| ------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------- |
| `update:modelValue` | 对话框显示状态变化时触发                                                                 | `(visible: boolean) => void`       |
| `register`          | 注册方法，暴露组件内部方法                                                               | `(methods: DialogMethods) => void` |
| `cancel`            | 点击取消按钮时触发                                                                       | `() => void`                       |
| `confirm`           | 点击确认按钮时触发                                                                       | `() => void`                       |
| ...                 | 同时支持 [el-dialog](https://element-plus.org/zh-CN/component/dialog.html#events) Events | ...                                |

## BasicDialog Slots

| 插槽名  | 说明                                                                                   | 插槽参数类型 |
| ------- | -------------------------------------------------------------------------------------- | ------------ |
| default | 对话框内容区域                                                                         | -            |
| ...     | 同时支持 [el-dialog](https://element-plus.org/zh-CN/component/dialog.html#slots) Slots | ...          |

## BasicDialog Exposes

| 方法名              | 说明                   | 类型                                         |
| ------------------- | ---------------------- | -------------------------------------------- |
| `setDialogProps`    | 设置对话框的属性       | `(props: Partial<BasicDialogProps>) => void` |
| `openDialog`        | 打开对话框             | `() => void`                                 |
| `closeDialog`       | 关闭对话框             | `() => void`                                 |
| `setDialogTitle`    | 设置对话框标题         | `(value: string) => void`                    |
| `setConfirmLoading` | 设置确认按钮的加载状态 | `(loading: boolean) => void`                 |
