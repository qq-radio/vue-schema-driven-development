import type { BasicFormProps, FormMethods, FormSchema } from '../types'
import type { FormValidateCallback, FormItemProp } from 'element-plus'

import { ErrorMessages, BasicComponentError } from '@center/components/error'

import { ref, unref, watch, onUnmounted } from 'vue'

type Props = Partial<BasicFormProps>

export type UseFormReturn = [(instance: FormMethods) => void, FormMethods]

export const useForm = (props: Props): UseFormReturn => {
  const instanceRef = ref<Nullable<FormMethods>>(null)

  function getInstance() {
    const instance = unref(instanceRef)
    if (!instance) {
      throw new BasicComponentError(ErrorMessages.FORM_INSTANCE_NOT_OBTAINED)
    }
    return instance
  }

  function register(instance: FormMethods) {
    onUnmounted(() => {
      instanceRef.value = null
    })

    instanceRef.value = instance

    watch(
      () => props,
      () => {
        const propsValue = unref(props)
        if (propsValue) {
          getInstance().setFormProps(propsValue)
        }
      },
      {
        immediate: true,
        deep: true,
      },
    )
  }

  const methods: FormMethods = {
    setFormProps: (props: Partial<BasicFormProps>) => {
      getInstance().setFormProps(props)
    },
    reset: () => {
      getInstance().reset()
    },
    submit: () => {
      return getInstance().submit()
    },

    /**
     * useFormEvent
     */
    updateSchema: (schemas: Arrayable<PartialRequired<FormSchema, 'prop'>>) => {
      getInstance().updateSchema(schemas)
    },
    removeSchema: (prop: Arrayable<string>) => {
      getInstance().removeSchema(prop)
    },
    appendSchema: (schemas: Arrayable<FormSchema>, previousProp?: string) => {
      getInstance().appendSchema(schemas, previousProp)
    },

    getFieldValue: (field: string) => {
      return getInstance().getFieldValue(field)
    },
    getFieldsValue: () => {
      return getInstance().getFieldsValue()
    },
    setFieldsValue: (values: Recordable) => {
      getInstance().setFieldsValue(values)
    },

    /**
     * useFormSelf
     */
    validate: (callback?: FormValidateCallback) => {
      return getInstance().validate(callback)
    },
    validateField: (props?: Arrayable<FormItemProp>, callback?: FormValidateCallback) => {
      return getInstance().validateField(props, callback)
    },
    resetFields: (props?: Arrayable<FormItemProp>) => {
      getInstance().resetFields(props)
    },
    scrollToField: (prop: FormItemProp) => {
      getInstance().scrollToField(prop)
    },
    clearValidate: (props?: Arrayable<FormItemProp>) => {
      getInstance().clearValidate(props)
    },
  }

  return [register, methods]
}
