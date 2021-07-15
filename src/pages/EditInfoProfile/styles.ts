import styled from 'styled-components'

export const EditProfileContainer = styled.main`
  width: 285px;
  margin: 0 auto;
  color: var(--roxo-tema-principal);

  & > svg {
    margin-top: 10px;
    width: 35px;
    height: 35px;
    margin-left: calc(100% - 40px);
  }

  & > h2 {
    font-family: 'Saira', sans-serif;
    margin: 0 0 15px 0;;
    font-size: 20px;
    font-weight: 400;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2px;

  & > div {
    & > span {
      flex-grow: 1;
      margin-left: 10px;
      font-size: 12px;
      color: var(--vermelho);
      display: block;
      height: 15px;
    }
  }

  & > div:last-of-type {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > span {
      width: 46%;
    }
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