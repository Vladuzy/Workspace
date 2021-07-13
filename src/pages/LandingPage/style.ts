import styled from "styled-components";

export const Container = styled.div`
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

  span {
    display: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    div {
      width: 50vw;
      margin-top: 0;
    }

    span {
      display: block;
      font-size: 14px;
      color: var(--cinza-claro);
      margin: 20px 0;
      display: flex;
      align-items: center;

      &::before,
      &::after {
        content: "";
        width: 60px;
        height: 1px;
        background: var(--cinza-claro);
        margin-right: 16px;
      }

      &::after {
        margin-right: 0;
        margin-left: 16px;
      }
    }
  }
`;

export const Content = styled.div`
  @media (min-width: 768px) {
    img {
      width: 80%;
      margin-bottom: 20px;
    }
    p {
      max-width: 400px;
      margin: 0 auto;
    }
  }
`;

export const ContainerButton = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: var(--branco-fundo-body);
  }
`;
