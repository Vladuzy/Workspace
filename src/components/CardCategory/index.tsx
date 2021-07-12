import { Dispatch, SetStateAction, useState } from "react";
import { Container, ContainSvg } from "./style";

interface CardCategoryProps {
  title: string,
  svg: string,
  svgCor?: string,
  color?: string,
  background?: string,
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>
}

const CardCategory = ({ title, svg, color, background, svgCor, isActive, setIsActive }: CardCategoryProps) => {

  return (
    <Container onClick={() => setIsActive(!isActive)} active={isActive} color={color} background={background}>
      <h4>{title}</h4>
      <ContainSvg svg={svg} svgCor={svgCor} active={isActive} />
    </Container>
  );
};

export default CardCategory;