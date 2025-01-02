import type { MarkdownRenderer } from 'vitepress'

import { demoPlugin } from './demo'
import { notePlugin } from './note'

export const mdPlugin = (md: MarkdownRenderer) => {
  demoPlugin(md)
  notePlugin(md)
}

export default mdPlugin
