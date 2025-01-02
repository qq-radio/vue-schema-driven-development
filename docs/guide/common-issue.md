## 表单透传属性无法生效

`BasicForm`允许您可以通过`componentProps`传递表单项`component`组件所需的属性，`componentProps`不做严格的类型校验，只要其类型为对象，便直接绑定到对应的`component`组件上，当您设置`componentProps`但未生效时，请先根据以下步骤排查：

- 若`component`为`element-plus`的组件
  - 访问[文档](https://element-plus.org/zh-CN/component/overview.html)查看属性的设置是否正确，有的属性是在高版本的`element-plus`才支持，而本项目的`element-plus`版本为`2.3.5`
  - 访问[在线Playground](https://element-plus.run)，在Playground右上角选择`element-plus`版本为`2.3.5`，`vue`版本为`3.3.0`后，将期望透传的属性`componentProps`通过普通的template props写法传递给对应的`element-plus`组件，验证是否生效（该步骤目的为了排除`element-plus`文档不准确）
- 若`component`为`packages`组件库里的组件
  - 您可以先在内置组件-数据收集里查看对应的组件demo例子

若以上步骤排查后属性透传依然不生效，欢迎提issue或联系我及时修复

## 表单透传插槽无法生效

`BasicForm`允许您可以通过`componentSlots`传递表单项`component`组件所支持的插槽，`componentSlots`不做严格的类型校验，只要其类型为对象，便将插槽透传给对应的`component`组件上，当您设置`componentSlots`但未生效时，请先根据以下步骤排查：

- 若`component`为`element-plus`的组件
  - 访问[文档](https://element-plus.org/zh-CN/component/overview.html)查看插槽的设置是否正确，有的插槽是在高版本的`element-plus`才支持，而本项目的`element-plus`版本为`2.3.5`
  - 访问[在线Playground](https://element-plus.run)，在Playground右上角选择`element-plus`版本为`2.3.5`，`vue`版本为`3.3.0`后，将期望透传的插槽`componentSlots`通过普通的template slots写法传递给对应的`element-plus`组件，验证是否生效（该步骤目的为了排除`element-plus`文档不准确）
- 若`component`为`packages`组件库里的组件
  - 您可以先在内置组件-数据收集里查看对应的组件demo例子

若以上步骤排查后插槽透传依然不生效，欢迎提issue或联系我及时修复
