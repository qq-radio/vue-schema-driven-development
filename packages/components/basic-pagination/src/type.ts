export interface BasicPaginationProps {
  modelValue?: Page
}

export interface Page {
  currentPage: number
  pageSize: number
  total: number
}
