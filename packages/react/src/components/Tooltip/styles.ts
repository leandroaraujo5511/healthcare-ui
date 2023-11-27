import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const Provider = styled(Tooltip.Provider, {})
export const Root = styled(Tooltip.Root, {})
export const Trigger = styled(Tooltip.Trigger, {})
export const Portal = styled(Tooltip.Portal, {})
export const Content = styled(Tooltip.Content, {
  borderRadius: '$sm',
  padding: '$2 $4',
  fontSize: '15px',
  lineHeight: '1',
  color: '$gray100',
  backgroundColor: '$gray700',
  border: '1px solid $greyLight',
  maxWidth: '160px',
  maxHeight: '$20',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '$2',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray600',
    borderRadius: '$1',
  },

  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '$gray400',
  },
  '[data-state="delayed-open"][data-side="top"]': {
    animationName: 'slideDownAndFade',
  },
  '[data-state="delayed-open"][data-side="right"]': {
    animationName: 'slideLeftAndFade',
  },
  '[data-state="delayed-open"][data-side="bottom"]': {
    animationName: 'slideUpAndFade',
  },
  '[data-state="delayed-open"][data-side="left"]': {
    animationName: 'slideRightAndFade',
  },
  zIndex: '99999999',
})
