import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--cinza-claro);
  width: 100%;

  a {
    color: var(--roxo-tema-principal);
    font-weight: bold;
  }

  border-bottom: 1px solid var(--roxo-tema-principal);
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;

  h2 {
    font-size: 17px;
    margin: 0 5px;
  }

  img {
    margin: 5px;
    height: 50px;
    width: 50px;
    left: 11px;
    top: 219px;
    border-radius: 8px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  color: var(--cinza-claro);
  font-size: 15px;
  justify-content: space-around;

  div {
    margin: 5px 10px;
  }
`;

export const Category = styled.div`
  color: var(--vermelho);
  border: 1px solid var(--vermelho);
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 15px;
  display: inline;
  padding: 2px 10px;
`;
