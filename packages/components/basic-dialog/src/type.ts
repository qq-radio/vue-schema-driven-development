import type { Ref } from 'vue'

export interface BasicDialogProps {
  modelValue?: boolean
  title?: string
  width?: string | number
  height?: string | number
  loading?: boolean
  disabled?: boolean | Ref<boolean>
  hasFooter?: boolean
  hasDebounce?: boolean
  closeText?: string
  cancelText?: string
  confirmText?: string
}

export interface DialogMethods {
  setDialogProps: (props: Partial<BasicDialogProps>) => void
  openDialog: () => void
  closeDialog: () => void
  setDialogTitle: (value: string) => void
  setConfirmLoading: (loading: boolean) => void
}

type UseDialogReturn = [(instance: DialogMethods) => void, DialogMethods]

export interface UseDialog {
  (props?: Partial<BasicDialogProps>): UseDialogReturn
}
