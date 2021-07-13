import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  text-align: center;

  > img {
    margin-top: 50px;
    min-width: 250px;
    width: 30vw;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 50vh;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  box-shadow: 0 20px 80px 10px var(--preto-cafe);
  background-color: var(--preto-cafe);
  color: var(--branco-fundo-body);
  font-size: 25px;

  h2 {
    color: var(--roxo-tema-principal);
    text-transform: uppercase;
    line-height: 1.4em;
    padding: 30px 0;
  }

  > div {
    height: 70%;
    padding: 0 50px;

    > p {
      font-size: 23px;
    }
  }

  @media (min-width: 768px) {
    height: 50vh;
    position: initial;
    bottom: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    box-shadow: initial;
    background-color: var(--branco-fundo-body);
    color: var(--preto-cafe);
    font-size: 25px;
  }
`;
