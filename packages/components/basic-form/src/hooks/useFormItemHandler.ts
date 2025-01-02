import type { EnhancedFormSchema, FormItemEmits } from '../types'

import { ref } from 'vue'
import { isArray } from 'lodash'

type Context = { emit: FormItemEmits }

export type UseFormItemHandlerReturn = ReturnType<typeof useFormItemHandler>

export const useFormItemHandler = (context: Context) => {
  const { emit } = context

  const eventHandlers = ref([
    {
      condition: (schema: EnhancedFormSchema) => schema.component === 'time-picker',
      handler: (values: unknown[], schema: EnhancedFormSchema) => {
        onTimeRangeChange(values, schema)
      },
    },
    {
      condition: (schema: EnhancedFormSchema) =>
        schema.component === 'date-picker' && schema.componentProps?.type === 'daterange',
      handler: (values: unknown[], schema: EnhancedFormSchema) => {
        onTimeRangeChange(values, schema)
      },
    },
  ])

  const handleChange = (values: unknown[], schema: EnhancedFormSchema) => {
    for (const { condition, handler } of eventHandlers.value) {
      if (condition(schema)) {
        handler(values, schema)
        break
      }
    }
  }

  function onTimeRangeChange(values: any[], schema: EnhancedFormSchema) {
    const { componentProps: { timeRangeMapFields } = {} } = schema

    if (!isArray(timeRangeMapFields)) {
      return
    }

    const [startDate, endDate] = timeRangeMapFields
    const value = values[0] || []

    if (!value && !startDate && !endDate) {
      return
    }

    emit('field-change', {
      [startDate]: value[0],
      [endDate]: value[1],
    })
  }

  return { handleChange }
}
