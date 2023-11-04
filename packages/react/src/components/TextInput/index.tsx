import { ComponentProps, ReactNode, forwardRef } from 'react'
import {
  Container,
  IconContainer,
  Input,
  Label,
  Prefix,
  TextInputContainer,
} from './styles'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  prefix?: string
  label?: string
  size?: ComponentProps<typeof TextInputContainer>['size']
  icon?: ReactNode
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, size, label, icon, ...props }, ref) => {
    return (
      <Container>
        {!!label && <Label>{label}</Label>}
        <TextInputContainer size={size}>
          {!!prefix && <Prefix>{prefix}</Prefix>}
          {!!icon && <IconContainer>{icon}</IconContainer>}
          <Input ref={ref} {...props} />
        </TextInputContainer>
      </Container>
    )
  },
)

TextInput.displayName = 'TextInput'
