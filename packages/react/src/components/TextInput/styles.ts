import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'grid',
  gap: '$2',
})

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0 0 0 1000px $gray900 inset',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
    error: {
      true: {
        border: '2px solid $ecLight',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$greyLight',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'md',
  },
})

export const Label = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: 'regular',
  paddingLeft: '$1',
})
export const MessageError = styled('span', {
  marginTop: '-$1',
  fontFamily: '$default',
  fontSize: '$xxs',
  color: '$ecLight',
  fontWeight: 'regular',
  paddingLeft: '$1',
})

export const IconContainer = styled('div', {
  alignItems: 'center',
  justifyContent: 'center',
  paddingRight: '$2',
  svg: {
    width: '$5',
    height: '$5',
  },
  color: '$white',
})
export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray500',
  },
})
