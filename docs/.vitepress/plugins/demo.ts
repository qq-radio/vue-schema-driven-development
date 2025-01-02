import type { MarkdownRenderer } from 'vitepress'
import mdContainer from 'markdown-it-container'
import path from 'path'
import fs from 'fs'

const docRoot = path.resolve(__dirname, '../../')

export const demoPlugin = (md: MarkdownRenderer) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const sourceFileToken = tokens[idx + 2]

        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(path.resolve(docRoot, 'examples', `${sourceFile}.vue`), 'utf-8')
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)

        return `<CodeDemo  source="${encodeURIComponent(
          source,
        )}" path="${sourceFile}" raw-source="${encodeURIComponent(source)}" >`
      } else {
        return '</CodeDemo>'
      }
    },
  })
}
