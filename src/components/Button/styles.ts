import styled from "styled-components";

interface ButtonProps {
  width: string;
  heigth: string;
  borderRadius: string;
  backColor: string;
  border: string;
  color: string;
  fontSize: string;
}

export const ButtonStyles = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  height: ${({ heigth }) => heigth};
  background-color: ${({ backColor }) => backColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
`;
