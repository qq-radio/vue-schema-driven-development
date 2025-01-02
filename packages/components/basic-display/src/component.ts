import type { DisplayType as ComponentType } from './type'
import type { Component } from 'vue'

import { ElLink, ElTag, ElProgress, ElAvatar } from 'element-plus'

import { BasicImage } from '@center/components/basic-image'
import { BasicCopy } from '@center/components/basic-copy'
import { BasicStatus } from '@center/components/basic-status'
import { BasicTime } from '@center/components/basic-time'

const componentMap = new Map<ComponentType, Component>()

componentMap.set('link', ElLink)
componentMap.set('tag', ElTag)
componentMap.set('progress', ElProgress)
componentMap.set('avatar', ElAvatar)

componentMap.set('image', BasicImage)
componentMap.set('copy', BasicCopy)
componentMap.set('status', BasicStatus)
componentMap.set('time', BasicTime)

function hasComponent(component: ComponentType) {
  return componentMap.has(component)
}

function getComponent(component: ComponentType): Component {
  return componentMap.get(component) as Component
}

export { hasComponent, getComponent }
