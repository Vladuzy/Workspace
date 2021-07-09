import { GiPositionMarker } from "react-icons/gi";
import { FaDollarSign } from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io";
import { FaUserCircle } from 'react-icons/fa'
import { CardContainer, CardHeader, CardFooter } from "./style";
import CategoryTag from "../CategoryTag";

interface CardWorkProps {
  work: {
    nameWork: string;
    img?: string;
    category: string;
    local: string;
    valorOferecido: string;
  };
}

const CardWork = ({ work }: CardWorkProps) => {
  const { nameWork, category, valorOferecido, local } = work;

  return (
    <CardContainer>
      <div>
        <CardHeader>
          <FaUserCircle />
          <div>
            <h2>{nameWork}</h2>
            <CategoryTag category={category}/>
          </div>
        </CardHeader>

        <CardFooter>
          <div>
            <GiPositionMarker />
            <span>{local}</span>
          </div>
          <div>
            <FaDollarSign /> 
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
