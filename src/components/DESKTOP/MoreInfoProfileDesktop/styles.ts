import styled from "styled-components";

interface Props {
  type: string
}

export const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: var(--preto-cafe-claro);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MoreInfoAddContainer = styled.div<Props>`
  width: 340px;
  height: ${({ type }) => type === 'worker' ? '520px' : '420px' };
  border-radius: 15px;
  background-color: var(--cinza-escuro);
`

export const HeaderStyled = styled.header `
  width: 285px;
  color: var(--roxo-tema-principal);
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;

  & > svg {
    margin-top: 10px;
    width: 35px;
    height: 35px;
    margin-left: calc(100% - 35px);
  }
`

export const MainStyled = styled.main `
  width: 285px;
  margin: 0 auto;
  & > h2{
    width: 100%;
    font-family: 'Saira', sans-serif;
    color: var(--roxo-tema-principal);
    margin-bottom: 25px;
    font-weight: 400;
    font-size: 20px;
  }
`

export const Container = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  p{
    color: black;
    margin-left: 0;
    font-size: 1.2rem
  }
`

export const ContentForms = styled.form `
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  & > div {
    span {
      margin-left: 10px;
      font-size: 12px;
      color: var(--vermelho);
      display: block;
      height: 15px;
    }
  }

  & > button {
    margin-top: 30px;
  }
`

export const InputTextArea = styled.textarea`
  font-family: 'Roboto Slab', sans-serif;
  width: 100%;
  height: 60px;
  color: var(--cinza-claro);
  padding-left: 10px;
  font-size: 15px;
  padding-top: 5px;
  background-color: var(--cinza-input-color);
  border-radius: 10px;

  &::placeholder {
    color: var(--cinza-claro);
    font-size: 15px;
  }
`