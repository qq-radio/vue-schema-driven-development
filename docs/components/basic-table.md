# BasicTable 表格

## 简介

- 通过`schemas`配置渲染表格

:::danger
为了方便模拟数据的统一维护，该页面的所有表格数据或`api`请求均来自`docs/mocks/mock-user.ts`文件，因此当您复制代码时，需同`mock-user.ts`文件一起复制，才能保证demo的正常运行
:::

## 基本使用

您可以传入`schemas`数组快速渲染表格，以下是最常见的表格使用示例

:::demo
basic-table/basic
:::

## 搜索

您可以通过`searchConfig`设置表格的搜索项

:::demo
basic-table/search
:::

## 搜索 - 透传属性与插槽

表格的搜索采用`BasicForm`渲染，每一项搜索配置`searchConfig`相当于`BasicForm`里的一个表单项配置，此外您还可以通过`searchProps`透传`BasicForm`属性

:::demo
basic-table/search-passing-props-slots
:::

## 搜索 - 自动构建搜索配置

您可以在`searchConfig`里配置搜索表单项的完整属性，若有以下情况也可省略部分配置

- 若搜索项的`label`、`prop`与表格里的`label`、`prop`一致，可直接省略
- 若搜索项的`label`、`prop`与表格里的`label`、`prop`一致，且`component=input`，则可以直接使用`searchable: true`替代`searchConfig`配置

:::demo
basic-table/search-searchable
:::

## 搜索 - 自定义搜索配置

`BasicTable`更推荐您在表格列配置里添加`searchConfig`当做表单的搜索配置，原因：

- 使数据、业务逻辑更加集中
- 当字段名称一致，可以省略部分配置

当然，若有特殊情况，您也可以自定义`searchSchemas`，当配置`searchSchemas`时，表格列里的每一项`searchConfig`均不生效

:::demo
basic-table/search-schemas
:::

## 显示或隐藏

您可以通过`visible`控制列的显示或隐藏

:::demo
basic-table/visible
:::

## 文字提示

您可以通过`headerTooltip`设置列的表头提示语

:::demo
basic-table/tooltip
:::

## 操作栏按钮组

您可以通过配置`operations`渲染表格操作栏按钮组，且可通过`operationProps`传入按钮组自定义属性

:::note
操作栏按钮组`operations`与操作列按钮组`actions`均采用`BasicButtonGroup`渲染，更多用法请参考[BasicButtonGroup](/components/basic-button-group)
:::

:::demo
basic-table/operations
:::

## 操作列按钮组

您可以通过配置`actions`渲染表格操作列按钮组，且可通过`actionProps`传入按钮组自定义属性

:::note
操作列按钮组`actions`与操作栏按钮组`operations`均采用`BasicButtonGroup`渲染，更多用法请参考[BasicButtonGroup](/components/basic-button-group)
:::

:::demo
basic-table/actions
:::

## 格式化数据

您可以传入`formatter`格式化单元格数据，`formatter`的属性名称与`el-table`的`formatter`属性名称保持一致，但是函数的回调参数区别如下：

- `el-table`的回调参数为`(row: any, column: any, cellValue: any, index: number)`
- `BasicTable`的回调参数为`(params:{ row: any, column: any, value: any, rowIndex: number, schema: TableSchema})`

重写回调参数的目的有3点：

- 注入当前列配置`schema`
- 用对象解构替换数组解构，避免数组解构时存在未使用的变量
- 使用更具语义化的变量名称

:::demo
basic-table/formatter
:::

## 自定义渲染列 - `customRender`/`tsx`

您可以通过`customRender`/`tsx`自定义渲染列

:::demo
basic-table/custom-render-tsx
:::

## 自定义渲染列 - `customRender`/`h`

您可以通过`customRender`/`h`自定义渲染列

:::demo
basic-table/custom-render-h
:::

## 自定义渲染列 - `customSlot`

您可以通过`customSlot`自定义渲染列

:::demo
basic-table/custom-slot
:::

## 自定义渲染列 - `display`

您可以指定`display`类型来自定义渲染列

:::note
更多的`display`用法请参考[BasicDisplay](/components/basic-display)
:::

:::demo
basic-table/custom-display
:::

## 自定义渲染表头 - `customHeaderRender`/`tsx`

您可以通过`customHeaderRender`/`tsx`自定义渲染表头

:::demo
basic-table/custom-header-tsx
:::

## 自定义渲染表头 - `customHeaderRender`/`h`

您可以通过`customHeaderRender`/`h`自定义渲染表头

:::demo
basic-table/custom-header-h
:::

## 自定义渲染表头 - `customHeaderSlot`

您可以通过`customHeaderSlot`自定义渲染表头

:::demo
basic-table/custom-header-slot
:::

## 分页器

