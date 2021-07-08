import styled from "styled-components";

interface ButtonProps {
    width: string,
    heigth: string,
    borderRadius: string,
    backColor: string,
    border: string,
    color: string,
    fontSize: string,
}


export const ButtonStyles = styled.button<ButtonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.heigth};
    background-color: ${(props) => props.backColor};
    border-radius: ${(props) => props.borderRadius};
    border: ${(props) => props.border};
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
`