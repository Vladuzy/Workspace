import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterContainer = styled.section`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 1266px) {
    justify-content: flex-start;
    gap: 30px;
  }
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

  @media (min-width: 1266px) {
    height: 35px;
    width: 130px;
    border-radius: 20px;

    justify-content: space-evenly;

    h3 {
      font-size: 20px;
      color: white;
      font-weight: 400;
    }

    svg {
      width: 25px;
      height: 25px;
    }
  }
`;

export const FilterTagsContainer = styled.div`
  margin: 5px 10px;

  display: flex;
  gap: 5px;
  flex-wrap: wrap;

  @media (min-width: 1266px) {
    margin: 20px 0;
    gap: 10px;
  }
`

export const MainContainer = styled.main`
  max-height: 76vh;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: var(--cinza-ultra-claro-main);
  overflow-y: scroll;
`;

export const Input = styled.input`
  width: 200px;
  height: 100%;
  padding-left: 15px;
  color: var(--cinza-claro);

  background: none;
  border: none;
  font-size: 17px;

  @media (min-width: 1266px) {
    width: 365px;
    height: 45px;

    font-size: 20px;
  }
`

export const InputContainer = styled.div`
  width: 235px;
  height: 30px;
  background-color: var(--cinza-escuro);
  border-radius: 15px;
  color: var(--cinza-claro);

  display: flex;
  align-items: center;

  svg {
    width: 25px;
    height: 25px;
  }

  @media (min-width: 1266px) {
    width: 400px;
    height: 45px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`
