import { Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import Navbar from "../../components/MenuAside";
import CardWork from "../../components/CardWork";
import { useEffect, useState } from "react";
import { useJobs } from "../../providers/Jobs";
import { useMenuFooter } from "../../providers/MenuFooterProvider";
import {
  ContenerMain, 
  ListsContainer, 
  ColumnList, 
  Page, 
  ProfileDesktop,
  ListContainer,
} from "./style"


import ButtonAdd from "../../components/ButtonAdd";
import Loading from "../../components/Loading/index";
import Profile from "../Profile";

const DesktopHome=()=>{
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
    const totalGains =
      type === "worker" &&
      listCompletedJobs
        .reduce((acc, acumulater) => acumulater.valueOffered + acc, 0)
        .toFixed(2);
  
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
    }, [loadingUserLoggedInfo]);
  
    if (!token) {
      return <Redirect to="/" />;
    }
  
    return (
        <Page>
        <Navbar/>
        <ContenerMain>

      {loadingUserLoggedInfo ? (
        <Loading />
      ) : (<>
          <h1>Trabalhos</h1>

          <ListsContainer>
          <ColumnList>
                <h1>ATIVOS</h1>
            { type === "worker" ? (
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
          <h1>APLICADOS</h1>
            <ListContainer>
              {listUserWorkerAppliedJobs.map((job) => (
                <CardWork job={job} key={job.id} />
                ))}
            </ListContainer>
             </ColumnList>
          ) : (
              <ColumnList>
              <h1>ATUAIS</h1>
            <ListContainer>
              {listUserEmployerCurrentJobs.map((job) => (
                <CardWork job={job} key={job.id} />
              ))}
            </ListContainer>
            </ColumnList>
          )}</>
          {type === "employer" && (
            <ButtonAdd onClick={() => history.push("/createWork")}></ButtonAdd>
          )}
</ListsContainer>
        </>
      )}
        </ContenerMain>
        <ProfileDesktop>
            <Profile/>
        </ProfileDesktop>
        </Page>
    )
}

export default DesktopHome;