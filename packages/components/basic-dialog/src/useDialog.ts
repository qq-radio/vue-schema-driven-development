import type { BasicDialogProps, DialogMethods, UseDialog } from './type'

import { ErrorMessages, BasicComponentError } from '@center/components/error'

import { ref, unref, watch, onUnmounted } from 'vue'

export const useDialog: UseDialog = (props) => {
  const instanceRef = ref<Nullable<DialogMethods>>(null)

  function getInstance() {
    const instance = unref(instanceRef)
    if (!instance) {
      throw new BasicComponentError(ErrorMessages.DIALOG_INSTANCE_NOT_OBTAINED)
    }
    return instance
  }

  function register(instance: DialogMethods) {
    onUnmounted(() => {
      instanceRef.value = null
    })

    instanceRef.value = instance

    watch(
      () => props,
      () => {
        const propsValue = unref(props)
        if (propsValue) {
          getInstance().setDialogProps(propsValue)
        }
      },
      {
        immediate: true,
        deep: true,
      },
    )
  }

  const methods: DialogMethods = {
    setDialogProps: (props: Partial<BasicDialogProps>) => {
      getInstance().setDialogProps(props)
    },

    openDialog: () => {
      getInstance().openDialog()
    },

    closeDialog: () => {
      getInstance().closeDialog()
    },

    setDialogTitle: (value) => {
      getInstance().setDialogTitle(value)
    },

    setConfirmLoading: (loading) => {
      getInstance().setConfirmLoading(loading)
    },
  }

  return [register, methods]
}
