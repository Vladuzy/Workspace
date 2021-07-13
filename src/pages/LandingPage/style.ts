import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--preto-cafe);
  color: var(--branco-fundo-body);
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin-top: 80px;
    > Button {
      margin: 10px;
    }
  }
`;
