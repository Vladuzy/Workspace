import {
  HeaderContainer,
  MainContainer,
  JobInfoContainer,
  SpecialInfoContainer,
  DescriptionInfoContainer,
  ImageEdit,
  StatusWork,
  SpanCandidates,
  InfoWorker,
  ContainerCard,
  InfoContainerSubTitleCard,
  ContainerButton,
  ImageContainer,
  ImageContainerHeader,
  BackgroundContainer,
} from "./styles";
import CategoryTag from "../../CategoryTag";
import imgAvatar from "../../../assets/img/Avatar.svg";
import Button from "../../Button";
import api from "../../../service/api";
import { FaDollarSign } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";

import { SetStateAction, useEffect, useState, Dispatch } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../../providers/AuthProvider";
import imgEdit from "../../../assets/img/Edit.svg";
import Loading from "../../../components/Loading";
import RatingWork from "../../RatingWork/index";
import WorksEditDesktop from "../WorksEditDesktop";

interface Params {
  id: string;
  setPopUp: Dispatch<SetStateAction<boolean>>;
}

interface Job {
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
}

interface UserInfo {
  name: string;
  img: string;
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

const WorksDescriptionDesktop = ({ id, setPopUp }: Params) => {
  const history = useHistory();
  const { token, userLoggedInfo, getUserLoggedInfo } = useAuth();
  const [editWorkOpen, setEditWorkOpen] = useState<boolean>(false as boolean);

  const [currentJob, setCurrentJob] = useState<Job>(
    (JSON.parse(localStorage.getItem("@WorkSpace:currentJob") as string) ||
      {}) as Job
  );
  const { title, valueOffered, date, description, category, location } =
    currentJob;

  const [loadingCurrentJob, setLoadingCurrentJob] = useState(true);
  const [loadingUserLoggedInfo, setLoadingUserLoggedInfo] = useState(true);
  const [loadingWorkerApplyToJob, setLoadingWorkerApplyToJob] = useState(true);
  const [loadingWorkerCancelApplyToJob, setLoadingWorkerCancelApplyToJob] =
    useState(true);
  const [loadingEmployerAcceptCandidate, setLoadingEmployerAcceptCandidate] =
    useState(true);
  const [loadingEmployerRejectCandidate, setLoadingEmployerRejectCandidate] =
    useState(true);
  const [loadingEmployerCompleteJob, setLoadingEmployerCompleteJob] =
    useState(true);

  const [loadingUserWhoCreatedJob, setLoadingUserWhoCreatedJob] =
    useState(true);

  const [loadingUserAppliedJob, setLoadingUserAppliedJob] = useState(true);
  const [loadingUserAcceptedJob, setLoadingUserAcceptedJob] = useState(true);

  const [showRating, setShowRating] = useState<boolean>(false);

  const [userWhoCreatedJob, setUserWhoCreatedJob] = useState<UserInfo>(
    {} as UserInfo
  );
  const [userAppliedJob, setUserAppliedJob] = useState<UserInfo>(
    {} as UserInfo
  );
  const [userAcceptedJob, setUserAcceptedJob] = useState<UserInfo>(
    {} as UserInfo
  );

  const getASpecificJob = (
    jobId: string,
    setLoadingCurrentJob: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .get(`/jobs/${jobId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCurrentJob(response.data);
        localStorage.setItem(
          "@WorkSpace:currentJob",
          JSON.stringify(response.data)
        );
        console.log(response);
        setLoadingCurrentJob(false);
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

  const userWorkerApplyToJob = (
    jobId: string,
    setLoadingWorkerApplyToJob: Dispatch<SetStateAction<boolean>>
  ) => {
    const applyToJobData = {
      appliedCandidateId: userLoggedInfo.id,
    };

    api
      .patch(`/jobs/${jobId}`, applyToJobData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLoadingWorkerApplyToJob(false);
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

  const userWorkerCancelApplyToJob = (
    jobId: string,
    setLoadingWorkerCancelApplyToJob: Dispatch<SetStateAction<boolean>>
  ) => {
    const applyToJobData = {
      appliedCandidateId: "Sem Candidatos",
    };

    api
      .patch(`/jobs/${jobId}`, applyToJobData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLoadingWorkerCancelApplyToJob(false);
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

  const userEmployerAcceptCandidate = (
    appliedCandidateId: string,
    jobId: string,
    setLoadingEmployerAcceptCandidate: Dispatch<SetStateAction<boolean>>
  ) => {
    const acceptCandidateData = {
      status: "inProgress",
      appliedCandidateId: "",
      acceptedCandidateId: appliedCandidateId,
    };

    api
      .patch(`/jobs/${jobId}`, acceptCandidateData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response);
        setLoadingEmployerAcceptCandidate(false);
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

  const userEmployerRejectCandidate = (
    appliedCandidateId: string,
    rejectedCandidatesIds: string[],
    jobId: string,
    setLoadingEmployerRejectCandidate: Dispatch<SetStateAction<boolean>>
  ) => {
    const rejectedCandidates = [...rejectedCandidatesIds, appliedCandidateId];

    const rejectCandidateData = {
      status: "isWaiting",
      appliedCandidateId: "Sem Candidatos",
      acceptedCandidateId: "",
      rejectedCandidatesIds: rejectedCandidates,
    };

    api
      .patch(`/jobs/${jobId}`, rejectCandidateData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLoadingEmployerRejectCandidate(false);
      })
      .catch((err) => console.log(err));
  };

  const userEmployerCompleteJob = (
    jobId: string,
    setLoadingEmployerCompleteJob: Dispatch<SetStateAction<boolean>>
  ) => {
    const completeJobData = {
      status: "isCompleted",
    };

    api
      .patch(`/jobs/${jobId}`, completeJobData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setLoadingEmployerCompleteJob(false);
        //Show Toast
      })
      .catch((err) => console.log(err));
  };

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
        // localStorage.setItem(
        //   "@WorkSpace:userWhoCreatedJob",
        //   JSON.stringify(response.data)
        // );
        setLoadingUserWhoCreatedJob(false);
      })
      .catch((err) => console.log(err));
  };

  const getUserAppliedJob = (
    userEmployerId: string,
    setLoadingUserAppliedJob: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .get(`/users/${userEmployerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setUserAppliedJob(response.data);
        setLoadingUserAppliedJob(false);
      })
      .catch((err) => console.log(err));
  };

  const getUserAcceptedJob = (
    userEmployerId: string,
    setLoadingUserAcceptedJob: Dispatch<SetStateAction<boolean>>
  ) => {
    api
      .get(`/users/${userEmployerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setUserAcceptedJob(response.data);
        setLoadingUserAcceptedJob(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserLoggedInfo(setLoadingUserLoggedInfo);
    getASpecificJob(id, setLoadingCurrentJob);
  }, []);

  useEffect(() => {
    if (!loadingCurrentJob) {
      getUserWhoCreatedJob(currentJob.userId, setLoadingUserWhoCreatedJob);
      if (currentJob.appliedCandidateId !== "Sem Candidatos") {
        getUserAppliedJob(
          currentJob.appliedCandidateId,
          setLoadingUserAppliedJob
        );
      }

      if (currentJob.acceptedCandidateId !== "") {
        getUserAcceptedJob(
          currentJob.acceptedCandidateId,
          setLoadingUserAcceptedJob
        );
      }
    }
  }, [loadingCurrentJob]);

  useEffect(() => {
    if (!loadingWorkerApplyToJob) {
      getASpecificJob(id, setLoadingCurrentJob);
      getUserLoggedInfo(setLoadingUserLoggedInfo);
      history.go(0);
    }
  }, [loadingWorkerApplyToJob]);

  useEffect(() => {
    if (!loadingWorkerCancelApplyToJob) {
      getASpecificJob(id, setLoadingCurrentJob);
      getUserLoggedInfo(setLoadingUserLoggedInfo);
      history.go(0);
    }
  }, [loadingWorkerCancelApplyToJob]);

  useEffect(() => {
    if (!loadingEmployerAcceptCandidate) {
      getASpecificJob(id, setLoadingCurrentJob);
      getUserLoggedInfo(setLoadingUserLoggedInfo);
      history.go(0);
    }
  }, [loadingEmployerAcceptCandidate]);

  useEffect(() => {
    if (!loadingEmployerRejectCandidate) {
      getASpecificJob(id, setLoadingCurrentJob);
      getUserLoggedInfo(setLoadingUserLoggedInfo);
      history.go(0);
    }
  }, [loadingEmployerRejectCandidate]);

  useEffect(() => {
    if (!loadingEmployerCompleteJob) {
      getASpecificJob(id, setLoadingCurrentJob);
      getUserLoggedInfo(setLoadingUserLoggedInfo);
      // <Redirect to={`works/rating/${currentJob.id}`} />;
      // history.push(`/rating/${currentJob.id}`);
      setShowRating(true);
    }
  }, [loadingEmployerCompleteJob]);

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {editWorkOpen && (
        <WorksEditDesktop setEditWorkOpen={setEditWorkOpen} id={id} />
      )}
      <BackgroundContainer>
        {showRating && <RatingWork setShowRating={setShowRating} id={id} />}
        {loadingCurrentJob &&
        loadingUserLoggedInfo &&
        loadingUserWhoCreatedJob ? (
          <Loading />
        ) : (
          <>
            {" "}
            <HeaderContainer>
              <IoMdClose onClick={() => setPopUp(false)} />
              <ImageContainerHeader
                src={
                  userWhoCreatedJob.img === ""
                    ? imgAvatar
                    : userWhoCreatedJob.img
                }
                alt="Icone Avatar"
              />
            </HeaderContainer>
            <MainContainer>
              <JobInfoContainer>
                <h2>{title}</h2>
                {/* Foi necessário deixar == para comparar string e number */}
                {currentJob.userId === userLoggedInfo.id &&
                  currentJob.status === "isWaiting" &&
                  currentJob.appliedCandidateId === "Sem Candidatos" && (
                    <ImageEdit
                      onClick={() => setEditWorkOpen(true)}
                      src={imgEdit}
                      alt=""
                    />
                  )}

                {loadingUserWhoCreatedJob ? (
                  <h3>Carregando...</h3>
                ) : (
                  <h3>{userWhoCreatedJob.name}</h3>
                )}

                <SpecialInfoContainer>
                  <div>
                    <FaDollarSign />
                    <span>{valueOffered}</span>
                  </div>
                  <div>
                    <FiClock />
                    <span>{date}</span>
                  </div>
                </SpecialInfoContainer>
              </JobInfoContainer>
              <DescriptionInfoContainer>
                <h2>Descrição do Trabalho</h2>
                <CategoryTag category={category} />
                <p>{description}</p>
                <div>
                  <MdLocationOn />
                  <span>{location}</span>
                </div>
                {currentJob.acceptedCandidateId !== "" ? (
                  <InfoWorker
                    onClick={() =>
                      history.push(
                        `/profileUser/${currentJob.acceptedCandidateId}`
                      )
                    }
                  >
                    <h2>Freelancer Contratado</h2>
                    <ContainerCard>
                      <ImageContainer
                        src={
                          userAcceptedJob.img === ""
                            ? imgAvatar
                            : userAcceptedJob.img
                        }
                        alt="Icone Avatar"
                      />
                      <InfoContainerSubTitleCard>
                        {loadingUserAcceptedJob
                          ? "Carregando..."
                          : userAcceptedJob.name}
                      </InfoContainerSubTitleCard>
                    </ContainerCard>
                  </InfoWorker>
                ) : (
                  currentJob.appliedCandidateId !== "Sem Candidatos" && (
                    <InfoWorker
                      onClick={() =>
                        history.push(
                          `/profileUser/${currentJob.appliedCandidateId}`
                        )
                      }
                    >
                      <h2>Candidato</h2>
                      <ContainerCard>
                        <ImageContainer
                          src={
                            userAppliedJob.img === ""
                              ? imgAvatar
                              : userAppliedJob.img
                          }
                          alt="Icone Avatar"
                        />
                        <InfoContainerSubTitleCard>
                          {loadingUserAppliedJob
                            ? "Carregando..."
                            : userAppliedJob.name}
                        </InfoContainerSubTitleCard>
                      </ContainerCard>
                    </InfoWorker>
                  )
                )}
              </DescriptionInfoContainer>
              {currentJob.status === "isWaiting" ? (
                userLoggedInfo.type === "worker" ? (
                  !currentJob.rejectedCandidatesIds.includes(
                    userLoggedInfo.id
                  ) ? (
                    // Worker verificando se está aplicado
                    currentJob.appliedCandidateId === userLoggedInfo.id ? (
                      <Button
                        text="Cancelar Aplicação"
                        width="230px"
                        heigth="40px"
                        borderRadius="20px"
                        handleClick={() => {
                          userWorkerCancelApplyToJob(
                            id,
                            setLoadingWorkerCancelApplyToJob
                          );
                        }}
                        backColor="var(--roxo-tema-principal)"
                      />
                    ) : (
                      <Button
                        text="Aplicar"
                        width="230px"
                        heigth="40px"
                        borderRadius="20px"
                        handleClick={() => {
                          userWorkerApplyToJob(id, setLoadingWorkerApplyToJob);
                        }}
                        backColor="var(--roxo-tema-principal)"
                      />
                    )
                  ) : (
                    <StatusWork applyRejected>Não pode se aplicar</StatusWork>
                  )
                ) : //Employer Verificando se tem candidatos aplicados
                currentJob.appliedCandidateId !== "Sem Candidatos" ? (
                  <ContainerButton>
                    <Button
                      text="Recusar"
                      width="230px"
                      max-Width="230px"
                      heigth="40px"
                      borderRadius="20px"
                      border="1px solid var(--roxo-tema-principal)"
                      color="var(--roxo-tema-principal)"
                      backColor="var(--cinza-ultra-claro-main)"
                      handleClick={() => {
                        userEmployerRejectCandidate(
                          currentJob.appliedCandidateId,
                          currentJob.rejectedCandidatesIds,
                          id,
                          setLoadingEmployerRejectCandidate
                        );
                      }}
                    />
                    <Button
                      text="Aceitar"
                      width="230px"
                      max-Width="230px"
                      heigth="40px"
                      borderRadius="20px"
                      backColor="var(--roxo-tema-principal)"
                      handleClick={() => {
                        userEmployerAcceptCandidate(
                          currentJob.appliedCandidateId,
                          id,
                          setLoadingEmployerAcceptCandidate
                        );
                      }}
                    />
                  </ContainerButton>
                ) : (
                  <SpanCandidates>
                    Este trabalho não possui nenhum candidato ainda...
                  </SpanCandidates>
                )
              ) : currentJob.status === "inProgress" ? (
                userLoggedInfo.type === "worker" ? (
                  <StatusWork activeWork>Trabalho Ativo</StatusWork>
                ) : (
                  <>
                    <Button
                      text="Concluir"
                      width="230px"
                      heigth="40px"
                      borderRadius="20px"
                      handleClick={() => {
                        userEmployerCompleteJob(
                          id,
                          setLoadingEmployerCompleteJob
                        );
                      }}
                      backColor="var(--roxo-tema-principal)"
                    />
                    {/* <RatingWork id={currentJob.id} showModal={showRating} /> */}
                  </>
                )
              ) : (
                <StatusWork completedWork>Concluído</StatusWork>
              )}
            </MainContainer>
          </>
        )}
      </BackgroundContainer>
    </>
  );
};

export default WorksDescriptionDesktop;
