import Footer from "../../components/Footer";
import { ListContainer, TabStyle, Header } from "./style";
import CardWork from "../../components/CardWork";
import { useEffect, useState } from "react";
import { useJobs } from "../../providers/Jobs";
import { useAuth } from "../../providers/AuthProvider";
import { useMenuFooter } from "../../providers/MenuFooterProvider";
import { Redirect } from "react-router-dom";

const Home = () => {
  const { token, userLoggedInfo } = useAuth();
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

  const totalGains =
    type === "worker" &&
    listCompletedJobs
      .reduce((acc, acumulater) => acumulater.valueOffered + acc, 0)
      .toFixed(2);

  useEffect(() => {
    if (type === "worker") {
      getListUserWorkerAppliedJobs();
      getListUserWorkerActiveJobs();
    } else if (type === "employer") {
      getListUserEmployerActiveJobs();
      getListUserEmployerCurrentJobs();
    }

    setInHome(true);
    setInWorks(false);
    setInProfile(false);
    localStorage.setItem("@WorkSpace:inHome", "true");
    localStorage.setItem("@WorkSpace:inWorks", "false");
    localStorage.setItem("@WorkSpace:inProfile", "false");
  }, []);

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <div>
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
      </Header>

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

      <Footer />
    </div>
  );
};

export default Home;
