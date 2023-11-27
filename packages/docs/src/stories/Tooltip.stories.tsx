import type { Meta, StoryObj } from '@storybook/react'
import { TooltipProps, Tooltip, Tag, Box } from '@healthcare-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {},
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story) => {
      return <Box style={{ padding: '100px' }}>{Story()}</Box>
    },
  ],
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {
  args: {
    children: <Tag variant={'secondary'}>Tag</Tag>,
    tooltipContent: 'Isso é uma Tag',
    side: 'right',
  },
}
export const Secondary: StoryObj<TooltipProps> = {
  args: {
    children: <Tag variant={'secondary'}>Tag com descrição</Tag>,
    tooltipContent: (
      <>
        <h3 style={{ color: '#653' }}>Titulo</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipiscing elit malesuada
          auctor egestas risus, nisi cursus dui non.
        </p>
      </>
    ),
  },
}
