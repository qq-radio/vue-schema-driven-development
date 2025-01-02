# BasicReadonlyInput 输入框

## 基本使用

在一些情况下`input`需设为`readonly`，例如：点击输入框后打开表格弹窗勾选数据后回填至输入框，此时`input`需设为`readonly`

当设为`readonly`时，`input`的`clearable`会失效，导致凡是输入框有值后无法删除，这在该项不是必填的情况下会导致无法清空的情况，因此`BasicReadonlyInput`在`el-input`设为`readonly`基础上添加清空按钮

:::demo
basic-readonly-input/basic
:::

## 禁用

禁用时自动隐藏`search`和`clear`图标
:::demo
basic-readonly-input/disabled
:::

## BasicReadonlyInput Attributes

| 属性名                 | 说明                                                         | 类型      | 默认值 | 是否必填 |
| ---------------------- | ------------------------------------------------------------ | --------- | ------ | -------- |
| `modelValue`/`v-model` | 双向绑定值                                                   | `any`     | -      | 是       |
| `clearable`            | 是否显示清除按钮                                             | `boolean` | `true` | -        |
| `disabled`             | 是否禁用输入框                                               | `boolean` | -      | -        |
|                        |                                                              |           |        |          |
| ...                    | 同时支持 [el-input](https://element-plus.org/zh-CN/component/input.html#attributes) Attributes | ...       | ...    | ...      |

## BasicReadonlyInput Events

| 事件名              | 说明                                                         | 类型                   |
| ------------------- | ------------------------------------------------------------ | ---------------------- |
| `update:modelValue` | 值变化时触发                                                 | `(value: any) => void` |
| `change`            | 值变化时触发                                                 | `(value: any) => void` |
| `click`             | 点击输入框或按钮触发                                         | `() => void`           |
| `clear`             | 点击清空按钮触发                                             | `() => void`           |
| ...                 | 同时支持 [el-input](https://element-plus.org/zh-CN/component/input.html#events) Events | ...                    |

## BasicReadonlyInput Slots

| 插槽名    | 说明                                                                                 | 插槽参数类型 |
| --------- | ------------------------------------------------------------------------------------ | ------------ |
| `prepend` | 输入框前置内容                                                                       | -            |
| `append`  | 输入框后置内容                                                                       | -            |
| ...       | 同时支持 [el-input](https://element-plus.org/zh-CN/component/input.html#slots) Slots | ...          |
