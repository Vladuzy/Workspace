import styled from "styled-components";
import { Link } from "react-router-dom";

interface PropsCategory {
  eletricista?: boolean;
  encanador?: boolean;
  limpeza?: boolean;
  pintura?: boolean;
  gerais?: boolean;
}

export const FullContainer = styled.main`
  @media (min-width: 768px) {
    color: var(--azul);
    max-height: 100vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.main`
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

  &:first-child {
    display: none;
  }

  @media only screen and (min-width: 769px) {
    width: 50vw;

    &:first-child {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 50vw;
    }
  }
`;

export const ContainerCategory = styled.section<PropsCategory>`
  @media only screen and (min-width: 769px) {
    background-color: ${({
      eletricista,
      encanador,
      limpeza,
      pintura,
      gerais,
    }) =>
      eletricista
        ? "var(--azul-claro)"
        : encanador
        ? "var(--roxo-categoria-claro)"
        : limpeza
        ? "var(--vermelho-claro)"
        : pintura
        ? "var(--amarelo-claro)"
        : gerais
        ? "var(--verde-claro)"
        : "var(--cinza-escuro)"};

    color: ${({ eletricista, encanador, limpeza, pintura, gerais }) =>
      eletricista
        ? "var(--azul)"
        : encanador
        ? "var(--roxo-categoria)"
        : limpeza
        ? "var(--vermelho)"
        : pintura
        ? "var(--amarelo)"
        : gerais
        ? "var(--verde)"
        : "var(--cinza-claro)"};
    margin: 5px;
    display: flex;
    border-radius: 15px;
    max-width: 80%;

    > img {
      max-height: 80px;
      margin: 10px;
    }

    > p {
      margin: auto;
    }
    &:hover {
      box-shadow: ${({ eletricista, encanador, limpeza, pintura, gerais }) =>
        eletricista
          ? "2px 2px 2px 2px var(--azul-claro)"
          : encanador
          ? "2px 2px 2px 2px var(--roxo-categoria-claro)"
          : limpeza
          ? "2px 2px 2px 2px var(--vermelho-claro)"
          : pintura
          ? "2px 2px 2px 2px var(--amarelo-claro)"
          : gerais
          ? "2px 2px 2px 2px var(--verde-claro)"
          : "2px 2px 2px 2px var(--cinza-escuro)"};
    }
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
