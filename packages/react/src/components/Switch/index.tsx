import { Checkbox, Container, Label, Slider, SwitchContainer } from './styles'

export interface SwitchProps {
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
}

export const Switch: React.FC<SwitchProps> = ({ checked, onChange, label }) => {
  return (
    <Container>
      <SwitchContainer>
        <Checkbox type="checkbox" checked={checked} onChange={onChange} />
        <Slider />
      </SwitchContainer>
      {!!label && <Label>{label}</Label>}
    </Container>
  )
}
