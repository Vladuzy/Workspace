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
  height: 100vh;
  background-color: var(--branco-fundo-body);
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    margin: 0 auto;
    display: block;
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

export const FormContainer = styled.form`
  width: 274px;
  height: 400px;
  margin: 0 auto 50px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  justify-content: space-between;
  padding: 35px 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FooterContainerLink = styled(Link)`
  color: var(--roxo-tema-principal);
  padding-left: 7px;
`;

export const SpanFormContainer = styled.span`
  color: var(--roxo-tema-principal);
  font-size: 13px;
  padding: 5px;
  min-height: 25px;
`;

export const SelectContainer = styled.select`
  width: 274px;
  min-height: 40px;
  padding-left: 10px;
  border-radius: 8px;
  background-color: var(--cinza-input-color);
  color: gray;
`;
