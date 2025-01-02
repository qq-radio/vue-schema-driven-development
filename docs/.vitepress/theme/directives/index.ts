import type { App } from 'vue'

import { copyDirective } from './copy'

const registerDirectives = (app: App) => {
  app.directive('copy', copyDirective)
}

export default registerDirectives
