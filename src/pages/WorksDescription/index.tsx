import {
  HeaderContainer,
  MainContainer,
  JobInfoContainer,
  SpecialInfoContainer,
  DescriptionInfoContainer,
} from "./styles";
import CategoryTag from "../../components/CategoryTag";
import Button from "../../components/Button";
import api from "../../service/api";
import { FaDollarSign, FaGlasses, FaUserCircle } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";

import { SetStateAction, useEffect, useState, Dispatch } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

interface Params {
  id: string;
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

const WorksDescription = () => {
  const history = useHistory();
  const { token, userLoggedInfo, getUserLoggedInfo } = useAuth();
  const { id } = useParams() as Params;

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

  const [userWhoCreatedJob, setUserWhoCreatedJob] = useState<UserInfo>(
    (JSON.parse(
      localStorage.getItem("@WorkSpace:userWhoCreatedJob") as string
    ) || {}) as UserInfo
  );

  const getASpecificJob = (
    jobId: string,
    setsetLoadingCurrentJob: Dispatch<SetStateAction<boolean>>
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
        // console.log(response);
        setLoadingEmployerRejectCandidate(false);
        //Show Toast
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

  const getUserWhoCreatedJob = (userEmployerId: string) => {
    api
      .get(`/users/${userEmployerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserWhoCreatedJob(response.data);
        localStorage.setItem(
          "@WorkSpace:userWhoCreatedJob",
          JSON.stringify(response.data)
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserLoggedInfo(setLoadingUserLoggedInfo);
    getASpecificJob(id, setLoadingCurrentJob);
    getUserWhoCreatedJob(currentJob.userId);
  }, []);

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
      history.go(0);
    }
  }, [loadingEmployerCompleteJob]);

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {loadingCurrentJob && loadingUserLoggedInfo ? (
        <p>Loading...</p>
      ) : (
        <>
          {" "}
          <HeaderContainer>
            <RiArrowLeftSLine onClick={() => history.goBack()} />
            <FaUserCircle />
          </HeaderContainer>
          <MainContainer>
            <JobInfoContainer>
              <h2>{title}</h2>
              <h3>{userWhoCreatedJob.name}</h3>

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
                  "Rejeitado"
                )
              ) : //Employer Verificando se tem candidatos aplicados
              currentJob.appliedCandidateId !== "Sem Candidatos" ? (
                <>
                  <Button
                    text="Aceitar"
                    width="230px"
                    heigth="40px"
                    borderRadius="20px"
                    handleClick={() => {
                      userEmployerAcceptCandidate(
                        currentJob.appliedCandidateId,
                        id,
                        setLoadingEmployerAcceptCandidate
                      );
                    }}
                    backColor="var(--roxo-tema-principal)"
                  />
                  <Button
                    text="Recusar"
                    width="230px"
                    heigth="40px"
                    borderRadius="20px"
                    handleClick={() => {
                      userEmployerRejectCandidate(
                        currentJob.appliedCandidateId,
                        currentJob.rejectedCandidatesIds,
                        id,
                        setLoadingEmployerRejectCandidate
                      );
                    }}
                    backColor="var(--roxo-tema-principal)"
                  />
                </>
              ) : (
                "Sem candidatos aplicados"
              )
            ) : currentJob.status === "inProgress" ? (
              userLoggedInfo.type === "worker" ? (
                "Trabalho Ativo"
              ) : (
                <Button
                  text="Concluir"
                  width="230px"
                  heigth="40px"
                  borderRadius="20px"
                  handleClick={() => {
                    userEmployerCompleteJob(id, setLoadingEmployerCompleteJob);
                  }}
                  backColor="var(--roxo-tema-principal)"
                />
              )
            ) : (
              "Concluido"
            )}
          </MainContainer>
        </>
      )}
    </>
  );
};

export default WorksDescription;
