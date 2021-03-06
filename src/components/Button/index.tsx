import { ButtonStyles } from "./styles";

interface props {
  text: string;
  handleClick?: () => void;
  maxWidth?: string;
  width?: string;
  heigth?: string;
  borderRadius?: string;
  backColor?: string;
  border?: string;
  color?: string;
  fontSize?: string;
  type?: string;
}

const Button = (
  {
    text,
    handleClick,
    maxWidth = "inital",
    width = "274px",
    heigth = "56px",
    borderRadius = "8px",
    backColor = "var(--roxo-tema-principal)",
    border = "none",
    color = "var(--cinza-escuro)",
    fontSize = "16px",
  }: props,
  { ...rest }
) => {
  return (
    <ButtonStyles
      onClick={handleClick}
      maxWidth={maxWidth}
      width={width}
      heigth={heigth}
      borderRadius={borderRadius}
      backColor={backColor}
      border={border}
      color={color}
      fontSize={fontSize}
    >
      {text}
    </ButtonStyles>
  );
};

export default Button;
