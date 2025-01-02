# BasicImport 导入

# 基本使用

:::demo
basic-import/basic
:::

## BasicImport Attributes

| 属性名           | 说明     | 类型                              | 默认值 | 是否必填 |
| ---------------- | -------- | --------------------------------- | ------ | -------- |
| `templateConfig` | 模板配置 | [TemplateConfig](#templateconfig) | -      | 是       |
| `uploadConfig`   | 上传配置 | [UploadConfig](#uploadconfig)     | -      | 是       |
| `importConfig`   | 导入配置 | [ImportConfig](#importconfig)     | -      | 是       |

## BasicImport Events

| 事件名     | 说明           | 类型         |
| ---------- | -------------- | ------------ |
| `success`  | 导入成功时触发 | `() => void` |
| `fail`     | 导入失败时触发 | `() => void` |
| `complete` | 导入完成后触发 | `() => void` |

## TemplateConfig

| 属性名     | 说明         | 类型         | 默认值 | 是否必填 |
| ---------- | ------------ | ------------ | ------ | -------- |
| `url`      | 模板下载地址 | `string`     | -      | 是       |
| `params`   | 模板下载参数 | `Recordable` | -      | -        |
| `fileName` | 模板文件名   | `string`     | -      | -        |

## UploadConfig

| 属性名 | 说明         | 类型     | 默认值 | 是否必填 |
| ------ | ------------ | -------- | ------ | -------- |
| `url`  | 上传接口地址 | `string` | -      | 是       |

## ImportConfig

| 属性名   | 说明         | 类型                              | 默认值 | 是否必填 |
| -------- | ------------ | --------------------------------- | ------ | -------- |
| `api`    | 导入接口函数 | `(params: T) => Promise<unknown>` | -      | 是       |
| `params` | 导入参数     | `Recordable`                      | -      | -        |