分页器参数键名默认使用`el-pagination`的`currentPage`、`pageSize`，您也可以使用`currentPageField`、`pageSizeField`指定新的键名

:::demo
basic-table/page-field
:::

## 单选

若需要使用表格单选，需传入`hasRadioSelection`，且可通过`radioSelectionColumnProps`自定义单选列属性

:::demo
basic-table/radio-selection
:::

## 多选

若需要使用表格多选，需传入`hasSelection`，且可通过`selectionColumnProps`自定义多选列属性

:::demo
basic-table/selection
:::

## 序号

若需要显示序号列，需传入`hasIndex`，且可通过`indexColumnProps`自定义序号列属性

:::demo
basic-table/index
:::

## 展开

若需要显示展开列，需传入`hasExpand`，且可通过`expandColumnProps`自定义展开列属性

:::demo
basic-table/expand
:::

## BasicTable Attributes

| 属性名                      | 说明                                                                    | 类型                                                                                              | 默认值  | 是否必填 |
| --------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------- | -------- |
| `schemas`                   | 表格列的配置数组                                                        | [TableSchema](#tableschema)                                                                       | -       | 是       |
| `request`                   | 请求表格数据的函数                                                      | `(params: Recordable) => Promise<{ records: Array<Recordable>, total: number }>`                  | -       | -        |
| `searchParams`              | 搜索参数                                                                | `Recordable`                                                                                      | -       | -        |
| `extraParams`               | 额外的请求参数                                                          | `Recordable`                                                                                      | -       | -        |
| `paramsFormatter`           | 搜索参数格式化函数                                                      | `(params: Recordable) => Recordable`                                                              | -       | -        |
| `searchSchemas`             | 搜索表单的配置数组                                                      | [FormSchema](/components/basic-form#formschema)[]                                                 | -       | -        |
| `searchProps`               | 搜索表单的属性 [BasicForm](/components/basic-form#basicform-attributes) | `Partial<BasicFormProps>`                                                                         | -       | -        |
| `immediate`                 | 是否立即请求数据                                                        | `boolean`                                                                                         | `true`  | -        |
| `loading`                   | 是否显示加载状态                                                        | `boolean`                                                                                         | `false` | -        |
| `data`                      | 表格数据                                                                | `Array<Recordable>`                                                                               | -       | -        |
| `dataFormatter`             | 表格数据格式化函数                                                      | `(tableDatas: Array<Recordable>) => Array<Recordable>`                                            | -       | -        |
| `showPagination`            | 是否显示分页                                                            | `boolean`                                                                                         | `true`  | -        |
| `paginationProps`           | 分页组件的属性                                                          | `Partial<PaginationProps>`                                                                        | -       | -        |
| `currentPageField`          | 当前页字段名                                                            | `string`                                                                                          | -       | -        |
| `pageSizeField`             | 每页条数字段名                                                          | `string`                                                                                          | -       | -        |
| `operations`                | 操作按钮配置数组                                                        | `Button[]`                                                                                        | -       | -        |
| `operationProps`            | 操作按钮组的属性                                                        | `Pick<BasicButtonGroupProps, 'confirmType' \| 'showNumber' \| 'callbackParams' \| 'buttonProps'>` | -       | -        |
| `rowKey`                    | 行数据的唯一标识字段名                                                  | `string`                                                                                          | `id`    | -        |
| `hasRadioSelection`         | 是否显示单选列                                                          | `boolean`                                                                                         | `false` | -        |
| `radioSelectionColumnProps` | 单选列的属性                                                            | `Partial<TableColumnCtx<any>>`                                                                    | -       | -        |
| `hasSelection`              | 是否显示多选列                                                          | `boolean`                                                                                         | `false` | -        |
| `selectionColumnProps`      | 多选列的属性                                                            | `Partial<TableColumnCtx<any>>`                                                                    | -       | -        |
| `hasIndex`                  | 是否显示序号列                                                          | `boolean`                                                                                         | `false` | -        |
| `indexColumnProps`          | 序号列的属性                                                            | `Partial<TableColumnCtx<any>>`                                                                    | -       | -        |
| `hasExpand`                 | 是否显示展开列                                                          | `boolean`                                                                                         | `false` | -        |
| `expandColumnProps`         | 展开列的属性                                                            | `Partial<TableColumnCtx<any>>`                                                                    | -       | -        |
| `actions`                   | 操作列按钮配置数组                                                      | `Button[]`                                                                                        | -       | -        |
| `actionColumnProps`         | 操作列的属性                                                            | `Partial<TableColumnCtx<any>>`                                                                    | -       | -        |
| `actionProps`               | 操作按钮组的属性                                                        | `Pick<BasicButtonGroupProps, 'confirmType' \| 'showNumber' \| 'callbackParams' \| 'buttonProps'>` | -       | -        |

## BasicTable Events

| 事件名                 | 说明                       | 类型                                      |
| ---------------------- | -------------------------- | ----------------------------------------- |
| `register`             | 注册表格方法               | `(methods: TableMethods) => void`         |
| `search`               | 搜索事件，返回搜索参数     | `(params: Recordable) => void`            |
| `search-params-change` | 搜索参数变化事件           | `(params: Recordable) => void`            |
| `update:searchParams`  | 更新搜索参数事件           | `(params: Recordable) => void`            |
| `reset`                | 重置事件，返回搜索参数     | `(params: Recordable) => void`            |
| `pagination-change`    | 分页变化事件               | `(page: Page) => void`                    |
| `request-success`      | 请求成功事件，返回表格数据 | `(tableDatas: Array<Recordable>) => void` |
| `request-error`        | 请求失败事件，返回错误信息 | `(error: unknown) => void`                |
| `request-complete`     | 请求完成事件，返回表格数据 | `() => void`                              |

## BasicTable Slots

| 插槽名             | 说明               | 插槽参数类型                        |
| ------------------ | ------------------ | ----------------------------------- |
| `default`          | 表格默认插槽       | `{ row, rowIndex, column, schema }` |
| `operation-before` | 操作按钮组前的插槽 | -                                   |
| `operation-after`  | 操作按钮组后的插槽 | -                                   |
| `expand`           | 展开行的插槽       | `{ row, rowIndex, expanded }`       |
| `append`           | 表格追加内容的插槽 | -                                   |
| `empty`            | 表格空数据时的插槽 | -                                   |

## BasicTable Exposes

| 方法名                      | 说明             | 类型                                           |
| --------------------------- | ---------------- | ---------------------------------------------- |
| `setTableProps`             | 设置表格属性     | `(props: Partial<BasicTableProps>) => void`    |
| `getTableDatas`             | 获取表格数据     | `() => Recordable[]`                           |
| `getSearchParams`           | 获取搜索参数     | `() => Recordable`                             |
| `getRequestParams`          | 获取请求参数     | `() => Recordable`                             |
| `reQuery`                   | 重新查询         | `() => void`                                   |
| `getSelectedValues`         | 获取多选选中的值 | `() => Array<number \| string>`                |
| `getSelectedRows`           | 获取多选选中的行 | `() => Array<Recordable>`                      |
| `checkHasSelection`         | 检查是否有多选列 | `() => boolean`                                |
| `validateHasSelection`      | 验证是否有多选列 | `() => void`                                   |
| `getRadioSelectedValue`     | 获取单选选中的值 | `() => string \| number \| boolean`            |
| `setRadioSelectedValue`     | 设置单选选中的值 | `(value: string \| number \| boolean) => void` |
| `getRadioSelectedRow`       | 获取单选选中的行 | `() => Recordable`                             |
| `setRadioSelectedRow`       | 设置单选选中的行 | `(row: Recordable) => void`                    |
| `clearRadioSelected`        | 清除单选选中的行 | `() => void`                                   |
| `checkHasRadioSelection`    | 检查是否有单选列 | `() => boolean`                                |
| `validateHasRadioSelection` | 验证是否有单选列 | `() => void`                                   |

## TableSchema

| 属性名               | 说明                 | 类型                                                |
| -------------------- | -------------------- | --------------------------------------------------- |
| `prop`               | 列字段名             | `string`                                            |
| `label`              | 列标题               | `string`                                            |
| `width`              | 列宽度               | `string \| number`                                  |
| `minWidth`           | 列最小宽度           | `string \| number`                                  |
| `fixed`              | 列固定位置           | `'left' \| 'right' \| boolean`                      |
| `visible`            | 列是否可见           | `boolean \| Ref<boolean> \| ComputedRef<boolean>`   |
| `formatter`          | 单元格格式化函数     | `(params: TableCellCallbackParams) => any`          |
| `columnProps`        | 列的属性             | `Partial<TableColumnCtx<any>>`                      |
| `searchable`         | 是否可搜索           | `boolean`                                           |
| `searchConfig`       | 搜索配置             | `FormSchema`                                        |
| `headerTooltip`      | 表头提示信息         | `string`                                            |
| `customHeaderRender` | 自定义表头渲染函数   | `(params: TableHeaderCallbackParams) => RenderType` |
| `customHeaderSlot`   | 自定义表头插槽       | `string`                                            |
| `customRender`       | 自定义单元格渲染函数 | `(params: TableCellCallbackParams) => RenderType`   |
| `customSlot`         | 自定义单元格插槽名称 | `string`                                            |
| `display`            | 单元格显示类型       | `DisplayType`                                       |
| `displayProps`       | 显示组件透传属性     | `Recordable`                                        |
| `displaySlots`       | 显示组件透传插槽     | `Recordable`                                        |
