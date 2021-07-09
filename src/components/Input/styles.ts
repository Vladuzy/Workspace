import styled from "styled-components";

interface input {
  width: string;
  heigth: string;
  color: string;
  backColor: string;
  borderRadius: string;
  border: string;
  fontSize: string;
}

export const InputStyled = styled.input<input>`
  width: ${({ width }) => width};
  height: ${({ heigth }) => heigth};
  color: ${({ color }) => color};
  background-color: ${({ backColor }) => backColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  padding-left: 15px;

  &::placeholder {
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize};
  }
`;
