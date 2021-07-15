import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--preto-cafe-claro);
  position: absolute;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const FilterContainer = styled.main`
  width: 300px;
  height: 400px;
  background-color: var(--cinza-escuro);
  border-radius: 10px;
  position: relative;

  & > button {
    position: absolute;
    bottom: 10px;
    left: 50%;

    transform: translateX(-50%);
  }
`
export const HeaderContainer = styled.header`
  height: 60px;
  display: flex;
  gap: 50px;
  justify-content: space-evenly;
  align-items: center;

  border-bottom: 1px solid var(--roxo-tema-principal);
  color: var(--roxo-tema-principal);

  h3 {
    font-size: 20px; 
    font-weight: 400;
  }
  
  svg {
    width: 35px;
    height: 35px;
  }
`