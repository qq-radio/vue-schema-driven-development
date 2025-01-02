export enum ErrorMessages {
  FORM_INSTANCE_NOT_OBTAINED = '[BasicForm]表单实例尚未创建完成，请确保实例创建成功后再调用组件上的方法',
  FORM_SCHEMA_PROP_REQUIRED = '[BasicForm]表单项配置需传入prop',
  TABLE_INSTANCE_NOT_OBTAINED = '[BasicTable]表格实例尚未创建完成，请确保实例创建成功后再调用组件上的方法',
  DIALOG_INSTANCE_NOT_OBTAINED = '[BasicDialog]弹窗实例尚未创建完成，请确保实例创建成功后再调用组件上的方法',
}

export class BasicComponentError extends Error {
  constructor(message: ErrorMessages) {
    super(message)
    this.name = 'BasicComponentError'
  }
}
