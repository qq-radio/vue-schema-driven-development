import { useNamespace } from 'element-plus'
import { ref } from 'vue'

const basic = ref('basic')

export const useBasicNamespace = (name) => useNamespace(name, basic)
