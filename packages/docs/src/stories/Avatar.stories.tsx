import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@healthcare-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/diego3g.png',
    alt: 'Joe Doe',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

export const SizeSm: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    size: 'sm',
  },
}
export const SizeXl: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    size: 'xl',
  },
}
