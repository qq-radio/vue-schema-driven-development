<template>
  <div :class="ns.b()">
    <div :class="ns.e('content')">
      <template v-for="(button, index) in preButtons" :key="index">
        <component :is="renderButton(button)" />
      </template>
      <el-dropdown v-if="hasDropdown" trigger="click" style="margin-left: 10px; cursor: pointer">
        <span style="color: #69a9ff">
          <span style="margin-right: 2px">更多</span>
          <el-icon><ArrowDownBold /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="button in dropdownButtons" :key="button.text">
              <component :is="renderButton(button)" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BasicButtonGroupProps, Button } from './type'

import { useBasicNamespace, usePermission } from '@center/composables'

import { h, computed, unref } from 'vue'
import { isFunction } from 'lodash'

import { BasicImport } from '@center/components/basic-import'
import { BasicExport } from '@center/components/basic-export'

import { ElButton, ElIcon, ElPopconfirm, ElMessageBox, ElTooltip } from 'element-plus'
import { ArrowDownBold } from '@element-plus/icons-vue'

const ns = useBasicNamespace('button-group')

defineOptions({
  name: 'BasicButtonGroup',
})

const props = withDefaults(defineProps<BasicButtonGroupProps>(), {
  confirmType: 'message-box',
  buttonProps: () => ({}),
  buttons: () => [],
})

const { checkButtonPermission } = usePermission()

const checkShow = (show) => {
  if (isFunction(show)) {
    return show(props.callbackParams) !== false
  }

  return show !== false
}

const getButtons = computed(() =>
  props.buttons.filter((item) => checkButtonPermission(item.permission) && checkShow(item.show)),
)
const preButtons = computed(() => getButtons.value.slice(0, props.showNumber))
const hasDropdown = computed(() => props.showNumber && props.showNumber < getButtons.value.length)
const dropdownButtons = computed(() =>
  hasDropdown.value ? getButtons.value.slice(props.showNumber) : [],
)

const getConfirmTip = (button: Button) =>
  button.message || `确认${button.text}吗？` || '确定执行此操作吗？'

const renderButton = (button: Button) => {
  const renderButtonByType = () => {
    if (button.type === 'import') {
      return h(BasicImport, {
        style: {
          marginRight: '12px',
        },
        ...button.props,
        disabled: unref(button.disabled),
      })
    } else if (button.type === 'export') {
      return h(BasicExport, {
        ...button.props,
        disabled: unref(button.disabled),
        style: {
          marginRight: '12px',
        },
      })
    } else {
      return renderDefaultButton(button)
    }
  }

  if (button.disabledReason && unref(button.disabled)) {
    return () =>
      h(
        ElTooltip,
        { content: button.disabledReason, placement: 'top' },
        {
          default: () => h(renderButtonByType),
        },
      )
  }

  return renderButtonByType
}

const renderDefaultButton = (button: Button) => {
  const defaultProps = {
    type: 'primary',
    size: 'default',
    round: false,
  }

  const tagProps = {
    ...defaultProps,
    ...props.buttonProps,
    ...(button.props || {}),
    disabled: unref(button.disabled),
  }

  const text = isFunction(button.text)
    ? button.text({ ...props.callbackParams, button })
    : button.text

  const buttonComponent = h(
    ElButton as any,
    {
      ...tagProps,
      onClick: () => {
        handleClick(button)

        if (isFunction(button.onConfirm) && props.confirmType === 'message-box') {
          handleBoxConfirm(button)
        }
      },
    },
    () => text,
  )

  if (isFunction(button.onConfirm) && props.confirmType === 'pop-confirm') {
    return h(
      ElPopconfirm,
      {
        title: getConfirmTip(button),
        onClick: () => {
          handleClick(button)
        },
        onConfirm: () => handleConfirm(button),
        onCancel: () => handleCancel(button),
      },
      {
        reference: () => buttonComponent,
      },
    )
  }

  return buttonComponent
}

const handleClick = (button: Button) => {
  const { onClick } = button

  if (onClick && isFunction(onClick)) {
    onClick({
      button,
      ...props.callbackParams,
    })
  }
}

const handleConfirm = (button: Button) => {
  const { onConfirm } = button

  if (onConfirm && isFunction(onConfirm)) {
    onConfirm({
      button,
      ...props.callbackParams,
    })
  }
}

const handleCancel = (button: Button) => {
  const { onCancel } = button

  if (onCancel && isFunction(onCancel)) {
    onCancel({
      button,
    })
  }
}

const handleBoxConfirm = (button: Button) => {
  ElMessageBox.confirm(getConfirmTip(button))
    .then(() => {
      handleConfirm(button)
    })
    .catch(() => {
      handleCancel(button)
    })
}
</script>

<style scoped lang="scss">
@use './style.scss';
</style>
