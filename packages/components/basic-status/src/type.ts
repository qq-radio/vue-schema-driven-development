export type StatusType = 'primary' | 'success' | 'info' | 'warning' | 'danger'

export interface BasicStatusProps {
  text?: string
  type?: StatusType
  color?: string
}
