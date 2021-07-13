import styled from 'styled-components'

interface ValueCardProps {
  active: boolean
}

export const ValueContainer = styled.section`
  width: 290px;
  margin: 10px auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;

  h2 {
    margin-left: 5px;
    margin-bottom: 5px;
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    color: var(--roxo-tema-principal);
  }
`

export const ValueCard = styled.div<ValueCardProps>`
  width: 90px;
  height: 35px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: ${({ active }) => active ? 'var(--verde)' : 'var(--cinza-claro)'};
  background-color: ${({ active }) => active ? 'var(--verde-claro)' : 'var(--cinza-ultra-claro-main)'};

  h3 {
    font-size: 13px;
  }
`