import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$16',
  height: '$16',
  overflow: 'hidden',

  variants: {
    size: {
      sm: {
        width: '$10',
        height: '$10',
      },
      md: {
        width: '$16',
        height: '$16',
      },
      xl: {
        width: '$40',
        height: '$40',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray500',
  color: '$gray600',

  variants: {
    size: {
      sm: {
        svg: {
          width: '$8',
          height: '$8',
        },
      },
      md: {
        svg: {
          width: '$10',
          height: '$10',
        },
      },
      xl: {
        svg: {
          width: '$20',
          height: '$20',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
