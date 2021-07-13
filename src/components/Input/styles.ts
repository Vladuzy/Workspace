import styled from "styled-components";

interface input {
  width: string;
  heigth: string;
  color: string;
  backColor: string;
  borderRadius: string;
  border: string;
  fontSize: string;
  padding: string;
}

export const InputStyled = styled.input<input>`
  width: ${({ width }) => width};
  height: ${({ heigth }) => heigth};
  color: ${({ color }) => color};
  background-color: ${({ backColor }) => backColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  padding: ${({ padding }) => padding};

  &::placeholder {
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize};
  }
`;
