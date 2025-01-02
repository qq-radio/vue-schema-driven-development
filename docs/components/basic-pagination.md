# BasicPagination 分页器

# 简介

- 该组件仅为了统一项目的分页器配置，无其它新增功能

# 基本使用

::: demo
basic-pagination/basic
:::

## BasicPagination Attributes

| 属性名                 | 说明                                                                                                     | 类型          | 默认值 | 是否必填 |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ------------- | ------ | -------- |
| `modelValue`/`v-model` | 分页数据对象，分页器数据                                                                                 | [Page](#page) | -      | 是       |
| ...                    | 同时支持 [el-pagination](https://element-plus.org/zh-CN/component/pagination.html#attributes) Attributes | ...           | ...    | ...      |

## BasicPagination Events

| 事件名              | 说明                                                         | 类型                   |
| ------------------- | ------------------------------------------------------------ | ---------------------- |
| `update:modelValue` | 分页器数据变化时触发                                         | `(page: Page) => void` |
| `change`            | 分页器数据变化时触发                                         | `(page: Page) => void` |
| ...                 | 同时支持 [el-pagination ](https://element-plus.org/zh-CN/component/pagination.html#events)Events | ...                    |

### Page

| 属性名        | 说明         | 类型     | 默认值 | 是否必填 |
| ------------- | ------------ | -------- | ------ | -------- |
| `currentPage` | 当前页码     | `number` | 1      | 是       |
| `pageSize`    | 每页显示条数 | `number` | 10     | 是       |
| `total`       | 总条目数     | `number` | -      | 是       |
