# BasicImage 图片

## 单张图片

单张图片的使用方法与`el-image`一致

:::demo
basic-image/basic
:::

## 多张图片

若需要渲染多张图片，`src`传入图片数组即可，且在图片的底部显示图片数量提示文字

:::demo
basic-image/multiple
:::

## BasicImage Attributes

| 属性名 | 说明                                                                                           | 类型                 | 默认值 | 是否必填 |
| ------ | ---------------------------------------------------------------------------------------------- | -------------------- | ------ | -------- |
| `src`  | 单张图片地址或多张图片地址数组                                                                 | `string \| string[]` | -      | 是       |
| ...    | 同时支持 [el-image](https://element-plus.org/zh-CN/component/image.html#attributes) Attributes | ...                  | ...    | ...      |

## BasicImage Events

| 事件名 | 说明                                                                                   | 类型 |
| ------ | -------------------------------------------------------------------------------------- | ---- |
| ...    | 同时支持 [el-image](https://element-plus.org/zh-CN/component/image.html#events) Events | ...  |

## BasicImage Slots

| 插槽名 | 说明                                                                                 | 插槽参数类型 |
| ------ | ------------------------------------------------------------------------------------ | ------------ |
| ...    | 同时支持 [el-image](https://element-plus.org/zh-CN/component/image.html#slots) Slots | ...          |
