import { Redirect, useHistory, useParams } from "react-router-dom";
import { SetStateAction, useEffect, useState, Dispatch } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { useMenuFooter } from "../../providers/MenuFooterProvider";
import Footer from "../../components/Footer";
import {
  Container,
  StyledMoreInfo,
  StyleMain,
  SectionExp,
  SectionCategories,
  SectionContact,
  StyledNoInfo,
  JobsDone,
  ListJobs,
  StyleBody,
  CategoriesContainer,
  MediaFooter,
} from "./style";
import { useJobs } from "../../providers/Jobs";
import CardCompletedJob from "../../components/CardCompletedJob";
import Loading from "../../components/Loading/index";
import CardCategoryProfile from "../../components/CardCategoryProfile";
import HeaderSpecificUser from "../../components/HeaderSpecificUser/index";
import api from "../../service/api";
import { useWatch } from "react-hook-form";

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

interface Params {
  id: string;
}

const ProfileSpecificUser = () => {
  const { token, getInfoFromASpecificUser, userWantedInfo } = useAuth();
  const { setInHome, setInWorks, setInProfile } = useMenuFooter();
  const [loading, setLoading] = useState(true);
  const [listCompletedJobsSpecificUser, setListCompletedJobsSpecificUser] =
    useState<Job[]>([] as Job[]);

  const { id } = useParams() as Params;

  const getListUserEmployerCompletedJobs = (
    id: string,
    setListCompletedJobsSpecificUser: Dispatch<SetStateAction<Job[]>>
  ) => {
    api
      .get(`jobs?userId=${id}&status=isCompleted`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListCompletedJobsSpecificUser(response.data);
      })
      .catch((err) => console.log(err));
  };

  const getListUserWorkerCompletedJobs = (
    id: string,
    setListCompletedJobsSpecificUser: Dispatch<SetStateAction<Job[]>>
  ) => {
    api
      .get(`jobs?acceptedCandidateId=${id}&status=isCompleted`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setListCompletedJobsSpecificUser(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getInfoFromASpecificUser(id, setLoading);
    setInHome(false);
    setInWorks(false);
    setInProfile(true);
    localStorage.setItem("@WorkSpace:inHome", "false");
    localStorage.setItem("@WorkSpace:inWorks", "false");
    localStorage.setItem("@WorkSpace:inProfile", "true");
  }, []);

  useEffect(() => {
    if (!loading) {
      if (userWantedInfo.type === "employer") {
        getListUserEmployerCompletedJobs(id, setListCompletedJobsSpecificUser);
      } else if (userWantedInfo.type === "worker") {
        getListUserWorkerCompletedJobs(id, setListCompletedJobsSpecificUser);
      }
    }
  }, [loading]);

  const { email, moreInfo } = userWantedInfo;
  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeaderSpecificUser
            id={userWantedInfo.id}
            img={userWantedInfo.img}
            type={userWantedInfo.type}
            name={userWantedInfo.name}
            rating={userWantedInfo.rating}
            listCompletedJobsSpecificUser={listCompletedJobsSpecificUser}
          />
          <StyleBody>
            {moreInfo.telephone !== "" && moreInfo.description !== "" ? (
              <StyleMain>
                <StyledMoreInfo>
                  {userWantedInfo.type === "worker" && (
                    <SectionCategories>
                      <h3>Categorias</h3>
                      <CategoriesContainer>
                        {moreInfo.categories &&
                          moreInfo.categories.map((item: string) => (
                            <CardCategoryProfile category={item} />
                          ))}
                      </CategoriesContainer>
                    </SectionCategories>
                  )}

                  <SectionContact type={userWantedInfo.type}>
                    <h3>Contato</h3>
                    <div>
                      <p>{email}</p>
                      <p>{moreInfo.telephone} </p>
                    </div>
                  </SectionContact>
                </StyledMoreInfo>
                <SectionExp>
                  <h3>Experiência</h3>
                  <div>{moreInfo.description} </div>
                </SectionExp>
              </StyleMain>
            ) : (
              <StyledNoInfo>
                <div>Sem informações adicionais!</div>
              </StyledNoInfo>
            )}

            <JobsDone>
              {listCompletedJobsSpecificUser.length > 0 ? (
                <>
                  <div className="JobsDoneHeader">
                    <h3>Trabalhos Concluídos</h3>
                  </div>
                  <ListJobs>
                    {listCompletedJobsSpecificUser.map((job) => (
                      <CardCompletedJob
                        title={job.title}
                        rating={job.rating}
                        acceptedCandidateId={job.acceptedCandidateId}
                        id={job.id}
                        userId={job.userId}
                        key={job.id}
                        pageType={userWantedInfo.type}
                      ></CardCompletedJob>
                    ))}
                  </ListJobs>
                </>
              ) : (
                <>
                  <div className="JobsDoneHeader">
                    <h3>Trabalhos Concluídos</h3>
                  </div>
                  <div>
                    <div>Ainda não possui nenhum trabalho feito...</div>
                  </div>
                </>
              )}
            </JobsDone>
          </StyleBody>
          <MediaFooter>
            <Footer />
          </MediaFooter>
        </>
      )}
    </Container>
  );
};

export default ProfileSpecificUser;
