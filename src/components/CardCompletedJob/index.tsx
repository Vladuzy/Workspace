import {
  ReactNode,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../providers/AuthProvider";
import { useJobs } from "../../providers/Jobs";
import imgMoreInfo from "../../assets/img/more_Info.svg";
import Rating from "@material-ui/lab/Rating";
import {
  Container,
  InfoContainer,
  InfoContainerTitle,
  InfoContainerSubTitle,
  PopUpContainer
} from "./style";
import { useHistory } from "react-router-dom";
import api from "../../service/api";
import WorkDescriptionDesktop from '../DESKTOP/WorkDescriptionDesktop'
import { useViewport } from '../../providers/GetViewport'

interface UserCurrenInfo {
  name: string;
  type: string;
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

interface CartCompletedJobProps {
  title: string;
  rating: string;
  userId: string;
  acceptedCandidateId: string;
  id: string;
  pageType: string;
}

const CardCompletedJob = ({
  title,
  userId,
  acceptedCandidateId,
  rating,
  id,
  pageType,
}: CartCompletedJobProps) => {
  const [completedOpen, setCompletedOpen] = useState<boolean>(false as boolean)
  const { viewport: { width } } = useViewport()
  const { getListUserEmployerCompletedJobs, getListUserWorkerCompletedJobs } =
    useJobs();
  const { userLoggedInfo, token } = useAuth();
  const [loading, setLoading] = useState(true);
  const [userCurrentInfo, setUserCurrentInfo] = useState({} as UserCurrenInfo);
  const history = useHistory();
  const handleClick = () => {
    if (width > 1266) {
      setCompletedOpen(true)
    } else {
      history.push(`/works/${id}`);
    }
  };

  const getInfoCurrentUser = (
    userWantedId: string,
    setLoading: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .get(`/users/${userWantedId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setUserCurrentInfo(response.data);

        setLoading(false);
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (pageType === "worker") {
      getInfoCurrentUser(userId, setLoading);
    } else if (pageType === "employer") {
      getInfoCurrentUser(acceptedCandidateId, setLoading);
    }
    if (userLoggedInfo.type === "employer") {
      getListUserEmployerCompletedJobs();
    } else if (userLoggedInfo.type === "worker") {
      getListUserWorkerCompletedJobs();
    }
  }, []);

  return (
    <>
    {completedOpen && (<PopUpContainer> <WorkDescriptionDesktop setPopUp={setCompletedOpen} id={id}/> </PopUpContainer>)}
    <Container onClick={handleClick}>
      <FaUserCircle className="Avatar-Container" />
      <InfoContainer>
        <InfoContainerTitle>
          {title.length < 12 ? title : `${title.substring(0, 16)}...`}
        </InfoContainerTitle>
        <InfoContainerSubTitle>
          {loading ? "Carregando..." : userCurrentInfo.name}
        </InfoContainerSubTitle>
        <Rating
          precision={0.5}
          name="read-only"
          value={Number(rating)}
          readOnly
        />
      </InfoContainer>
    </Container>
    </>
  );
};

export default CardCompletedJob;
