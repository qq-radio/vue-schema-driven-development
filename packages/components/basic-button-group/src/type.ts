import type { TemplateConfig, UploadConfig, ImportConfig } from '@center/components/basic-import'
import type { ExportConfig } from '@center/components/basic-export'

import type { Ref, ComputedRef } from 'vue'

export interface BasicButtonGroupProps<T = Recordable> {
  confirmType?: ConfirmType
  showNumber?: number
  callbackParams?: T
  buttonProps?: Recordable
  buttons: Button<T>[]
}

export type ConfirmType = 'message-box' | 'pop-confirm'

type Params<T> = {
  [K in keyof T]: T[K]
}

export type ButtonCallbackParams<T = Recordable> = {
  button?: Button<T>
} & Params<T>

interface ButtonBase<T = Recordable> {
  text: string | ((params: ButtonCallbackParams<T>) => string)
  permission?: string
  show?: boolean | ((params: ButtonCallbackParams<T>) => boolean)
  disabled?: boolean | Ref<boolean> | ComputedRef<boolean>
  disabledReason?: string
  message?: string
  props?: Recordable
  onClick?: (params: ButtonCallbackParams<T>) => void
  onConfirm?: (params: ButtonCallbackParams<T>) => void
  onCancel?: (params: ButtonCallbackParams<T>) => void
}

interface DefaultButton<T = Recordable> extends ButtonBase<T> {
  type?: 'default'
  props?: Recordable
}

interface ImportButton<T = Recordable> extends ButtonBase<T> {
  type: 'import'
  props: {
    templateConfig: TemplateConfig
    uploadConfig: UploadConfig
    importConfig: ImportConfig
  }
}

interface ExportButton<T = Recordable> extends ButtonBase<T> {
  type: 'export'
  props: {
    config: ExportConfig
  }
}

export type Button<T = Recordable> = DefaultButton<T> | ImportButton<T> | ExportButton<T>
