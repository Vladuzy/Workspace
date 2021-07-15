import { Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../../providers/AuthProvider";
import Navbar from "../../../components/DESKTOP/MenuAside";
import CardWork from "../../../components/CardWork";
import ButtonAdd from "../../../components/ButtonAdd";
import Loading from "../../../components/Loading/index";
import { useEffect, useState } from "react";
import { useJobs } from "../../../providers/Jobs";
import { useMenuFooter } from "../../../providers/MenuFooterProvider";
import {
  ContainerMain,
  Content,
  Title,
  ListsContainer,
  ColumnList,
  ProfileDesktop,
  ListContainer,
} from "./style";
import WorksDesktop from "../WorksDesktop";
import Profile from "../../Profile";
import { useLocation } from "react-router-dom";

const DesktopHome = () => {
  let location = useLocation<string>();

  const history = useHistory();
  const { token, userLoggedInfo, getUserLoggedInfo } = useAuth();
  const { type } = userLoggedInfo;

  const {
    getListUserWorkerAppliedJobs,
    getListUserWorkerActiveJobs,
    listUserWorkerAppliedJobs,
    listUserWorkerActiveJobs,
    listCompletedJobs,
    getListUserEmployerActiveJobs,
    getListUserEmployerCurrentJobs,
    listUserEmployerActiveJobs,
    listUserEmployerCurrentJobs,
  } = useJobs();

  const { setInHome, setInProfile, setInWorks } = useMenuFooter();
  const [loadingUserLoggedInfo, setLoadingUserLoggedInfo] = useState(true);
  console.log(listCompletedJobs);
  /* const totalGains =
    type === "worker" &&
    listCompletedJobs
      .reduce((acc, acumulater) => acumulater.valueOffered + acc, 0)
      .toFixed(2); */

  useEffect(() => {
    getUserLoggedInfo(setLoadingUserLoggedInfo);
    setInHome(true);
    setInWorks(false);
    setInProfile(false);
    localStorage.setItem("@WorkSpace:inHome", "true");
    localStorage.setItem("@WorkSpace:inWorks", "false");
    localStorage.setItem("@WorkSpace:inProfile", "false");
  }, []);

  useEffect(() => {
    if (!loadingUserLoggedInfo) {
      if (type === "worker") {
        getListUserWorkerAppliedJobs();
        getListUserWorkerActiveJobs();
      } else if (type === "employer") {
        getListUserEmployerActiveJobs();
        getListUserEmployerCurrentJobs();
      }
    }
  }, [loadingUserLoggedInfo, location.pathname]);

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <ContainerMain>
      {loadingUserLoggedInfo ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          {location.pathname === "/home" ? (
            <Content>
              <Title>Trabalhos</Title>
              <ListsContainer>
                <ColumnList>
                  <Title>ATIVOS</Title>
                  {type === "worker" ? (
                    <ListContainer>
                      {listUserWorkerActiveJobs.map((job) => (
                        <CardWork job={job} key={job.id} />
                      ))}
                    </ListContainer>
                  ) : (
                    <ListContainer>
                      {listUserEmployerActiveJobs.map((job) => (
                        <CardWork job={job} key={job.id} />
                      ))}
                    </ListContainer>
                  )}
                </ColumnList>
                <>
                  {type === "worker" ? (
                    <ColumnList>
                      <Title>APLICADOS</Title>
                      <ListContainer>
                        {listUserWorkerAppliedJobs.map((job) => (
                          <CardWork job={job} key={job.id} />
                        ))}
                      </ListContainer>
                    </ColumnList>
                  ) : (
                    <ColumnList>
                      <Title>ATUAIS</Title>
                      <ListContainer>
                        {listUserEmployerCurrentJobs.map((job) => (
                          <CardWork job={job} key={job.id} />
                        ))}
                      </ListContainer>
                    </ColumnList>
                  )}
                </>
                {type === "employer" && (
                  <ButtonAdd
                    onClick={() => history.push("/createWork")}
                  ></ButtonAdd>
                )}
              </ListsContainer>
              :
            </Content>
          ) : (
            <Content>
              <WorksDesktop />
            </Content>
          )}
          <ProfileDesktop>
            <Profile />
          </ProfileDesktop>
        </>
      )}
    </ContainerMain>
  );
};

export default DesktopHome;
