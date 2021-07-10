import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 70px;
  }

  > div {
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  height: 200px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  height: 74px;

  span {
    padding: 5px;
    color: var(--roxo-tema-principal);
  }
`;

export const LinkStyle = styled(Link)`
  color: var(--roxo-tema-principal);
  padding-left: 7px;
`;
