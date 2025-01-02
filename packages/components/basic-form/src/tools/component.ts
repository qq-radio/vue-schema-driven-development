import type { ComponentType } from '../types'
import {
  ElInput,
  ElInputNumber,
  ElCheckbox,
  ElDatePicker,
  ElTimePicker,
  ElSwitch,
  ElRate,
  ElSlider,
  ElColorPicker,
} from 'element-plus'
import { BasicInputNumberRange } from '@center/components/basic-input-number-range'
import { BasicRadioGroup } from '@center/components/basic-radio-group'
import { BasicCheckboxGroup } from '@center/components/basic-checkbox-group'
import { BasicSelect } from '@center/components/basic-select'
import { BasicTreeSelect } from '@center/components/basic-tree-select'
import { BasicCascader } from '@center/components/basic-cascader'
import type { Component } from 'vue'

const componentMap = new Map<ComponentType, Component>()

componentMap.set('input', ElInput)
componentMap.set('input-number', ElInputNumber)
componentMap.set('textarea', ElInput)
componentMap.set('checkbox', ElCheckbox)
componentMap.set('date-picker', ElDatePicker)
componentMap.set('time-picker', ElTimePicker)
componentMap.set('switch', ElSwitch)
componentMap.set('rate', ElRate)
componentMap.set('slider', ElSlider)
componentMap.set('color-picker', ElColorPicker)

componentMap.set('input-number-range', BasicInputNumberRange)
componentMap.set('radio-group', BasicRadioGroup)
componentMap.set('checkbox-group', BasicCheckboxGroup)
componentMap.set('select', BasicSelect)
componentMap.set('tree-select', BasicTreeSelect)
componentMap.set('cascader', BasicCascader)

function getComponent(component?: ComponentType): Component {
  return componentMap.get(component || 'input') || ElInput
}

export { getComponent }
