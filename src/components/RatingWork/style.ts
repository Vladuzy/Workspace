import styled from "styled-components";
export const Container = styled.form`
  background-color: var(--cinza-escuro);
  border-radius: 15px;
  height: 133px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;
export const Button = styled.button`
  width: 100px;
  height: 32px;
  background-color: var(--roxo-tema-principal);
  border-radius: 15px;
  list-style: none;
  color: var(--branco-fundo-body);
`;
