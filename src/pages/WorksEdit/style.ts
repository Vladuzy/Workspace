import styled from "styled-components";

export const FooterButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: var(--roxo-tema-principal);
  border-radius: 8px;
  border: none;
  color: var(--cinza-escuro);
  font-size: 16px;
`;

export const InputContainer = styled.input`
  width: 100%;
  height: 30px;
  color: var(--cinza-claro);
  background-color: var(--cinza-input-color);
  border-radius: 10px;
  border: none;
  padding: 10px;
`;

export const TextAreaContainer = styled.textarea`
  background-color: var(--cinza-input-color);
  color: var(--cinza-claro);
  border-radius: 10px;
  width: 100%;
  height: 60px;
  padding: 7px;
  font-size: 15px;

  &::placeholder {
    font-family: 'Roboto Slab', sans-serif;
  }
`;

export const InputFooter = styled.input`
  width: 46%;
  height: 30px;
  font-size: 15px;
  color: var(--cinza-claro);
  background-color: var(--cinza-input-color);
  border-radius: 10px;
  border: none;
  padding: 10px;
`;

export const InputFooterHour = styled.input`
  width: 46%;
  height: 30px;
  font-size: 15px;
  color: var(--cinza-claro);
  background-color: var(--cinza-input-color);
  border-radius: 10px;
  border: none;
  padding: 10px;
`;

export const ImageHeader = styled.img`
  background-size: cover;
  width: 50px;
  height: 50px;
  margin-right: 5vw;
  margin-top: 20px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
`;

export const Container = styled.div`
  width: 285PX;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  span:last-child {
    margin-right: 15px;
  }
`;

export const TitleContainer = styled.h1`
  color: var(--roxo-tema-principal);
  font-size: 20px;
  font-weight: 400;
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const SpanFormContainer = styled.span`
  color: var(--vermelho);
  font-size: 12px;
  display: inline-block;
  height: 15px;
  width: 40%;
  margin-left: 10px;
`;

export const ContainerForm = styled.div`
  height: 380px;
`;