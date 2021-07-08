import { GiPositionMarker } from "react-icons/gi";
import { CgDollar } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserCircle } from 'react-icons/fa'
import { CardContainer, CardHeader, CardFooter, Category } from "./style";
import { useState } from "react";

interface CardWorkProps {
  work: {
    nameWork: string;
    img?: string;
    category: string;
    local: string;
    valorOferecido: string
  };
}
//
const CardWork = ({ work }: CardWorkProps) => {
  const { nameWork, category, valorOferecido, local } = work;
  const [color] = useState<string>((): string => {
    switch (category) {
      case 'Limpeza':
        return 'var(--vermelho)'

      case 'Pintura':
        return 'var(--amarelo)'

      case 'Eletricista':
        return 'var(--azul)'

      case 'Encanador':
        return 'var(--roxo-categoria)'

      case 'Gerais':
        return 'var(--verde)'

      default:
        return ''
    }
  })
  

  return (
    <CardContainer >
      <div>
        <CardHeader>
          <FaUserCircle />
          <div>
            <h2>{nameWork}</h2>
            <Category color={color}>{category}</Category>
          </div>
        </CardHeader>

        <CardFooter>
          <div>
            <GiPositionMarker /> 
            <span>{local}</span>
          </div>
          <div>
            <CgDollar /> 
            <span>{valorOferecido}</span>
          </div>
        </CardFooter>
      </div>
      <a href="/works/description">
        <IoIosArrowForward />
      </a>
    </CardContainer>
  );
};

export default CardWork;
