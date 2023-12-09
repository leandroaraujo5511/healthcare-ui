import { ReactNode } from 'react'
import { Content, Portal, Provider, Root, Trigger } from './styles'
import { TooltipContentProps } from '@radix-ui/react-tooltip'

export interface TooltipProps extends TooltipContentProps {
  children: ReactNode
  tooltipContent?: string | ReactNode
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  tooltipContent,
  ...props
}) => {
  return (
    <Provider>
      <Root>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          {tooltipContent ? (
            <Content sideOffset={5} {...props}>
              {tooltipContent}
            </Content>
          ) : (
            <></>
          )}
        </Portal>
      </Root>
    </Provider>
  )
}
