import {GiPositionMarker} from "react-icons/gi";
import {CgDollar} from "react-icons/cg";
import {IoIosArrowForward} from "react-icons/io"
import { Container, CardHeader, CardFooter, Category } from "./style";



interface CardWorkProps{
  work:{
    nameWork: string;
    img: string;
    category: string
  };
  key: string;
}
//
const CardWork = ({work, key}:CardWorkProps) => {
  const {nameWork, img, category}=work
  return (
    
    <Container key={key} >
      <div>
        <CardHeader>
          <img src={img} />
          <div>
            <h2>{nameWork}</h2>
            <Category >{category}</Category>
          </div>
        </CardHeader>

        <CardFooter>
          <div> <GiPositionMarker/> logal</div>
          <div> <CgDollar/> valor ofertado</div>
        </CardFooter>
      </div>
      <a href="/works/description" >
        <IoIosArrowForward/>
      </a>
    </Container>

    
    
  );
};

export default CardWork;