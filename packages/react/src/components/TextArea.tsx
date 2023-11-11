import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const TextAreaContainer = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: 80,

  variants: {
    error: {
      true: {
        border: '2px solid $ecLight',
      },
    },
  },

  '&:focus': {
    outline: 0,
    borderColor: '$greyLight',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export const Container = styled('div', {
  display: 'grid',
  gap: '$2',
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

export interface TextAreaProps
  extends ComponentProps<typeof TextAreaContainer> {
  as?: ElementType
  error?: boolean
  message?: string
  label?: string
}

export const TextArea = ({
  error,
  message,
  label,
  ...props
}: TextAreaProps) => {
  return (
    <>
      <Container>
        <Label>{label}</Label>
        <TextAreaContainer error={error} {...props} />
        <MessageError>{message}</MessageError>
      </Container>
    </>
  )
}

TextArea.displayName = 'TextArea'
