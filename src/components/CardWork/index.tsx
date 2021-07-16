import { GiPositionMarker } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";
import {
  CardContainer,
  CardHeader,
  CardFooter,
  ImageContainerHeader,
  PContainer,
} from "./style";
import CategoryTag from "../CategoryTag";
import { useHistory } from "react-router-dom";
import { useViewport } from "../../providers/GetViewport";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { useAuth } from "../../providers/AuthProvider";
import WorksDescriptionDesktop from "../DESKTOP/WorkDescriptionDesktop";
import api from "../../service/api";
import imgAvatar from "../../assets/img/Avatar.svg";

interface UserInfo {
  name: string;
  type: string;
  img: string;
  email: string;
  password: string;
  rating: string;
  moreInfo: {
    categories: string[];
    description: string;
    telephone: string;
  };
  id: string;
}

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
  const { userLoggedInfo, token } = useAuth();

  const [userWhoCreatedJob, setUserWhoCreatedJob] = useState<UserInfo>(
    {} as UserInfo
  );

  const [loading, setLoading] = useState(true);

  const getUserWhoCreatedJob = (
    userEmployerId: string,
    setLoadingUserWhoCreatedJob: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .get(`/users/${userEmployerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserWhoCreatedJob(response.data);
        setLoadingUserWhoCreatedJob(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserWhoCreatedJob(job.userId, setLoading);
  }, []);

  const handleOpenDescription = () => {
    if (width > 1266) {
      setPopUp(true);
    } else {
      history.push(`/works/${id}`);
    }
  };

  return (
    <>
      {popUp && <WorksDescriptionDesktop setPopUp={setPopUp} id={id} />}
      <CardContainer onClick={handleOpenDescription}>
        <div>
          <CardHeader>
            {loading ? (
              <PContainer>...</PContainer>
            ) : (
              <ImageContainerHeader
                src={
                  userWhoCreatedJob.img === ""
                    ? imgAvatar
                    : userWhoCreatedJob.img
                }
                alt="Icone Avatar"
              />
            )}
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
          </CardFooter>
        </div>
        {/* <IoIosArrowForward onClick={() => history.push(`/works/${id}`)}/> */}

        <div>
          {userLoggedInfo.type === "employer" &&
            status === "isWaiting" &&
            (appliedCandidateId === "Sem Candidatos" ? (
              <span>Sem Candidato </span>
            ) : (
              <span>Com Candidato</span>
            ))}
        </div>
      </CardContainer>
    </>
  );
};

export default CardWork;
