import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 80px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  .Avatar-Container {
    width: 37px;
    height: 37px;
    color: var(--preto-cafe);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoContainerTitle = styled.h1`
  color: var(--preto-cafe);
  font-size: 1rem;
`;

export const InfoContainerSubTitle = styled.h2`
  color: var(--roxo-tema-principal);
  font-size: 0.8rem;
`;
