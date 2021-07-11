import styled from "styled-components";

interface Props {
    svg: string;
}

export const Container = styled.div `
    width: 125px;
    height: 40px;
    background-color: var(--cinza-ultra-claro-main);
    border-radius: 10px;
    color: var(--cinza-claro);
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 5px;
    margin-left: 5px;
`

export const ContainSvg = styled.div<Props>`
    width: 30px;
    height: 30px;
    background: url(${({svg}) => svg});
    background-size: cover;
`