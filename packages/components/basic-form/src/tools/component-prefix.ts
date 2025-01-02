import type { ComponentType } from '../types'

function getPrefix(component: ComponentType) {
  let prefix
  switch (component) {
    case 'input':
    case 'input-number':
    case 'input-number-range':
    case 'textarea':
      prefix = '请输入'
      break
    case 'switch':
    case 'radio-group':
    case 'checkbox-group':
    case 'select':
    case 'tree-select':
    case 'date-picker':
    case 'time-picker':
      prefix = '请选择'
      break
    default:
      prefix = '请输入'
      break
  }

  return prefix
}

export { getPrefix }
