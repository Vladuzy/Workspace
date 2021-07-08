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
export const MainContainer = styled.main`
  height: 80vh;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: var(--cinza-ultra-claro-main);
`

export const Input = styled.input`
  width='235px';
  heigth='30px'; 
  color='var(--cinza-claro)';
  backColor='#ECEAEA';
  borderRadius='15px';
  border='none';
  fontSize='17px'
`
