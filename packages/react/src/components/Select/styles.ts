import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'grid',
  gap: '$2',
})
export const SelectContainer = styled('select', {
  border: '2px solid $gray900',
  borderRadius: '4px',
  outline: 'none',
  backgroundColor: '$gray900',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: 'regular',
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
