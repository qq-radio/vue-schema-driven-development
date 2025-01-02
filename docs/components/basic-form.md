# BasicForm 表单

## 简介

- 通过`schemas`配置渲染表单

## 基本使用

您可以传入`schemas`数组渲染一组表单项，替代手动`v-for`渲染`el-form-item`，并使用`component`字段设置各表单项渲染的组件类型，若未设置`component`则默认为`input`。以下示例列出了已支持的15种表单项组件类型

:::demo
basic-form/basic
:::

## 透传组件属性

您可以通过`componentProps`传递表单项`component`组件所需的属性

:::warning
若`componentProps`透传属性无法生效，请参考[表单透传属性无法生效](/guide/common-issue#透传属性无法生效)
:::

:::demo
basic-form/passing-props
:::

## 透传组件插槽

您可以通过`componentSlots`传递表单项`component`组件所需的插槽

:::warning
若`componentSlots`透传插槽无法生效，请参考[表单透传插槽无法生效](/guide/common-issue#透传插槽无法生效)
:::

:::demo
basic-form/passing-slots
:::

## 显示与隐藏

您可以通过`visible`设置表单项显示与隐藏，当点击提交按钮时，`submit`事件返回值会自动过滤掉表单里隐藏字段的值

:::demo
basic-form/visible
:::

## 禁用

您可以通过`disabled`设置表单项是否禁用

:::demo
basic-form/disabled
:::

## 文字提示

您可以通过`titleTooltip`设置分组表单标题`title`的提示语，也可以通过`labelTooltip`设置表单项`label`的提示语

:::demo
basic-form/tooltip
:::

## 提交

当您提交表单时，表单填写值可以从以下几种方式获取：

1. 从`submit`事件返回值里获取（最推荐此方法）

```vue
<BasicForm @submit="handleSubmit" />
<script setup lang="ts">
const handleSubmit = (values) => {
  console.log(values)
}
</script>
```

2. 从双向绑定值`formModel`获取

```vue
<BasicForm v-model="formModel" />
<script setup lang="ts">
const submit = () => {
  console.log(formModel)
}
</script>
```

3. 从`hook`函数`getFieldsValue`获取

```vue
<BasicForm @register="registerForm" />
<script setup lang="ts">
const [registerForm, { getFieldsValue }] = useForm()
const submit = () => {
  console.log(getFieldsValue())
}
</script>
```

以上方式均可，但最推荐方法1，原因为：`submit`事件的返回值里自动过滤掉了隐藏字段的值，在编辑表单的场面中，当该字段原本有回显值，但是重新填写表单后，该字段隐藏，那么此时发送给后端的接口就需要将此字段的值置空，因此从`submit`事件返回值里获取应当是首选方法

:::demo
basic-form/submit
:::

## 重置

当点击重置按钮时，重置各表单项的值为对应的`defaultValue`，需要注意，重置是将表单值恢复为`defaultValue`而非清空

:::demo
basic-form/reset
:::

## 表单布局 - 垂直

表单采用`el-row`和`el-col`结合的栅格布局，您可以通过`rowProps`传递`el-row`自定义属性，可以通过`colProps`传递`el-col`自定义属性。其中表单中的各项采用`el-col`作为`el-form-item`的布局容器，默认各项栅格占据列数为24，当`el-col`默认为`{span: 24}`时便等同于表单默认垂直布局

:::demo
basic-form/layout-vertical
:::

## 表单布局 - 内联

若您希望采用水平布局或内联布局，可全局设置`colProps`或单独设置表单项的`colProps`

:::demo
basic-form/layout-inline
:::

## 自定义渲染 - `customRender`/`tsx`

您可以通过`customRender`/`tsx`自定义渲染表单项

:::demo
basic-form/custom-render-tsx
:::

## 自定义渲染 - `customRender`/`h`

您可以通过`customRender`/`h`自定义渲染表单项

:::demo
basic-form/custom-render-h
:::

## 自定义渲染 - `customSlot`

您可以通过`customSlot`自定义渲染表单项

:::demo
basic-form/custom-slot
:::

## 自定义渲染 - `customLabelRender`/`tsx`

您可以通过`customLabelRender`/`tsx`自定义渲染表单项的`label`

:::demo
basic-form/custom-label-render-tsx
:::

## 自定义渲染 - `customLabelRender`/`h`

您可以通过`customLabelRender`/`h`自定义渲染表单项的`label`

:::demo
basic-form/custom-label-render-h
:::

## 自定义渲染 - `customLabelSlot`

您可以通过`customLabelSlot`自定义渲染表单项的`label`

:::demo
basic-form/custom-label-slot
:::

## 动态表单

您可以通过`appendSchema`、`removeSchema`、`updateSchema`动态增删改表单项

:::note
更多动态表单函数使用方法请参考[组件方法](/components/basic-form-method)
:::

:::demo
basic-form/dynamic-form
:::

## 分组表单

若您希望实现分组表单，`schemas`数组里配置项字段设置为`title`即可，且可通过`titleProps`传递自定义属性

:::warning
分组表单其实可以直接当做一个含有特殊样式的文本类型表单项，因此它在实际应用上可能会有局限性，如：数据收集在同一个对象里，无法根据分组各自收集表单填写值。若无法完全满足您的要求，您可以参考[分组表单](/components/basic-form-with-group)来实现
:::

:::demo
basic-form/group-form
:::

## 分组表单 - 布局

分组表单与`el-form-item`一样，采用`el-col`作为布局容器，默认栅格占据列数为24。若您希望自定义分组表单布局，可全局设置`titleColProps`或单独设置配置项的`titleColProps`

:::demo
basic-form/group-form-layout
:::

## 分组表单 - 自定义渲染 - `customTitleRender`/`tsx`

您可以通过`customTitleRender`/`tsx`自定义渲染分组表单的`title`

:::demo
basic-form/group-form-custom-title-render-tsx
:::

## 分组表单 - 自定义渲染 - `customTitleRender`/`h`

您可以通过`customTitleRender`/`h`自定义渲染分组表单的`title`

:::demo
basic-form/group-form-custom-title-render-h
:::

## 分组表单 - 自定义渲染 - `customTitleSlot`

您可以通过`customTitleSlot`自定义渲染分组表单的`title`

:::demo
basic-form/group-form-custom-title-slot
:::

## BasicForm Attributes

| 属性名                 | 说明                                                                                           | 类型                                   | 默认值                             | 是否必填 |
| ---------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------- | ---------------------------------- | -------- |
| `modelValue`/`v-model` | 双向绑定值，表单数据                                                                           | `Recordable`                           | -                                  | 是       |
| `schemas`              | 表单项配置数组                                                                                 | [FormSchema](#formschema)[]            | -                                  | 是       |
| `loading`              | 是否显示提交按钮的加载状态                                                                     | `boolean`                              | `false`                            | -        |
| `disabled`             | 是否禁用表单                                                                                   | `boolean \| MaybeRefOrGetter<boolean>` | `false`                            | -        |
| `filterHiddenFields`   | 是否提交时过滤掉隐藏字段的值                                                                   | `boolean`                              | `true`                             | -        |
| `rowProps`             | 表单行布局 [el-row](https://element-plus.org/zh-CN/component/layout.html#row-attributes) 属性  | `Partial<Mutable<RowProps>>`           | `{ gutter: 20, justify: 'start' }` | -        |
| `colProps`             | 表单列布局 [el-col](https://element-plus.org/zh-CN/component/layout.html#col-api) 属性         | `Partial<Mutable<ColProps>>`           | `{ span: 24 }`                     | -        |
| `titleColProps`        | 表单标题列布局 [el-col](https://element-plus.org/zh-CN/component/layout.html#col-api) 属性     | `Partial<Mutable<ColProps>>`           | -                                  | -        |
| `hasLabel`             | 是否显示标签                                                                                   | `boolean`                              | `true`                             | -        |
| `labelSuffix`          | 标签后缀                                                                                       | `string`                               | `:`                                | -        |
| `labelWidth`           | 标签宽度                                                                                       | `string \| number`                     | `100px`                            | -        |
| `labelPosition`        | 标签位置                                                                                       | `'left' \| 'right' \| 'top'`           | `right`                            | -        |
| `hasFooter`            | 是否显示表单底部按钮                                                                           | `boolean`                              | `false`                            | -        |
| `footerAlign`          | 表单底部对齐方式                                                                               | `'left' \| 'right' \| 'center'`        | -                                  | -        |
| `footerColProps`       | 表单底部按钮列布局 [el-col](https://element-plus.org/zh-CN/component/layout.html#col-api) 属性 | `Partial<Mutable<ColProps>>`           | -                                  | -        |
| `hasReset`             | 是否显示重置按钮                                                                               | `boolean`                              | `true`                             | -        |
| `resetText`            | 重置按钮文本                                                                                   | `string`                               | `重置`                             | -        |
| `submitText`           | 提交按钮文本                                                                                   | `string`                               | `提交`                             | -        |
| `hasErrorMessageTip`   | 是否显示错误提示                                                                               | `boolean`                              | `true`                             | -        |
| `modelAdaptee`         | 接口数据适配表单模型函数                                                                       | `(model: Recordable) => Recordable`    | -                                  | -        |
| `modelAdapter`         | 表单模型适配接口数据函数                                                                       | `(model: Recordable) => Recordable`    | -                                  | -        |

## BasicForm Events

| 事件名              | 说明                 | 类型                             |
| ------------------- | -------------------- | -------------------------------- |
| `update:modelValue` | 表单填写值变化时触发 | `(values: Recordable) => void`   |
| `register`          | 注册表单方法         | `(methods: FormMethods) => void` |
| `submit-error`      | 表单提交错误事件     | `(errors: unknown) => void`      |
| `submit`            | 表单提交事件         | `(values: Recordable) => void`   |
| `reset`             | 表单重置事件         | `() => void`                     |

## BasicForm Slots

| 插槽名   | 说明         | 插槽参数类型        |
| -------- | ------------ | ------------------- |
| `footer` | 表单底部插槽 | `{ reset, submit }` |

## BasicForm Exposes

| 方法名           | 说明             | 类型                                                                                         |
| ---------------- | ---------------- | -------------------------------------------------------------------------------------------- |
| `setFormProps`   | 设置表单属性     | `(props: Partial<BasicFormProps>) => void`                                                   |
| `submit`         | 提交表单         | `() => Promise<FormSubmitResult>`                                                            |
| `reset`          | 重置表单         | `() => void`                                                                                 |
| `updateSchema`   | 更新表单项配置   | `(schemas: Arrayable<PartialRequired<FormSchema, 'prop'>>) => void`                          |
| `removeSchema`   | 移除表单项配置   | `(prop: Arrayable<string>) => void`                                                          |
| `appendSchema`   | 添加表单项配置   | `(schemas: Arrayable<FormSchema>, previousProp?: string) => void`                            |
| `getFieldValue`  | 获取表单项值     | `(field: string) => FieldValue`                                                              |
| `getFieldsValue` | 获取所有表单项值 | `() => Recordable`                                                                           |
| `setFieldsValue` | 设置表单项值     | `(values: Recordable) => void`                                                               |
| `validate`       | 校验表单         | `(callback?: FormValidateCallback) => Promise<FormValidationResult>`                         |
| `validateField`  | 校验表单项       | `(props?: Arrayable<FormItemProp>, callback?: FormValidateCallback) => FormValidationResult` |
| `resetFields`    | 重置表单项       | `(props?: Arrayable<FormItemProp>) => void`                                                  |
| `scrollToField`  | 滚动到表单项     | `(prop: FormItemProp) => void`                                                               |
| `clearValidate`  | 清除表单项校验   | `(props?: Arrayable<FormItemProp>) => void`                                                  |

## FormSchema

| 属性名              | 说明                         | 类型                                                                                   | 是否必填 |
| ------------------- | ---------------------------- | -------------------------------------------------------------------------------------- | -------- |
| `prop`              | 表单项字段名                 | `string`                                                                               | 是       |
| `label`             | 表单项标签                   | `string`                                                                               | 是       |
| `defaultValue`      | 表单项默认值                 | `string \| number \| boolean`                                                          | -        |
| `hasLabel`          | 是否显示标签                 | `boolean`                                                                              | -        |
| `labelWidth`        | 标签宽度                     | `string \| number`                                                                     | -        |
| `sort`              | 表单项排序                   | `number`                                                                               | -        |
| `visible`           | 表单项是否可见               | `boolean \| ((params: FormItemCallbackParams) => boolean)`                             | -        |
| `disabled`          | 表单项是否禁用               | `boolean \| ((params: FormItemCallbackParams) => boolean)`                             | -        |
| `colProps`          | 表单项列的属性               | `Partial<Mutable<ColProps>>`                                                           | -        |
| `titleColProps`     | 表单项标题列的属性           | `Partial<Mutable<ColProps>>`                                                           | -        |
| `labelTooltip`      | 标签提示信息                 | `string`                                                                               | -        |
| `customLabelRender` | 自定义标签渲染函数           | `(params: FormItemCallbackParams) => RenderType`                                       | -        |
| `customLabelSlot`   | 自定义标签插槽               | `string`                                                                               | -        |
| `customRender`      | 自定义表单项渲染函数         | `(params: FormItemCallbackParams) => RenderType`                                       | -        |
| `customSlot`        | 自定义表单项插槽名称         | `string`                                                                               | -        |
| `component`         | 表单项组件类型               | `ComponentType`                                                                        | -        |
| `componentProps`    | 表单项组件属性               | `ComponentProps \| ((params: FormItemComponentPropsCallbackParams) => ComponentProps)` | -        |
| `componentSlots`    | 表单项组件插槽               | `Recordable`                                                                           | -        |
| `required`          | 是否必填                     | `boolean`                                                                              | -        |
| `min`               | 最小值                       | `number`                                                                               | -        |
| `max`               | 最大值                       | `number`                                                                               | -        |
| `noWhitespace`      | 是否禁止空白字符             | `boolean`                                                                              | -        |
| `rules`             | 表单项校验规则               | `FormItemRule[]`                                                                       | -        |
| `title`             | 分组表单项标题               | `string`                                                                               | -        |
| `titleProps`        | 分组表单项标题属性           | `Recordable`                                                                           | -        |
| `titleTooltip`      | 分组表单项标题提示信息       | `string`                                                                               | -        |
| `customTitleRender` | 自定义分组表单项标题渲染函数 | `(params: FormItemCallbackParams) => RenderType`                                       | -        |
| `customTitleSlot`   | 自定义分组表单项标题插槽     | `string`                                                                               | -        |
