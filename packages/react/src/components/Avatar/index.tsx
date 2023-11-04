import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export type AvatarProps = ComponentProps<typeof AvatarImage> & {
  size?: 'sm' | 'md' | 'xl'
}
export function Avatar({ size, ...props }: AvatarProps) {
  return (
    <AvatarContainer size={size}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600} size={size}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
