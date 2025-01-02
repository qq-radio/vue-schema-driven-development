export interface BasicDisplayProps {
  type: DisplayType
  displayProps?: Recordable
  displaySlots?: Recordable
}

export type ElementPlusDisplayType = 'link' | 'tag' | 'progress' | 'avatar'

export type CustomDisplayType = 'image' | 'copy' | 'status' | 'time'

export type DisplayType = ElementPlusDisplayType | CustomDisplayType

export interface DisplaySchema {
  type: DisplayType
  [key: string]: any
}
