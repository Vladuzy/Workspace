import Footer from "../../components/Footer";
import { ListContainer, TabStyle, Header, MainHomeContainer } from "./style";
import CardWork from "../../components/CardWork";
import { useEffect, useState } from "react";
import { useJobs } from "../../providers/Jobs";
import { useAuth } from "../../providers/AuthProvider";
import { useMenuFooter } from "../../providers/MenuFooterProvider";
import { Redirect, useHistory } from "react-router-dom";
import ButtonAdd from "../../components/ButtonAdd";
import Loading from "../../components/Loading/index";

const Home = () => {
  const history = useHistory();
  const { token, userLoggedInfo, getUserLoggedInfo } = useAuth();
  const { type } = userLoggedInfo;
  const [current, setCurrent] = useState<string>("ativos" as string);

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
    <>
      {loadingUserLoggedInfo ? (
        <Loading />
      ) : (
        <MainHomeContainer>
          <Header>
            {type === "worker" ? (
              <>
                <span>Total ganho:</span>
                <div>R${totalGains}</div>
              </>
            ) : (
              <>
                <div>NÃO ESQUECER DE PENSAR EM ALGO</div>
              </>
            )}

            <div>
              <TabStyle
                id="ativos"
                current={current}
                onClick={() => setCurrent("ativos")}
              >
                ATIVOS
              </TabStyle>
              {type === "worker" ? (
                <TabStyle
                  id="aplicados"
                  current={current}
                  onClick={() => setCurrent("aplicados")}
                >
                  APLICADOS
                </TabStyle>
              ) : (
                <TabStyle
                  id="atuais"
                  current={current}
                  onClick={() => setCurrent("atuais")}
                >
                  ATUAIS
                </TabStyle>
              )}
            </div>
          </Header>

          {current === "ativos" ? (
            type === "worker" ? (
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
            )
          ) : type === "worker" ? (
            <ListContainer>
              {listUserWorkerAppliedJobs.map((job) => (
                <CardWork job={job} key={job.id} />
              ))}
            </ListContainer>
          ) : (
            <ListContainer>
              {listUserEmployerCurrentJobs.map((job) => (
                <CardWork job={job} key={job.id} />
              ))}
            </ListContainer>
          )}
          <ButtonAdd onClick={() => history.push("/createWork")}></ButtonAdd>
          <Footer minHeight="10%" />
        </MainHomeContainer>
      )}
    </>
  );
};

export default Home;
