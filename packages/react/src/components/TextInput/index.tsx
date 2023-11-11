import { ComponentProps, ReactNode, forwardRef } from 'react'
import {
  Container,
  IconContainer,
  Input,
  Label,
  MessageError,
  Prefix,
  TextInputContainer,
} from './styles'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  prefix?: string
  label?: string
  size?: ComponentProps<typeof TextInputContainer>['size']
  icon?: ReactNode
  error?: boolean
  message?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, size, label, icon, error, message, ...props }, ref) => {
    return (
      <Container>
        {!!label && <Label>{label}</Label>}
        <TextInputContainer size={size} error={error}>
          {!!prefix && <Prefix>{prefix}</Prefix>}
          {!!icon && <IconContainer>{icon}</IconContainer>}
          <Input ref={ref} {...props} />
        </TextInputContainer>
        <MessageError>{message}</MessageError>
      </Container>
    )
  },
)

TextInput.displayName = 'TextInput'
