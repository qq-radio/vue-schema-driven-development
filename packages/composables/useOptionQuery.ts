import { ref } from 'vue'
import { isArray, isFunction, get } from 'lodash'
import { mapObjectArrayFields } from '../utils'

type Option = {
  label: string
  value: string | number | boolean
}

type Props<T> = {
  options?: T[]
  api?: () => Promise<any>
  resultField?: string
  labelField?: string
  valueField?: string
  formatter?: (option: any) => any
}

export function useOptionQuery<T>(props: Props<T>) {
  const options = ref<(T & Option)[]>([])

  const init = async () => {
    try {
      if (isArray(props.options)) {
        options.value = normalizeOptions(props.options)
        return
      }

      if (isFunction(props.api)) {
        const result = await props.api()
        options.value = normalizeOptions(result)
      }
    } catch (error) {
      console.error('UseOptionQuery init error:', error)
    }
  }

  const normalizeOptions = (result) => {
    const { resultField, labelField, valueField, formatter } = props

    let list = resultField ? get(result, resultField) : result

    if (!isArray(list)) {
      return []
    }

    if (labelField || valueField) {
      list = mapObjectArrayFields(list, {
        label: labelField ?? 'label',
        value: valueField ?? 'value',
      })
    }

    if (isFunction(formatter)) {
      list = list.map(formatter)
    }

    return list
  }

  const getAllLabels = () => options.value.map((i) => i.label) || []

  const getAllValues = () => options.value.map((i) => i.value) || []

  const findOption = (value) => {
    return options.value.find((option) => option.value === value)
  }

  const findLabel = (value) => findOption(value)?.label

  const findOptions = (values) => options.value.filter((option) => values.includes(option.value))

  const findLabels = (values) => (values?.length ? findOptions(values).map((i) => i.label) : [])

  const findValues = (labels) =>
    labels?.length
      ? options.value.filter((option) => labels.includes(option.label)).map((i) => i.value)
      : []

  return {
    options,
    init,
    getAllLabels,
    getAllValues,
    findOption,
    findLabel,
    findOptions,
    findLabels,
    findValues,
  }
}
