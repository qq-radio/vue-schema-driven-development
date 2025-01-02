export interface ListItem {
  label: string
  [key: string]: any
}

export type ListType = 'ul' | 'ol'

export interface BasicListProps {
  lists: ListItem[]
  type?: ListType
  childKey?: string
  formatter?: (item: any) => string
}
