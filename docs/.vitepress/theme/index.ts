import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin/dist/highlightjs-vue.esm.min.js'

import CodeDemo from './components/CodeDemo.vue'
import registerDirectives from './directives/index'
import './styles/index.scss'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(ElementPlus, {
      locale: { ...zhCn },
    })

    app.component('Highlightjs', hljsVuePlugin.component)

    app.component('CodeDemo', CodeDemo)

    registerDirectives(app)
  },
}
