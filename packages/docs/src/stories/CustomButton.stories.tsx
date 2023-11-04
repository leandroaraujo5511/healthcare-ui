import type { Meta, StoryObj } from '@storybook/react'
import { CustomButton, ButtonProps } from '@healthcare-ui/react'

export default {
  title: 'Form/CustomButton',
  component: CustomButton,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const ButtonLoading: StoryObj<ButtonProps> = {
  args: {
    loading: true,
  },
}
