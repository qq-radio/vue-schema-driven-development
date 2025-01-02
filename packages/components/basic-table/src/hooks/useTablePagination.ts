import type { BasicTableProps, BasicTableEmits } from '../types'
import type { Page } from '@center/components/basic-pagination'

import { ref, computed, unref } from 'vue'
import { merge } from 'lodash'

type Props = Pick<BasicTableProps, 'paginationProps'>

type Context = {
  emit: BasicTableEmits
}

export type UseTablePaginationReturn = ReturnType<typeof useTablePagination>

export function useTablePagination(props: Props, context: Context) {
  const { emit } = context

  const getPaginationProps = computed(() => {
    return merge({}, props.paginationProps)
  })

  const page = ref<Page>({
    currentPage: 1,
    pageSize: 10,
    total: 0,
  })

  function setPagination(p: Partial<Page>) {
    page.value = merge(unref(page), p)
    emit('pagination-change', page.value)
  }

  return {
    page,
    getPaginationProps,
    setPagination,
  }
}
