# BasicButtonGroup 按钮组

## 基本使用

您可以传入数组渲染一组按钮，按钮组采用`el-button`循环渲染，且默认属性为`type=primary`

:::demo
basic-button-group/basic
:::

## 透传属性

您可以通过`buttonProps`传递希望自定义的按钮属性，`buttonProps`会作用于每个按钮。若需要单独为某个按钮设置特定的属性，单独为其传递`props`即可，`props`优先级高于`buttonProps`

:::demo
basic-button-group/passing-props
:::

## 按钮二次确认

若按钮操作需要二次确认，只需传入`onConfirm`即可，二次确认交互方式有2种，分别为消息弹出框`message-box`和气泡确认框`pop-confirm`，默认为`message-box`

:::demo
basic-button-group/message-box
:::

若您希望二次确认以气泡确认框展示，`confirmType`传入`pop-confirm`

:::demo
basic-button-group/pop-confirm
:::

## 超过时隐藏

若您希望按钮超过一定数量时隐藏，可传入`showNumber`。按钮数量超过`showNumber`时自动隐藏，点击`更多`可展示全部按钮

:::demo
basic-button-group/show-number
:::

:::demo
basic-button-group/show-number-with-link
:::

## 禁用与提示

您可以通过`disabled`设置按钮是否禁用，且可通过`disabledReason`设置禁用原因提示文字

:::demo
basic-button-group/disabled
:::

## 权限控制

您可以传入`permission`进行按钮权限控制

:::demo
basic-button-group/permission
:::

## 特殊`type`

`BasicButtonGroup`内置了导入和导出按钮，您只需设置`type=import`、`type=export`，并传入相应的配置即可

:::demo
basic-button-group/type
:::

## BasicButtonGroup Attributes

| 属性名           | 说明                                                                                                     | 类型                                                                                                | 默认值                                               | 是否必填 |
| ---------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------- |
| `confirmType`    | 确认框类型                                                                                               | `'message-box'` \| `'pop-confirm'`                                                                  | `'message-box'`                                      | -        |
| `showNumber`     | 显示按钮数量                                                                                             | `number`                                                                                            | -                                                    | -        |
| `callbackParams` | 回调函数参数                                                                                             | `Recordable`                                                                                        | -                                                    | -        |
| `buttonProps`    | [el-button](https://element-plus.org/zh-CN/component/button.html#button-%E5%B1%9E%E6%80%A7) 按钮透传属性 | `Recordable`                                                                                        | `{ type: 'primary', size: 'default', round: false }` | -        |
| `buttons`        | 按钮配置列表                                                                                             | ([DefaultButton](#defaultbutton) \|[ImportButton](#importbutton) \|[ExportButton](#exportbutton))[] | -                                                    | 是       |

## DefaultButton

| 属性名           | 说明                                                                                                     | 类型                                                        | 默认值      | 是否必填 |
| ---------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------- | -------- |
| `type`           | 按钮类型，默认为默认按钮                                                                                 | `'default'`                                                 | `'default'` | 是       |
| `text`           | 按钮显示文本或动态生成文本的回调函数                                                                     | `string` \| `(params: ButtonCallbackParams<T>) => string`   | -           | 是       |
| `permission`     | 按钮权限标识                                                                                             | `string`                                                    | -           | -        |
| `show`           | 是否显示按钮                                                                                             | `boolean` \| `(params: ButtonCallbackParams<T>) => boolean` | `true`      | -        |
| `disabled`       | 是否禁用按钮                                                                                             | `boolean` \| `Ref<boolean>` \| `ComputedRef<boolean>`       | `false`     | -        |
| `disabledReason` | 禁用提示文字                                                                                             | `string`                                                    | -           | -        |
| `message`        | 确认框提示信息                                                                                           | `string`                                                    | -           | -        |
| `props`          | [el-button](https://element-plus.org/zh-CN/component/button.html#button-%E5%B1%9E%E6%80%A7) 按钮透传属性 | `Recordable`                                                | -           | -        |
| `onClick`        | 按钮点击事件                                                                                             | `(params: ButtonCallbackParams<T>) => void`                 | -           | -        |
| `onConfirm`      | 确认事件（可选）                                                                                         | `(params: ButtonCallbackParams<T>) => void`                 | -           | -        |
| `onCancel`       | 取消事件（可选）                                                                                         | `(params: ButtonCallbackParams<T>) => void`                 | -           | -        |

## ImportButton

| 属性名  | 说明             | 类型                                                                   | 是否必填 |
| ------- | ---------------- | ---------------------------------------------------------------------- | -------- |
| `type`  | 按钮类型         | `'import'`                                                             | 是       |
| `props` | 导入按钮的配置项 | [`ImportButtonProps`](/components/basic-import#basicimport-attributes) | 是       |

## ExportButton

| 属性名  | 说明             | 类型                                                                   | 是否必填 |
| ------- | ---------------- | ---------------------------------------------------------------------- | -------- |
| `type`  | 按钮类型         | `'export'`                                                             | 是       |
| `props` | 导出按钮的配置项 | [`ExportButtonProps`](/components/basic-export#basicimport-attributes) | 是       |
