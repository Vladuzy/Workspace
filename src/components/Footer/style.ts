import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: var(--branco-fundo-body);
  border-top: 2px solid var(--roxo-tema-principal);
  width: 100%;
  height: 65px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const NavMenu = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: var(--cinza-claro);
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > span {
    margin-top: 4px;
  }

  &.isActive {
    color: var(--roxo-tema-principal);
  }

  &:hover {
    color: var(--roxo-tema-principal);
  }
`;
