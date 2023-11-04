import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'grid',
  gap: '$2',
})

export const AutocompleteContainer = styled('div', {
  position: 'relative',
})

export const SuggestionList = styled('ul', {
  position: 'absolute',
  top: '100%',
  left: '0',
  right: '0',
  border: '2px solid $greyLight',
  borderTop: 'none',
  listStyle: 'none',
  padding: '$2',
  margin: '0',
  backgroundColor: '$gray800',
  borderRadius: '0 0 4px 4px',
  color: '$white',
})

export const SuggestionItem = styled('li', {
  padding: '8px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray600',
  },
})

export const Label = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: 'regular',
  paddingLeft: '$1',
})
