import type {
  FormInstance,
  FormItemProp,
  FormValidateCallback,
  FormValidationResult,
} from 'element-plus'
import type { Ref } from 'vue'

import { ErrorMessages, BasicComponentError } from '@center/components/error'

import { unref } from 'vue'

export type UseFormSelfReturn = ReturnType<typeof useFormSelf>

export const useFormSelf = (instance?: Ref<FormInstance>) => {
  function getForm() {
    const form = unref(instance)
    if (!form) {
      throw new BasicComponentError(ErrorMessages.FORM_INSTANCE_NOT_OBTAINED)
    }
    return form
  }

  function validate(callback?: FormValidateCallback) {
    return getForm().validate(callback)
  }

  function validateField(
    props?: Arrayable<FormItemProp>,
    callback?: FormValidateCallback,
  ): FormValidationResult {
    return getForm().validateField(props, callback)
  }

  function resetFields(props?: Arrayable<FormItemProp>) {
    getForm().resetFields(props)
  }

  function scrollToField(prop: FormItemProp) {
    getForm().scrollToField(prop)
  }

  function clearValidate(props?: Arrayable<FormItemProp>) {
    getForm().clearValidate(props)
  }

  return {
    validate,
    validateField,
    resetFields,
    scrollToField,
    clearValidate,
  }
}
