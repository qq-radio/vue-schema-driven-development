import type { VNode, Component } from 'vue'

declare global {
  type RenderType = string | VNode | Component

  type Nullable<T> = T | null

  type Recordable<T = any> = {
    [key: string]: T
  }

  type Arrayable<T> = T | T[]

  type PickPartial<T, PartialKeys extends keyof T> = {
    [K in PartialKeys]?: T[K]
  }

  type PickRequired<T, PartialKeys extends keyof T> = {
    [K in PartialKeys]: T[K]
  }

  type RequiredAndOptional<T, RequiredKeys extends keyof T, OptionalKeys extends keyof T> = {
    [K in RequiredKeys]: T[K]
  } & {
    [K in OptionalKeys]?: T[K]
  }

  type PartialRequired<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: T[P]
  }
}
