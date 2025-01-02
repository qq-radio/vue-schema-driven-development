export interface TemplateConfig {
  url: string
  params?: Recordable
  fileName?: string
}

export interface UploadConfig {
  url: string
}

export interface UploadResult {
  fileUrl: string
  fileName: string
}

export interface ImportConfig {
  api: <T extends UploadResult>(params: T) => Promise<unknown>
  params?: Recordable
}

export interface BasicImportProps {
  templateConfig: TemplateConfig
  uploadConfig: UploadConfig
  importConfig: ImportConfig
}
