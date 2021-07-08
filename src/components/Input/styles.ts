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
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backColor};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};

  &::placeholder {
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
  }
`;
