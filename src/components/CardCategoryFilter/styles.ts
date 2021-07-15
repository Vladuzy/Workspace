import styled from 'styled-components'

export const CardContainer = styled.div`
  color: var(--roxo-tema-principal);
  border: 1px solid var(--roxo-tema-principal);
  border-radius: 10px;
  font-size: 15px;
  display: inline;
  padding: 2px 10px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    font-size: 14px;
    font-weight: 400;
  }

  @media (min-width: 1266px) {
    height: 30px;
    gap: 5px;
  }
`