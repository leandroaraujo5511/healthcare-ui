import type { Meta, StoryObj } from '@storybook/react'
import { Box, TextInput, TextInputProps } from '@healthcare-ui/react'
import { EnvelopeSimple } from 'phosphor-react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    label: 'Email address',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
    type: 'email',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const Error: StoryObj<TextInputProps> = {
  args: {
    error: true,
    message: 'campo obrigatório',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}

export const Icon: StoryObj<TextInputProps> = {
  args: {
    icon: <EnvelopeSimple />,
  },
}
