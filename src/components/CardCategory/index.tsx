import { Dispatch, SetStateAction } from "react";
import { Container, ContainSvg } from "./style";

interface CardCategoryProps {
  title: string,
  svg: string,
  svgCor?: string,
  color?: string,
  background?: string,
  isActive: boolean;
  limitError: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>
}

const CardCategory = ({ title, svg, color, background, svgCor, isActive, setIsActive, limitError }: CardCategoryProps) => {

  const handleClick = () => {
    if (limitError && isActive) {
      setIsActive(!isActive)
    } 
    else if (!limitError) {
      setIsActive(!isActive)
    }
  }

  return (
    <Container onClick={handleClick} active={isActive} color={color} background={background}>
      <h4>{title}</h4>
      <ContainSvg svg={svg} svgCor={svgCor} active={isActive} />
    </Container>
  );
};

export default CardCategory;