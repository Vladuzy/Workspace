import styled from "styled-components";
interface TabProps {
  id: string;
  current: string;
  onClick?: () => void;
}

export const MainHomeContainer = styled.main`
  height: 100vh;
`;

export const ListContainer = styled.div`
  max-height: 76vh;
  height: 100%;
  overflow-y: scroll;
  background-color: var(--cinza-ultra-claro-main);
`;

export const TabStyle = styled.button<TabProps>`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 49vw;
  height: 100%;
  padding: 10px;
  background-color: ${({ id, current }) =>
    id === current
      ? "var(--cinza-ultra-claro-main)"
      : "var(--branco-fundo-body)"};
  color: ${({ id, current }) =>
    id === current ? "var(--preto-cafe)" : "var(--cinza-claro)"};
`;

export const Header = styled.div`
  height: 15vh;

  & > div:first-child {
    border-bottom: 1px solid var(--cinza-claro);
    padding-left: 20px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60%;
    & > span {
      font-size: 14px;
      display: inherit;
      color: var(--preto-cafe);
    }
  }

  div {
    color: var(--roxo-tema-principal);
    font-weight: bold;
    font-size: 20px;
    height: 40%;
  }
`;
