import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  background-color: var(--branco-fundo-body);
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    margin: 0 auto;
    display: block;
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

export const InputContainer = styled.input`
  width: 274px;
  height: 40px;
  padding-left: 15px;
  border-radius: 8px;
  background-color: var(--cinza-input-color);
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
`;

export const SelectContainer = styled.select`
  width: 274px;
  height: 40px;
  padding-left: 10px;
  border-radius: 8px;
  background-color: var(--cinza-input-color);
  color: gray;
`;
