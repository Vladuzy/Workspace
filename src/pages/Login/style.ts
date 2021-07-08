import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--roxo-tema-principal);
  }
`;

export const StyleForm = styled.form`
  button {
    margin: 32px auto;
  }
`;
export const StyleInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;

  span {
    height: 18px;
    color: var(--vermelho);
  }

  div {
    margin-bottom: 5px;
  }
`;
