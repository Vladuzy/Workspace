import { Container, ContainSvg } from "./style";

interface CardCategoryProps {
  title: string,
  svg: string
}

const CardCategory = ({title, svg}: CardCategoryProps) => {
  return (
    <Container>
      {title}
      <ContainSvg svg={svg}/>
    </Container>
  );
};

export default CardCategory;