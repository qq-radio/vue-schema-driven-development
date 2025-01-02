import { Slots, VNode } from 'vue'
import { isFunction } from 'lodash'

type UseCustomRender = (context: { render?: (params: any) => VNode; slots?: Slots }) => {
  renderItem: RenderItem
}

type RenderItem = (
  item: {
    customRender?: (...arg: any[]) => RenderType
    customSlot?: string
  },
  callbackParams?: { [key: string]: any },
) => () => RenderType

export const useCustomRender: UseCustomRender = (context) => {
  const { render, slots } = context

  const renderItem: RenderItem = (item, callbackParams = {}) => {
    // console.log("呼叫 useCustomRender renderItem :", item);

    const customRender = item.customRender
    const customSlot = slots && item.customSlot && slots[item.customSlot]

    const templateRender = render
    const templateSlot = slots && slots.default

    try {
      if (isFunction(customRender)) {
        return () => customRender(callbackParams)
      } else if (customSlot) {
        return () => customSlot(callbackParams)
      } else if (isFunction(templateRender)) {
        return () => templateRender(callbackParams)
      } else if (templateSlot) {
        return () => templateSlot(callbackParams)
      }
    } catch (error) {
      console.error('UseCustomRender renderItem error:', error)
    }
    return () => ''
  }

  return {
    renderItem,
  }
}
