import type { Meta, StoryObj } from '@storybook/react'
import { Box, Select, SelectProps } from '@healthcare-ui/react'

export default {
  title: 'Form/Select',
  component: Select,
  args: {
    options: [
      {
        label: 'Item 1',
        value: 'item_1',
      },
      {
        label: 'Item 2',
        value: 'item_2',
      },
      {
        label: 'Item 3',
        value: 'item_3',
      },
    ],
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<SelectProps>

export const Primary: StoryObj<SelectProps> = {
  args: {
    label: 'Opções',
  },
}

export const Placeholder: StoryObj<SelectProps> = {
  args: {
    label: 'Opções',
    placeholder: 'Select',
  },
}
export const Error: StoryObj<SelectProps> = {
  args: {
    label: 'Opções',
    error: true,
    message: 'Selecione uma opção',
  },
}
export const Disabled: StoryObj<SelectProps> = {
  args: {
    label: 'Opções',
    disabled: true,
  },
}
