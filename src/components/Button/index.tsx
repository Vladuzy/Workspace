import { ButtonStyles } from "./styles";

interface props {
  text: string;
  handleClick: () => void;
  width: string,
  heigth: string,
  borderRadius: string,
  backColor: string,
  border: string,
  color: string,
  fontSize: string,
}

const Button = ({text,handleClick, width, heigth, borderRadius, backColor, border, color, fontSize}:props, {...rest}) => {
  return (
    <ButtonStyles 
      onClick={handleClick} 
      width={width} 
      heigth={heigth} 
      borderRadius={borderRadius} 
      backColor={backColor} 
      border={border} 
      color={color} 
      fontSize={fontSize}
      >{text}</ButtonStyles>
  );
};

export default Button;