import { InputStyled } from "./styles";

interface inputProps {
  width?: string;
  heigth?: string;
  color?: string;
  backColor?: string;
  borderRadius?: string;
  border?: string;
  fontSize?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  register?: any;
}

const Input = (
  {
    width = "200px",
    heigth = "32px",
    color = "var(--preto-cafe)",
    backColor = "var(--cinza-escuro)",
    borderRadius = "10px",
    border = "1px solid var(--cinza-claro)",
    fontSize = "18px",
    register,
    type,
  }: inputProps,
  { ...rest }
) => {
  return (
    <InputStyled
      width={width}
      heigth={heigth}
      color={color}
      backColor={backColor}
      borderRadius={borderRadius}
      border={border}
      fontSize={fontSize}
      {...register(type)}
      {...rest}
    />
  );
};

export default Input;
