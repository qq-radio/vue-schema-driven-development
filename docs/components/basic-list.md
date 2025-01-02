# BasicList 列表

## 简介

- 以有序或无序列表方式展示嵌套层级数据

## 无序列表

默认以无序列表`<ul/>`的方式展示数据

:::demo
basic-list/unorder-list
:::

## 有序列表

若希望以有序列表`<ol/>`的方式展示数据，传入`type='ol'`

:::demo
basic-list/order-list
:::

## 格式化各个元素

您可以传入`formatter`格式化各个元素，组件初始化时会map数组里的每个元素后执行`formatter`函数，得到的结果作为各项的label值进行展示

:::demo
basic-list/formatter
:::
