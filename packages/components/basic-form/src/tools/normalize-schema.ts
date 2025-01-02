import type { EnhancedFormSchema } from '../types'

import { getPrefix } from './component-prefix'

import { merge } from 'lodash'

function addTextareaProps(schemaItem: EnhancedFormSchema) {
  if (schemaItem.component === 'textarea') {
    return merge(
      {
        componentProps: {
          type: 'textarea',
          showWordLimit: true,
        },
      },
      schemaItem,
    )
  }
  return schemaItem
}

function addStyle(schemaItem: EnhancedFormSchema) {
  if (
    schemaItem.component &&
    ['input-number', 'input-number-range', 'select', 'tree-select', 'cascader'].includes(
      schemaItem.component,
    )
  ) {
    return merge(
      {
        componentProps: {
          style: {
            width: '100%',
          },
        },
      },
      schemaItem,
    )
  }
  return schemaItem
}

function addPlaceholder(schemaItem: EnhancedFormSchema) {
  if (
    schemaItem.component === 'time-picker' ||
    (schemaItem.component === 'date-picker' && schemaItem.componentProps?.type === 'daterange')
  ) {
    return merge(
      {
        componentProps: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
        },
      },
      schemaItem,
    )
  }

  if (schemaItem.component === 'input-number-range') {
    return merge(
      {
        componentProps: {
          startPlaceholder: '请输入数字',
          endPlaceholder: '请输入数字',
        },
      },
      schemaItem,
    )
  }

  return merge(
    {
      componentProps: {
        placeholder: getPrefix(schemaItem.component || 'input') + schemaItem.label,
      },
    },
    schemaItem,
  )
}

function addAllowClear(schemaItem: EnhancedFormSchema) {
  return merge(
    {
      componentProps: {
        clearable: true,
      },
    },
    schemaItem,
  )
}

function addTimeFormat(schemaItem: EnhancedFormSchema) {
  if (schemaItem.component === 'date-picker') {
    return merge(
      {
        componentProps: {
          format: 'YYYY-MM-DD',
          valueFormat: 'YYYY-MM-DD',
        },
      },
      schemaItem,
    )
  }

  if (schemaItem.component === 'time-picker') {
    return merge(
      {
        componentProps: {
          format: 'HH:mm:ss',
          valueFormat: 'HH:mm:ss',
        },
      },
      schemaItem,
    )
  }

  return schemaItem
}

function normalizeSchema(schemaItem: EnhancedFormSchema) {
  return [addTextareaProps, addStyle, addPlaceholder, addAllowClear, addTimeFormat].reduce(
    (acc, func) => func(acc),
    schemaItem,
  )
}

export { normalizeSchema }
