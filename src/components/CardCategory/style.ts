import styled from "styled-components";

interface Props {
    svg: string;
    svgCor?: string;
    active: boolean
}

interface ContainerProps {
    active: boolean
    color?: string
    background?: string
}

export const Container = styled.div<ContainerProps>`
    width: 90px;
    height: 35px;
    border-radius: 10px;
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5px;
    margin-left: 5px;

    color: ${({ color, active }) => active ? color : 'var(--cinza-claro)'} ;
    background-color: ${({ background, active }) => active ? background : 'var(--cinza-ultra-claro-main)'};

    &:hover{
        cursor: pointer;
    }

    h4 {
        font-size: 12px;
    }
`

export const ContainSvg = styled.div<Props>`
    width: 22px;
    height: 22px;
    background: url(${({ svg, active, svgCor }) => active ? svgCor : svg});
    background-size: cover;
`