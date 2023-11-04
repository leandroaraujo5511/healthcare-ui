import type { Meta, StoryObj } from '@storybook/react'
import { TagProps, Tag } from '@healthcare-ui/react'

export default {
  title: 'Data display/Tag',
  component: Tag,
  args: {},
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<TagProps>

export const Default: StoryObj<TagProps> = {
  args: {
    children: 'Label',
  },
}

export const Disable: StoryObj<TagProps> = {
  args: {
    children: 'Label',
    variant: 'disabled',
  },
}
export const Primary: StoryObj<TagProps> = {
  args: {
    children: 'Label',
    variant: 'primary',
  },
}
export const Secondary: StoryObj<TagProps> = {
  args: {
    children: 'Label',
    variant: 'secondary',
  },
}
export const Tertiary: StoryObj<TagProps> = {
  args: {
    children: 'Label',
    variant: 'tertiary',
  },
}
export const Danger: StoryObj<TagProps> = {
  args: {
    children: 'Label',
    variant: 'danger',
  },
}
export const Warning: StoryObj<TagProps> = {
  args: {
    children: 'Label',
    variant: 'warning',
  },
}
