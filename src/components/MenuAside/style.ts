import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.aside`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid var(--roxo-tema-principal);
`;

export const MenuBars = styled(Link)`
  display: block;
  margin: 20px auto 0;
  height: 25vh;

  > img {
    display: block;
    margin: 0 auto;
  }
`;

export const NavMenuList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 60vh;
`;

export const NavMenuItens = styled.button`
  background-color: var(--branco-fundo-body);
  color: var(--cinza-claro);
  display: flex;
  align-items: center;
  width: 270px;
  height: 50px;
  border-radius: 18px;
  margin-bottom: 40px;
  padding-left: 50px;

  svg {
    color: var(--cinza-claro);
    width: 20%;
  }

  &:hover {
    > li,
    svg {
      color: var(--roxo-tema-principal);
    }
  }

  &.isActive {
    background-color: var(--roxo-tema-principal);
    > li,
    svg {
      color: var(--branco-fundo-body);
    }
  }
`;

export const MenuBarsList = styled.li`
  color: var(--cinza-claro);
  font-size: 18px;
  display: flex;
  border-radius: 4px;
  font-size: 24px;
`;

export const Logout = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 270px;
  height: 15vh;
  padding-left: 50px;
  font-size: 24px;
  color: var(--vermelho);

  img {
    width: 35px;
  }
`;
