import type { Meta, StoryObj } from '@storybook/react'
import { Loader, LoaderProps } from '@healthcare-ui/react'

export default {
  title: 'Data display/Loader',
  component: Loader,
  args: {},
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<LoaderProps>

export const Default: StoryObj<LoaderProps> = {
  args: {
    size: 'md',
  },
}
export const LoaderSm: StoryObj<LoaderProps> = {
  args: {
    size: 'sm',
  },
}

export const LoaderXl: StoryObj<LoaderProps> = {
  args: {
    size: 'xl',
  },
}
