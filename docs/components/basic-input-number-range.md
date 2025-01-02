# BasicInputNumberRange 数字范围输入框

## 基本使用

`BasicInputNumberRange`使用2个`el-input-number`组合实现数字范围输入框

:::demo
basic-input-number-range/basic
:::

## 透传属性

您可以通过`inputNumberProps`传入数字输入框的自定义属性

:::demo
basic-input-number-range/passing-props
:::

## 自定义标识符

您可以通过`prefix`自定义前缀标识符、`suffix`自定义后缀标识符、`range-separator`自定义分隔标识符

:::demo
basic-input-number-range/symbol
:::

## BasicInputNumberRange Attributes

| 属性名                 | 说明                                                                                             | 类型                          | 默认值         | 是否必填 |
| ---------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------- | -------------- | -------- |
| `modelValue`/`v-model` | 双向绑定值，填写的数据                                                                           | `(null\|undefined\|number)[]` | `[null, null]` | 是       |
| `disabled`             | 是否禁用                                                                                         | `boolean`                     | -              | -        |
| `startPlaceholder`     | 起始输入框占位文本                                                                               | `string`                      | `请输入数字`   | -        |
| `endPlaceholder`       | 结束输入框占位文本                                                                               | `string`                      | `请输入数字`   | -        |
| `inputNumberProps`     | [el-input-number](https://element-plus.org/zh-CN/component/input-number.html#attributes)透传属性 | `Recordable`                  | -              | -        |
| `prefix`               | 前缀符号                                                                                         | `string`                      | -              | -        |
| `suffix`               | 后缀符号                                                                                         | `string`                      | -              | -        |
| `rangeSeparator`       | 范围分隔符号                                                                                     | `string`                      | `-`            | -        |

## BasicInputNumberRange Events

| 事件名              | 说明             | 类型                                          |
| ------------------- | ---------------- | --------------------------------------------- |
| `update:modelValue` | 填写值变化时触发 | `(value: InputNumberRangeModelValue) => void` |
| `change`            | 填写值变化时触发 | `(value: InputNumberRangeModelValue) => void` |
