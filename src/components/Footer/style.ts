import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #f5f4f4;
  width: 100%;
  height: 65px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-top: 2px solid #7065e4;
`;

export const NavMenu = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: #a8a8a8;
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
    color: #7065e4;
  }

  &:hover {
    color: #7065e4;
  }
`;
