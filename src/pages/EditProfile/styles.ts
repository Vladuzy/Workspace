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
    height: 60vh;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    align-self: center;
    p{
        color: black;
        margin-left: 0;
        font-size: 1.2rem
    }
`