import type { Meta, Story } from '@storybook/react'
import { Button, Heading, Modal, ModalProps, Text } from '@healthcare-ui/react'
import { useState } from 'react'

export default {
  title: 'Overlay/Modal',
  component: Modal,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ModalProps>

const Template: Story<ModalProps> = (args) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open Modal</Button>
      <Modal {...args} open={open} setOpen={setOpen}></Modal>
    </>
  )
}

export const Primary = Template.bind({})
export const Header = Template.bind({})
export const Action = Template.bind({})

Primary.args = {
  action: true,
  title: 'Modal',
  children: (
    <>
      <Heading size={'lg'}>Lorem Ipsum</Heading>
      <Text>
        {' '}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam
        repellendus officia blanditiis porro non veniam iste, cum ea! Officia,
        fugiat inventore.
      </Text>
      <Heading>Lorem Ipsum </Heading>
      <Text>
        {' '}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam
        repellendus officia blanditiis porro non veniam iste, cum ea! Officia,
        fugiat inventore. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Deleniti quidem quis voluptatem, eaque laudantium, nemo suscipit
        dolores numquam repellendus officia blanditiis porro non veniam iste,
        cum ea! Officia, fugiat inventore.Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Deleniti quidem quis voluptatem, eaque
        laudantium, nemo suscipit dolores numquam repellendus officia blanditiis
        porro non veniam iste, cum ea! Officia, fugiat inventore.Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Deleniti quidem quis
        voluptatem, eaque laudantium, nemo suscipit dolores numquam repellendus
        officia blanditiis porro non veniam iste, cum ea! Officia, fugiat
        inventore.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Deleniti quidem quis voluptatem, eaque laudantium, nemo suscipit dolores
        numquam repellendus officia blanditiis porro non veniam iste, cum ea!
        Officia, fugiat inventore.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Deleniti quidem quis voluptatem, eaque laudantium,
        nemo suscipit dolores numquam repellendus officia blanditiis porro non
        veniam iste, cum ea! Officia, fugiat inventore.
      </Text>
    </>
  ),
}

Header.args = {
  children: (
    <>
      <Heading>Lorem Ipsum</Heading>
      <Text>
        {' '}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam
        repellendus officia blanditiis porro non veniam iste, cum ea! Officia,
        fugiat inventore.
      </Text>
    </>
  ),
  title: 'Modal Title',
}

Action.args = {
  children: (
    <>
      <Heading>Lorem Ipsum</Heading>
      <Text>
        {' '}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
        quidem quis voluptatem, eaque laudantium, nemo suscipit dolores numquam
        repellendus officia blanditiis porro non veniam iste, cum ea! Officia,
        fugiat inventore.
      </Text>
    </>
  ),
  title: 'Modal Title',
  action: true,
}
