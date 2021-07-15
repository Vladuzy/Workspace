import styled from "styled-components";

export const ContainerMain = styled.main`
  display: flex;
  align-items: flex-end;
  max-width: 100vw;
  max-height: 100vh;
`;
export const Title = styled.h1`
  color: var(--roxo-tema-principal);
  margin-left: 5rem;
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 2em;
`;

export const Content = styled.div`
  width: 65vw;
`;

export const ListsContainer = styled.div`
  width: 50vw;
  margin: 0 auto;
`;

export const ListContainer = styled.div`
  max-height: 34vh;
  border-radius: 15px;
  background-color: var(--cinza-ultra-claro-main);
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
  gap: 15px;

  & > div {
    padding: 0px 10px;
    max-width: 350px;
    min-width: 235px;
    width: 42%;
    border: 1px solid var(--roxo-tema-principal);
    border-radius: 8px;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: var(--preto-cafe);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background: var(--roxo-tema-principal);
  }
`;

export const ColumnList = styled.div`
  margin: 1rem;

  h1 {
    font-size: 1.5em;
    font-weight: normal;
    margin: 5px 1rem;
  }
`;

export const ProfileDesktop = styled.div`
  min-width: 185px;
  max-width: 250px;
  max-height: 100vh;
  border-left: 1px solid var(--roxo-tema-principal);
`;
