import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: max(calc(100vh - 10rem), 36rem);
  max-height: 50rem;
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
