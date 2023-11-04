import { styled } from '../../styles'

export const SwitchContainer = styled('label', {
  position: 'relative',
  display: 'inline-block',
  width: '$16',
  height: '$5',
})

export const Slider = styled('span', {
  position: 'absolute',
  cursor: 'pointer',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: '$gray400',
  borderRadius: '$lg',
  transition: '0.4s',

  '&:before': {
    position: 'absolute',
    content: '""',
    height: '$3',
    width: '$6',
    left: '$1',
    bottom: '$1',
    backgroundColor: 'white',
    borderRadius: '30%',
    transition: '0.4s',
  },
})

export const Checkbox = styled('input', {
  display: 'none',

  '&:checked + span': {
    backgroundColor: 'green',
  },

  '&:checked + span:before': {
    transform: 'translateX(32px)',
  },
})

export const Label = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$bold',
  paddingLeft: '$1',
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})
