import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

type ButtonCOntainerProps = {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonCOntainerProps>`
  width: 100px;
  height: 40px;
  margin: 8px;
  border: 0;
  border-radius: 4px;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
`
