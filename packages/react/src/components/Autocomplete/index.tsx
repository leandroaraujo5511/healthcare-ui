import { ReactNode, useState } from 'react'

import {
  AutocompleteContainer,
  Container,
  Label,
  SuggestionItem,
  SuggestionList,
} from './styles'
import { TextInput } from '../TextInput'

export interface AutocompleteProps {
  suggestions: string[]
  onSelect: (selectedValue: string) => void
  label?: string
  placeholder?: string
  icon?: ReactNode
  error?: boolean
  message?: string
  disabled?: boolean
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  suggestions,
  onSelect,
  label,
  placeholder,
  icon,
  error,
  message,
  disabled,
}) => {
  const [inputValue, setInputValue] = useState('')
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value
    setInputValue(inputText)

    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(inputText.toLowerCase()),
    )

    setFilteredSuggestions(filtered)
    setShowSuggestions(true)
  }

  const handleSelectSuggestion = (suggestion: string) => {
    setInputValue(suggestion)
    setFilteredSuggestions([])
    setShowSuggestions(false)
    onSelect(suggestion)
  }

  return (
    <Container>
      {!!label && <Label>{label}</Label>}
      <AutocompleteContainer>
        <TextInput
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          icon={icon}
          error={error}
          message={message}
          disabled={disabled}
        />
        {showSuggestions && filteredSuggestions.length > 0 && (
          <SuggestionList>
            {filteredSuggestions.map((suggestion, index) => (
              <SuggestionItem
                key={index}
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                {suggestion}
              </SuggestionItem>
            ))}
          </SuggestionList>
        )}
      </AutocompleteContainer>
    </Container>
  )
}
