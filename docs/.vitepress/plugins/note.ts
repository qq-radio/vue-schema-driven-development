import type { MarkdownRenderer } from 'vitepress'
import mdContainer from 'markdown-it-container'

export const notePlugin = (md: MarkdownRenderer) => {
  md.use(mdContainer, 'note', {
    validate(params) {
      return !!params.trim().match(/^note\s*(.*)$/)
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^note\s+(.*)$/)
      if (tokens[idx].nesting === 1) {
        const title = m && m[1] ? m[1] : 'NOTE'
        return `<div class="note"><strong>${title}</strong>\n`
      } else {
        return '</div>\n'
      }
    },
  })
}
