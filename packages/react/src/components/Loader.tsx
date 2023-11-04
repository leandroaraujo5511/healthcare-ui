import { keyframes, styled } from '../styles'

const spinFade = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
    opacity: 0.5,
  },
  '50%': {
    transform: 'rotate(180deg)',
    opacity: 1,
  },
  '100%': {
    transform: 'rotate(360deg)',
    opacity: 0.5,
  },
})

const LoaderContainer = styled('div', {
  display: 'inline-block',
  borderWidth: '4px',
  borderStyle: 'solid',
  borderColor: 'transparent transparent #00B37E #00B37E',
  borderRadius: '50%',
  animation: `${spinFade} 0.75s linear infinite`,

  variants: {
    size: {
      sm: {
        width: '16px',
        height: '16px',
        borderWidth: '2px',
      },
      md: {
        width: '32px',
        height: '32px',
      },
      xl: {
        width: '64px',
        height: '64px',
        borderWidth: '8px',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface LoaderProps {
  size?: 'sm' | 'md' | 'xl'
}

export const Loader = ({ size }: LoaderProps) => {
  return <LoaderContainer size={size} />
}
