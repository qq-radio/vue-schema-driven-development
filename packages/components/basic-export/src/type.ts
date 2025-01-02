export type Params = Recordable | (() => Recordable)

export interface ExportConfig {
  url: string
  params?: Params
  beforeExport?: (params: Recordable) => boolean
  fileName?: string
}

export interface BasicExportProps {
  config: ExportConfig
}
