import { GiPositionMarker } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { CardContainer, CardHeader, CardFooter } from "./style";
import CategoryTag from "../CategoryTag";
import { useHistory } from "react-router-dom";
import { useViewport } from "../../providers/GetViewport";
import { useState } from "react";
import { useAuth } from "../../providers/AuthProvider";

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
    id: string;
  };
}

const CardWork = ({ job }: CardWorkProps) => {
  const [popUp, setPopUp] = useState<boolean>(false as boolean);
  const {
    viewport: { width },
  } = useViewport();
  const history = useHistory();
  const {
    title,
    category,
    valueOffered,
    location,
    id,
    appliedCandidateId,
    status,
  } = job;
  const { userLoggedInfo } = useAuth();

  return (
    <CardContainer onClick={() => history.push(`/works/${id}`)}>
      <div>
        <CardHeader>
          <FaUserCircle />
          <div>
            <h2>{title}</h2>
            <CategoryTag
              category={Array.isArray(category) ? category[0] : category}
            />
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
          <div>
            {userLoggedInfo.type === "employer" &&
              status === "isWaiting" &&
              (appliedCandidateId === "Sem Candidatos" ? (
                <span>Sem Candidato </span>
              ) : (
                <span>Com Candidato</span>
              ))}
          </div>
        </CardFooter>
      </div>
      {/* <IoIosArrowForward onClick={() => history.push(`/works/${id}`)}/> */}
    </CardContainer>
  );
};

export default CardWork;
