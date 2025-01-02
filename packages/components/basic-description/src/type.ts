import { DisplayType } from '@center/components/basic-display'

import type { MaybeRefOrGetter } from 'vue'

export interface BasicDescriptionProps {
  data: Recordable
  schemas: DescriptionSchema[]
  itemProps?: Recordable
}

export interface DescriptionSchema {
  prop: string
  label: string
  visible?: MaybeRefOrGetter<boolean>
  itemProps?: Recordable

  labelTooltip?: string
  customLabelRender?: () => RenderType
  customLabelSlot?: string

  formatter?: (params: DescriptionItemCallbackParams) => any
  customRender?: (params: DescriptionItemCallbackParams) => RenderType
  customSlot?: string
  display?: DisplayType
  displayProps?: Recordable
  displaySlots?: Recordable
}

export interface DescriptionItemCallbackParams {
  data: Recordable
  value: any
  schema: DescriptionSchema
}
