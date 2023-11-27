import React from 'react'
import { Container, Label, MessageError, SelectContainer } from './styles'

export interface SelectProps {
  options: { value: string; label: string }[]
  label?: string
  placeholder?: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  error?: boolean
  message?: string
  disabled?: boolean
}

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  label,
  onChange,
  error,
  message,
  disabled,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <SelectContainer onChange={onChange} error={error} disabled={disabled}>
        <option value="">{placeholder ?? 'Selecione uma opção'}</option>
        {options.map((option) => (
          <option
            key={option.value}
            style={{ paddingTop: '8px' }}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </SelectContainer>
      <MessageError>{message}</MessageError>
    </Container>
  )
}
