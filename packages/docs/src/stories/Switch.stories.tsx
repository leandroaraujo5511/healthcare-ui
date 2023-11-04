import type { Meta, StoryObj } from '@storybook/react'
import { Box, Switch, SwitchProps } from '@healthcare-ui/react'

export default {
  title: 'Form/Switch',
  component: Switch,
  args: {},
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
} as Meta<SwitchProps>

export const Default: StoryObj<SwitchProps> = {
  args: {
    label: 'Ativar',
    onChange: () => console.log('switch'),
  },
}
