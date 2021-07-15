import styled from 'styled-components'

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

export const EditProfileContainer = styled.main<Props>`
  width: 340px;
  height: ${({ type }) => type === 'worker' ? '500px' : '400px'};
  color: var(--roxo-tema-principal);
  border-radius: 15px;
  background-color: var(--cinza-escuro);
  box-shadow: -1px 8px 14px -4px #31292E;

  & > svg {
    margin-top: 10px;
    width: 35px;
    height: 35px;
    margin-left: calc(100% - 40px);
  }

  & > h2 {
    font-family: 'Saira', sans-serif;
    margin: 0 0 15px 15px;;
    font-size: 20px;
    font-weight: 400;
  }
`

export const FormContainer = styled.form<Props>`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2px;

  & > div {
    & > span {
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