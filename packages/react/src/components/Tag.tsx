import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Tag = styled('span', {
  backgroundColor: '$gray700',
  color: '$textBase',
  padding: '$2 $4',
  borderRadius: '$lg',
  fontSize: '$sm',
  fontWeight: '$bold',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$greyLight',
        color: '$gray700',
      },

      secondary: {
        backgroundColor: '$purpleLight',
        color: '$white',
      },

      tertiary: {
        backgroundColor: '$blueLight',
        color: '$white',
      },

      danger: {
        backgroundColor: '$dangerLight',
        color: '$gray900',
      },
      warning: {
        backgroundColor: '$warningLight',
        color: '$gray900',
      },
      disabled: {
        backgroundColor: 'transparent',
        border: '1px solid',
        color: '$gray400',
        cursor: 'not-allowed',
      },
    },
  },
})

export interface TagProps extends ComponentProps<typeof Tag> {
  as?: ElementType
}

Tag.displayName = 'Tag'
