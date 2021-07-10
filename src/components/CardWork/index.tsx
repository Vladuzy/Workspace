import { GiPositionMarker } from "react-icons/gi";
import { FaDollarSign } from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io";
import { FaUserCircle } from 'react-icons/fa'
import { CardContainer, CardHeader, CardFooter } from "./style";
import CategoryTag from "../CategoryTag";
import { useHistory } from 'react-router-dom'

interface CardWorkProps {
  job: {
    title: string;
    category: string;
    description: string;
    location: string;
    status: string;
    rating: string;
    valueOffered: number;
    date: string;
    appliedCandidateId: string;
    acceptedCandidateId: string;
    rejectedCandidatesIds: string[];
    userId: string;
    id: string
  }
}

const CardWork = ({ job }: CardWorkProps) => {
  const history = useHistory()
  const { title, category, valueOffered, location, id } = job;

  return (
    <CardContainer>
      <div>
        <CardHeader>
          <FaUserCircle />
          <div>
            <h2>{title}</h2>
            <CategoryTag category={category}/>
          </div>
        </CardHeader>

        <CardFooter>
          <div>
            <GiPositionMarker />
            <span>{location}</span>
          </div>
          <div>
            <FaDollarSign /> 
            <span>{valueOffered}</span>
          </div>
        </CardFooter>
      </div>
      <IoIosArrowForward onClick={() => history.push(`/works/${id}`)}/>
      
    </CardContainer>
  );
};

export default CardWork;
