import styled from "styled-components";
import CloseSvg from "../../assets/img/close.svg"

export const HeaderStyled = styled.header `
    width: 100vw;
    height: 70px;
    color: var(--roxo-tema-principal);
    display: flex;
    justify-content: flex-end;
`

export const Close = styled.div `
    background: url(${CloseSvg});
    background-size: cover;
    width: 50px;
    height: 50px;
    margin-right: 5vw;
    margin-top: 20px;
`

export const MainStyled = styled.main `
    width: 100vw;
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    p{
        color: var(--roxo-tema-principal);
        font-size: 1.4rem;
        margin-left: 8vw;
    }
`

export const Container = styled.div `
    width: 80vw;
    height: 70vh;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-self: center;
    p{
        color: black;
        margin-left: 0;
        font-size: 1.2rem
    }
`
export const ContentCards = styled.div `
    width: 100%;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
`

export const ContentForms = styled.div `
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 80px;
    textarea{
        background-color: var(--cinza-input-color);
        color: var(--cinza-claro);
        border-radius: 20px;
        &::placeholder{
            padding: 15px;
            font-family: 'Roboto Slab', serif;
            font-size: 1rem
        }
    }
`