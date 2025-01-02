`BasicForm`除了让您可以通过传入`schemas`数组后快速渲染一组表单项，还希望您能尽可能少写重复性代码，将注意力更集中在业务逻辑上。因此组件内部还进行了以下默认处理：

- `component`若未设置，则默认为`input`
- 普通的`placeholder`无需传递，组件内部根据`label`与`component`自动推导出来
- 若表单项已设置`required: true`，组件内部自动生成必填的rule对象
- 为所有表单项添加`clearable: true`
