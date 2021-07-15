import { Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
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
import Button from "../../components/Button";
import CardCompletedJob from "../../components/CardCompletedJob";
import Loading from "../../components/Loading/index";
import CardCategoryProfile from "../../components/CardCategoryProfile";

//DESKTOP
import { useViewport } from "../../providers/GetViewport";
import MoreInfoProfileDesktop from "../../components/DESKTOP/MoreInfoProfileDesktop";

const Profile = () => {
  const { viewport: { width } } = useViewport()
  const [addInfoOpen, setAddInfoOpen] = useState<boolean>(false as boolean)

  const { token, getUserLoggedInfo, userLoggedInfo } = useAuth();
  const { setInHome, setInWorks, setInProfile } = useMenuFooter();
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const { listCompletedJobs } = useJobs();

  useEffect(() => {
    getUserLoggedInfo(setLoading);
    setInHome(false);
    setInWorks(false);
    setInProfile(true);
    localStorage.setItem("@WorkSpace:inHome", "false");
    localStorage.setItem("@WorkSpace:inWorks", "false");
    localStorage.setItem("@WorkSpace:inProfile", "true");
  }, []);

  const { email, moreInfo } = userLoggedInfo;
  console.log(moreInfo);
  if (!token) {
    return <Redirect to="/" />;
  }

  const handleAddInfo = () => {
    if (width > 1266) {
      setAddInfoOpen(true)
    } else {
      history.push("/moreInfoProfile");
    }
  };

  return (
    <>
      {addInfoOpen && <MoreInfoProfileDesktop setAddInfoOpen={setAddInfoOpen}/>}
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <StyleBody>
              {moreInfo.telephone !== "" && moreInfo.description !== "" ? (
                <StyleMain>
                  <StyledMoreInfo>
                    {userLoggedInfo.type === "worker" && (
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

                    <SectionContact type={userLoggedInfo.type}>
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
                  <div>Adicione o restante de suas informações!</div>
                  <Button
                    text="Adicionar"
                    width="150px"
                    heigth="40px"
                    borderRadius="20px"
                    handleClick={handleAddInfo}
                  />
                </StyledNoInfo>
              )}

              <JobsDone>
                {listCompletedJobs.length > 0 ? (
                  <>
                    <div className="JobsDoneHeader">
                      <h3>Trabalhos Concluídos</h3>
                    </div>
                    <ListJobs>
                      {listCompletedJobs.map((job) => (
                        <CardCompletedJob
                          title={job.title}
                          rating={job.rating}
                          acceptedCandidateId={job.acceptedCandidateId}
                          id={job.id}
                          userId={job.userId}
                          key={job.id}
                          pageType={userLoggedInfo.type}
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
                      <div>
                        {userLoggedInfo.type === "worker"
                          ? "Parece que você não possui nenhum trabalho feito ainda... "
                          : "Parece que nenhum dos seus trabalhos foi concluído ainda..."}
                      </div>
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
    </>
  );
};

export default Profile;
