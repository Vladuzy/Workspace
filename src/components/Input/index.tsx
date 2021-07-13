import { InputStyled } from "./styles";

interface inputProps {
  width?: string;
  heigth?: string;
  color?: string;
  backColor?: string;
  borderRadius?: string;
  border?: string;
  fontSize?: string;
  padding?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  register?: any;
}

const Input = (
  {
    width = "274px",
    heigth = "40px",
    color = "var(--cinza-claro)",
    backColor = "var(--cinza-input-color)",
    borderRadius = "10px",
    border = "1px solid var(--cinza-claro)",
    fontSize = "18px",
    padding = "10px",
    placeholder = "var(--cinza-claro)",
    register,
    type,
    name,
  }: inputProps,
  { ...rest }
) => {
  return (
    <InputStyled
      type={type}
      width={width}
      heigth={heigth}
      color={color}
      backColor={backColor}
      borderRadius={borderRadius}
      border={border}
      fontSize={fontSize}
      padding={padding}
      placeholder={placeholder}
      {...register(name)}
      {...rest}
    />
  );
};

export default Input;
