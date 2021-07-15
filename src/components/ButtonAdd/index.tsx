import { AiFillPlusCircle } from 'react-icons/ai'
import { ButtonADD } from "./style";
const ButtonAdd = ({ ...rest }) => {
  return (
    <ButtonADD type="button" {...rest}>
      <AiFillPlusCircle className="Button"></AiFillPlusCircle>
    </ButtonADD>
  );
};
export default ButtonAdd;
