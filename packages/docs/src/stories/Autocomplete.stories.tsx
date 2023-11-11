import type { Meta, StoryObj } from '@storybook/react'
import { Autocomplete, AutocompleteProps, Box } from '@healthcare-ui/react'

export default {
  title: 'Form/Autocomplete',
  component: Autocomplete,
  args: {
    label: 'List',
    placeholder: 'Digite para buscar',
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
} as Meta<AutocompleteProps>

export const Primary: StoryObj<AutocompleteProps> = {
  args: {
    suggestions: [
      'Maçã',
      'Banana',
      'Cereja',
      'Damasco',
      'Pera',
      'Abacaxi',
      'Uva',
      'Morango',
      'Melancia',
      'Laranja',
      'Limão',
      'Manga',
      'Kiwi',
      'Framboesa',
      'Amora',
      'Pêssego',
      'Abacate',
      'Goiaba',
      'Maracujá',
      'Tangerina',
    ],
  },
}

export const Secondary: StoryObj<AutocompleteProps> = {
  args: {
    error: true,
    message: 'campo obrigatório',
    suggestions: [
      'Maçã',
      'Banana',
      'Cereja',
      'Damasco',
      'Pera',
      'Abacaxi',
      'Uva',
      'Morango',
      'Melancia',
      'Laranja',
      'Limão',
      'Manga',
      'Kiwi',
      'Framboesa',
      'Amora',
      'Pêssego',
      'Abacate',
      'Goiaba',
      'Maracujá',
      'Tangerina',
    ],
  },
}
