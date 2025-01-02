# BasicExport 导出

# 基本使用

:::demo
basic-export/basic
:::

## BasicExport Attributes

| 属性名   | 说明     | 类型                          | 默认值 | 是否必填 |
| -------- | -------- | ----------------------------- | ------ | -------- |
| `config` | 导出配置 | [ExportConfig](#exportconfig) | -      | 是       |

## BasicExport Events

| 事件名     | 说明           | 类型         |
| ---------- | -------------- | ------------ |
| `success`  | 导出成功时触发 | `() => void` |
| `fail`     | 导出失败时触发 | `() => void` |
| `complete` | 导出完成时触发 | `() => void` |

## ExportConfig

| 属性名         | 说明                                      | 类型                               |
| -------------- | ----------------------------------------- | ---------------------------------- |
| `url`          | 导出请求的链接                            | `string`                           |
| `params`       | 导出请求的参数                            | `Recordable \| (() => Recordable)` |
| `beforeExport` | 导出前的回调函数，返回 `false` 时阻止导出 | `(params: Recordable) => boolean`  |
| `fileName`     | 导出的文件名                              | `string`                           |
