# BasicCascader 级联选择

## 简介

- 提供`api`配置获取数据
- 改写`change`事件，回调参数为`value`，和value对应的`node`值

## 基本使用

您可以直接传入`api`获取数据

:::demo
basic-cascader/basic
:::

## 监听`change`

若您需要更详细的选中值信息，可直接监听`change`事件

:::demo
basic-cascader/change
:::

## BasicCascader Attributes

| 属性名                 | 说明                                                                                                          | 类型                                                            | 默认值 | 是否必填 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------ | -------- |
| `modelValue`/`v-model` | 双向绑定值，选择的数据                                                                                        | `undefined` \| `string` \| `number` \| `string[]` \| `number[]` | -      | 是       |
| `clearable`            | 是否支持清空                                                                                                  | `boolean`                                                       | `true` | -        |
| `options`              | 静态数据源                                                                                                    | `Recordable[]`                                                  | -      | -        |
| `api`                  | 异步数据获取方法                                                                                              | `() => Promise<any>`                                            | -      | -        |
| `resultField`          | 异步接口返回结果字段路径                                                                                      | `string`                                                        | -      | -        |
| ...                    | 同时支持 [el-cascader](https://element-plus.org/zh-CN/component/cascader.html#cascader-attributes) Attributes | ...                                                             | ...    | ...      |

## BasicCascader Events

| 事件名              | 说明                                                                                                  | 类型                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `update:modelValue` | 选中值变化时触发                                                                                      | `(value: CascaderModelValue) => void`                                      |
| `change`            | 选中值变化时触发                                                                                      | `({ value: CascaderModelValue; node: Recordable \|Recordable[] }) => void` |
| ...                 | 同时支持 [el-cascader](https://element-plus.org/zh-CN/component/cascader.html#cascader-events) Events | ...                                                                        |

## BasicCascader Slots

| 插槽名 | 说明                                                                                                | 插槽参数类型 |
| ------ | --------------------------------------------------------------------------------------------------- | ------------ |
| ...    | 同时支持 [el-cascader](https://element-plus.org/zh-CN/component/cascader.html#cascader-slots) Slots | ...          |











