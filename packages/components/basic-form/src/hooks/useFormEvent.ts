import type { BasicFormProps, BasicFormEmits, FormSchema } from '../types'

import { ErrorMessages, BasicComponentError } from '@center/components/error'

import { computed, ComputedRef, onMounted, ref, unref, watch } from 'vue'
import { isObject, isString, cloneDeep, uniqBy, merge, isArray } from 'lodash'

type Props = ComputedRef<Pick<BasicFormProps, 'schemas' | 'modelValue'>>

type Context = {
  emit: BasicFormEmits
}

export type UseFormEventReturn = ReturnType<typeof useFormEvent>

export function useFormEvent(getProps: Props, context: Context) {
  const { emit } = context

  const schemas = computed(() => getProps.value.schemas)
  const modelValue = computed(() => getProps.value.modelValue)

  const formSchemas = ref<FormSchema[]>([])
  const formModel = ref<Recordable>({})
  const hiddenFields = new Map<string, boolean>()

  watch(
    () => schemas.value,
    () => {
      initSchemas()
      initModel()
    },
    {
      deep: true,
      immediate: true,
    },
  )

  watch(
    () => modelValue.value,
    () => {
      setTimeout(() => {
        setModel()
      }, 0)
    },
    {
      deep: true,
      immediate: true,
    },
  )

  function initSchemas() {
    if (isArray(schemas.value)) {
      formSchemas.value = filterSchemas(sortSchemas(schemas.value))
    }
  }

  function initModel() {
    formModel.value = {
      ...getDefaultValue(),
      ...modelValue.value,
    }
  }

  function setModel() {
    formModel.value = modelValue.value || {}
  }

  function getDefaultValue() {
    return cloneDeep(Object.fromEntries(formSchemas.value.map((s) => [s.prop, s.defaultValue])))
  }

  function getSchema(prop: string) {
    return formSchemas.value.find((item) => item.prop === prop)
  }

  function getSchemaIndex(prop: string) {
    return formSchemas.value.findIndex((item) => item.prop === prop)
  }

  function validatePropLength<T>(array: T[]) {
    if (!array.length) {
      throw new BasicComponentError(ErrorMessages.FORM_SCHEMA_PROP_REQUIRED)
    }
    return true
  }

  function updateSchema(schemas: Arrayable<PartialRequired<FormSchema, 'prop'>>) {
    const waitUpdateSchemas = processSchemas(schemas)

    validatePropLength(waitUpdateSchemas)

    waitUpdateSchemas.forEach((schema) => {
      if (!schema.prop) {
        return
      }

      const updateIndex = getSchemaIndex(schema.prop)

      if (updateIndex === -1) {
        return
      }

      const oldSchema = unref(formSchemas)[updateIndex]

      if (oldSchema) {
        const newSchema = merge(oldSchema, schema)
        _updateSchemaItemByIndex(updateIndex, newSchema)
      }
    })
  }

  function _updateSchemaItemByIndex(index: number, schema: FormSchema) {
    formSchemas.value.splice(index, 1, schema)
  }

  function appendSchema(schemas: Arrayable<FormSchema>, previousProp?: string) {
    const waitAppendSchemas = processSchemas(schemas)

    validatePropLength(waitAppendSchemas)

    waitAppendSchemas.forEach((schema) => {
      if (!schema.prop) {
        return
      }

      const isExist = getSchema(schema.prop)
      if (isExist) {
        return
      }

      const previousIndex = previousProp ? getSchemaIndex(previousProp) : -1
      _appendSchemaItemByIndex(previousIndex + 1, schema)
    })
  }

  function _appendSchemaItemByIndex(index: number, schema: FormSchema) {
    formSchemas.value.splice(index, 0, schema)
  }

  function removeSchema(prop: Arrayable<string>) {
    const propList = isString(prop) ? [prop] : prop

    validatePropLength(propList)

    propList.forEach((prop) => {
      const removeIndex = getSchemaIndex(prop)
      if (removeIndex === -1) {
        return
      }
      _removeSchemaItemByIndex(removeIndex)
    })
  }

  function _removeSchemaItemByIndex(index: number) {
    formSchemas.value.splice(index, 1)
  }

  function getFieldValue(field: string) {
    return formModel.value[field]
  }

  function getFieldsValue() {
    return formModel.value
  }

  function setFieldsValue(values: Recordable) {
    if (!isObject(values)) {
      return
    }

    for (const [field, value] of Object.entries(values)) {
      formModel.value[field] = value
    }

    emitUpdateModel()
  }

  function setHiddenFields(prop: string, visible: boolean) {
    visible ? hiddenFields.delete(prop) : hiddenFields.set(prop, true)
  }

  function getSubmitValues() {
    return Object.fromEntries(
      Object.entries(formModel.value).filter(([key]) => !hiddenFields.has(key)),
    )
  }

  function emitUpdateModel() {
    emit('update:modelValue', formModel.value)
  }

  onMounted(() => {
    emitUpdateModel()
  })

  return {
    formSchemas,
    formModel,

    updateSchema,
    removeSchema,
    appendSchema,

    getFieldValue,
    getFieldsValue,
    setFieldsValue,

    setHiddenFields,
    getSubmitValues,

    emitUpdateModel,
  }
}

function filterSchemas(schemas: FormSchema[]) {
  return schemas.filter((schemaItem) => schemaItem.prop || schemaItem.title)
}

function sortSchemas(schemas: FormSchema[]) {
  return schemas.sort((a, b) => (a.sort || 0) - (b.sort || 0))
}

function processSchemas<T>(schemas: Arrayable<T>) {
  let processedSchemas: T[] = []

  if (isObject(schemas)) {
    processedSchemas.push(schemas as T)
  }

  if (isArray(schemas)) {
    processedSchemas = [...schemas]
  }

  return uniqBy(filterSchemas(processedSchemas as FormSchema[]), 'prop')
}
