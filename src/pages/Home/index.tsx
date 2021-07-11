import Footer from "../../components/Footer";
import { ListContainer, TabStyle, Header } from "./style";
import CardWork from "../../components/CardWork";
import { useEffect, useState } from "react";
import { useJobs } from "../../providers/Jobs";
import { useAuth } from "../../providers/AuthProvider";
import { useMenuFooter } from "../../providers/MenuFooterProvider";
import { Redirect } from "react-router-dom";

const Home = () => {
  const { token } = useAuth();
  const [current, setCurrent] = useState<string>("ativos" as string);
  const [totalGain, setTotalGain] = useState<string>("0" as string);

  const {
    getListUserWorkerAppliedJobs,
    getListUserWorkerActiveJobs,
    listUserWorkerAppliedJobs,
    listUserWorkerActiveJobs,
  } = useJobs();

  const { setInHome, setInProfile, setInWorks } = useMenuFooter();

  const listApplied = listUserWorkerAppliedJobs;
  const listActive = listUserWorkerActiveJobs;

  const addGains = () => {
    const num = Number(totalGain);
    //reducer da lista de concluidos pra somar a quantidade total ganha
    const stg = num.toFixed(2);
    setTotalGain(stg);
  };

  useEffect(() => {
    getListUserWorkerAppliedJobs();
    getListUserWorkerActiveJobs();
    addGains();
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
        <span>Total ganho:</span>
        <div>R${totalGain}</div>
      </Header>

      <div>
        <TabStyle
          id="ativos"
          current={current}
          onClick={() => setCurrent("ativos")}
        >
          ATIVOS
        </TabStyle>
        <TabStyle
          id="aplicados"
          current={current}
          onClick={() => setCurrent("aplicados")}
        >
          APLICADOS
        </TabStyle>
      </div>

      {current === "ativos" ? (
        <ListContainer>
          {/* <CardWork
              key="1"
              work={{
              nameWork: "Remoção de vespas",
              category: "Gerais",
              valorOferecido: "400,00",
              local: "Rua dos Mineiros",
            }}
            /> */}
          {listActive.map((job) => (
            <CardWork job={job} key={job.id} />
          ))}
        </ListContainer>
      ) : (
        <ListContainer>
          {/* <CardWork
              key="1"
              work={{
              nameWork: "Remoção de abelhas",
              category: "Gerais",
              valorOferecido: "300,00",
              local: "Rua dos Mineiros",
            }}
            /> */}
          {listApplied.map((job) => (
            <CardWork job={job} key={job.id} />
          ))}
        </ListContainer>
      )}

      <Footer />
    </div>
  );
};

export default Home;
