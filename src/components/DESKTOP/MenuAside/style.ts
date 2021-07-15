import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.aside`
  min-width: 185px;
  max-width: 250px;
  height: 100vh;
  border-right: 1px solid var(--roxo-tema-principal);
`;

export const MenuBars = styled(Link)`
  display: block;
  margin: 60px auto 0;
  height: 22vh;

  > img {
    display: block;
    margin: 0 auto;
    width: 100%;
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
  width: 90%;
  height: 50px;
  border-radius: 18px;
  margin-bottom: 40px;
  padding-left: 20px;

  svg {
    color: var(--cinza-claro);
    min-width: 20%;
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

    &:hover {
      box-shadow: 0px 0px 5px 2px var(--cinza-claro);
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
  width: 90%;
  padding-left: 20px;
  font-size: 24px;
  color: var(--vermelho);
  background-color: var(--branco-fundo-body);

  img {
    width: 35px;
  }
`;
