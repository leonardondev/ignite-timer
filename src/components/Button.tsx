import { ButtonContainer, ButtonVariant } from './Button.styles'

type ButtonProps = {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
