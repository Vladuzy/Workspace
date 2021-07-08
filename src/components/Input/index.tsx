import { InputStyled } from "./styles";

interface inputProps {
  width: string,
  heigth: string,
  color: string,
  backColor: string,
  borderRadius: string,
  border: string,
  fontSize: string,
}

const Input = ({width, heigth, color, backColor, borderRadius, border, fontSize}:inputProps, {...rest}) => {
  return (
    <InputStyled 
      width={width} 
      heigth={heigth} 
      color={color} 
      backColor={backColor} 
      borderRadius={borderRadius} 
      border={border} 
      fontSize={fontSize}
      {...rest}
    />
  );
};

export default Input;