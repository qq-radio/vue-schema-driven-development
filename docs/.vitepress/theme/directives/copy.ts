import type { DirectiveBinding } from 'vue'
import { ElMessage } from 'element-plus'

type El = HTMLElement & { $value?: string }

export const copyDirective = {
  mounted(el: El, binding: DirectiveBinding) {
    el.$value = binding.value

    el.onclick = () => {
      if (!el.$value) {
        ElMessage.warning('没有可复制的内容')
        return
      }

      const textarea = document.createElement('textarea')
      textarea.readOnly = true
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      textarea.value = el.$value
      document.body.appendChild(textarea)
      textarea.select()
      const result = document.execCommand('Copy')
      if (result) {
        ElMessage.success('复制成功')
      } else {
        ElMessage.error('复制失败')
      }
      document.body.removeChild(textarea)
    }
  },
  beforeUpdate(el: El, binding: DirectiveBinding) {
    el.$value = binding.value
  },
  unmounted(el: HTMLElement) {
    el.onclick = null
  },
}
