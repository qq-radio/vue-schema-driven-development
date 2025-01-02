# BasicSelect 下拉选择

## 简介

- 支持全选
- 传入数组渲染选项组替代手动`v-for`渲染
- 提供灵活的渲染方式，渲染的优先级为：各个选项的`customRender` > 各个选项的`customSlot` > 模板的`render` > 模板的默认插槽 > 普通的`label`渲染

::: note
`BasicSelect`选项渲染优先级与[`BasicRadioGroup`](/components/basic-radio-group)、[`BasicCheckboxGroup`](/components/basic-radio-group)选项渲染优先级一致
:::

## 基本使用

:::demo
basic-select/basic
:::

## 监听`change`

很多时候，后端希望您将更多的信息传值给他，如选择产品后，包括产品名称、产品编号、产品分类等更详细的信息传值给后端，因此您可以通过监听`change`事件拿到详细的选中数据

:::demo
basic-select/change
:::

## 全选

若您希望全选，只需传入`hasCheckAll`即可

:::demo
basic-select/check-all
:::

## 远程数据

若选项数据来自后端接口，请传入`api`，且可传入`resultField`、`labelField`、`valueField`自动构建`options`数组

:::demo
basic-select/api
:::

## 格式化

您可以传入`formatter`格式化各个选项的`label`，`formatter`会`map`数组里的每个元素后并执行`formatter`函数，得到的结果作为`label`值进行展示

:::demo
basic-select/formatter
:::

## 自定义渲染 - `customRender`

您可以使用`customRender`为各个选项定制渲染

:::demo
basic-select/custom-render
:::

## 自定义渲染 - `customSlot`

您可以使用`customSlot`为各个选项定制渲染

:::demo
basic-select/custom-slot
:::

## 统一渲染 - `render`

您可以使用`render`为所有选项指定统一的渲染模板

:::demo
basic-select/template-render
:::

## 统一渲染 - `defaultSlot`

您可以使用默认插槽为所有选项指定统一的渲染模板

:::demo
basic-select/template-slot
:::

## BasicSelect Attributes

| 属性名                 | 说明                                                                                             | 类型                                           | 默认值  | 是否必填 |
| ---------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ------- | -------- |
| `modelValue`/`v-model` | 双向绑定值，选择的数据                                                                           | `SelectModelValue`                             | -       | 是       |
| `hasCheckAll`          | 是否显示全选选项                                                                                 | `boolean`                                      | `false` | -        |
| `multiple`             | 是否多选                                                                                         | `boolean`                                      | `false` | -        |
| `clearable`            | 是否可清空选项                                                                                   | `boolean`                                      | `true`  | -        |
| `options`              | 静态选项数据                                                                                     | [SelectOption](#selectoption)[]                | -       | 是       |
| `api`                  | 异步获取选项的接口                                                                               | `() => Promise<any[]>`                         | -       | -        |
| `resultField`          | 异步选项数据中结果字段的路径                                                                     | `string`                                       | -       | -        |
| `labelField`           | 异步选项数据中标签字段的路径                                                                     | `string`                                       | -       | -        |
| `valueField`           | 异步选项数据中值字段的路径                                                                       | `string`                                       | -       | -        |
| `formatter`            | 用于格式化选项的函数                                                                             | `(option: any) => any`                         | -       | -        |
| `render`               | 自定义渲染方法                                                                                   | `(params: SelectCallbackParams) => RenderType` | -       | -        |
| ...                    | 同时支持 [el-select](https://element-plus.org/zh-CN/component/select.html#attributes) Attributes | ...                                            | ...     | ...      |

## BasicSelect Events

| 事件名              | 说明                                                         | 类型                                                         |
| ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `update:modelValue` | 选中值变化时触发                                             | `(value: SelectModelValue) => void`                          |
| `change`            | 选中值变化时触发                                             | `(params: { labels: string[]; values: SelectModelValue; options: SelectOption \|SelectOption[] }) => void` |
| ...                 | 同时支持 [el-select](https://element-plus.org/zh-CN/component/select.html#events) Events | ...                                                          |

## BasicSelect Slots

| 插槽名      | 说明                                                         | 插槽参数类型                                                 |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `default`   | 选项的统一渲染模板                                           | `{ labels: string[]; values: SelectModelValue; option: SelectOption }` |
| `check-all` | 自定义全选选项                                               | `{ labels: string[]; values: SelectModelValue; option: SelectOption }` |
| ...         | 同时支持 [el-select](https://element-plus.org/zh-CN/component/select.html#slots) Slots | ...                                                          |

## SelectOption

| 属性名         | 说明               | 类型                                          | 默认值 |
| -------------- | ------------------ | --------------------------------------------- | ------ |
| `label`        | 单选框的标签       | `string`                                      | -      |
| `value`        | 单选框的值         | `string \| number`                            | -      |
| `disabled`     | 是否禁用           | `boolean`                                     | -      |
| `customRender` | 自定义选项渲染函数 | `(params: RadioCallbackParams) => RenderType` | -      |
| `customSlot`   | 自定义选项插槽名称 | `string`                                      | -      |
