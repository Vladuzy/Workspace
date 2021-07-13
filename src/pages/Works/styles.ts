import styled from "styled-components";

export const HeaderContainer = styled.header`
  min-height: 60px;
`;

export const FilterContainer = styled.section`
  height: 50px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--roxo-tema-principal);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.8);
    transition: filter 0.2s ease-in-out;
  }

  svg {
    color: var(--branco-fundo-body);
    width: 20px;
    height: 20px;
  }
`;

export const FilterTagsContainer = styled.div`
  margin: 5px 10px;

  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`

export const MainContainer = styled.main`
  min-height: 80vh;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: var(--cinza-ultra-claro-main);

  & > div:last-child {
    margin-bottom: 63px;
  }
`

export const Input = styled.input`
  width: 200px;
  height: 100%;
  padding-left: 15px;
  color: var(--cinza-claro);

  background: none;
  border: none;
  font-size: 17px;
`

export const InputContainer = styled.div`
  width: 235px;
  height: 30px;
  background-color: var(--cinza-escuro);
  border-radius:15px;
  color: var(--cinza-claro);

  display: flex;
  align-items: center;

  svg {
    width: 25px;
    height: 25px;
  }
`