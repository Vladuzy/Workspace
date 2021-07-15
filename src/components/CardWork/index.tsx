import { GiPositionMarker } from "react-icons/gi";
import { FaDollarSign } from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io";
import { FaUserCircle } from 'react-icons/fa'
import { CardContainer, CardHeader, CardFooter } from "./style";
import CategoryTag from "../CategoryTag";
import { useHistory } from 'react-router-dom'
import { useViewport } from '../../providers/GetViewport'
import { useState } from "react";
import WorksDescriptionDesktop from '../DESKTOP/WorkDescriptionDesktop'

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
  const [popUp, setPopUp] = useState<boolean>(false as boolean)
  const { viewport: { width } } = useViewport()
  const history = useHistory()
  const { title, category, valueOffered, location, id } = job;

  const handleOpenDescription = () => {
    if (width > 1266) {
      setPopUp(true)
    } else {
      history.push(`/works/${id}`)
    }
  }

  return (
    <>
      {popUp && <WorksDescriptionDesktop setPopUp={setPopUp} id={id}/>}
      <CardContainer onClick={handleOpenDescription}>
        <div>
          <CardHeader>
            <FaUserCircle />
            <div>
              <h2>{title}</h2>
              <CategoryTag category={Array.isArray(category) ? category[0] : category }/>
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
        {/* <IoIosArrowForward onClick={() => history.push(`/works/${id}`)}/> */}
        
      </CardContainer>
    </>
  );
};

export default CardWork;
