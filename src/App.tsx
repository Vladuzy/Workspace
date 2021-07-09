import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { useJobs } from "./providers/Jobs";
import { useAuth } from "./providers/AuthProvider";

function App() {
  const {
    token,
    handleRegister,
    handleLogin,
    getUserLoggedInfo,
    getInfoFromASpecificUser,
    addMoreInfoUserEmployer,
    addMoreInfoUserWorker,
    editUserEmployer,
    editUserWorker,
  } = useAuth();

  const {
    userEmployerCreateJob,
    userEmployerEditJob,
    getASpecificJob,
    userEmployerAcceptCandidate,
    userEmployerRejectCandidate,
    userEmployerCompleteJob,
    userEmployerRatingJob,
    userWorkerApplyToJob,
  } = useJobs();

  return (
    <>
      <button
        onClick={() =>
          handleRegister({
            email: "newUser234@gmail.com",
            password: "123456",
            name: "newUser234",
            type: "worker",
            rating: "",
            moreInfo: {
              categories: [],
              description: "",
              telephone: "",
            },
          })
        }
      >
        Register
      </button>
      <button
        onClick={() =>
          addMoreInfoUserEmployer({
            moreInfo: {
              categories: [],
              description: "aaaaaaaaaaaaaaaaaaaaaa",
              telephone: "555",
            },
          })
        }
      >
        Add more info Employer
      </button>
      <button
        onClick={() =>
          addMoreInfoUserWorker({
            moreInfo: {
              categories: ["Pintura", "Limpeza"],
              description: "aaaaaaaaaaaaaaaaaaaaaa",
              telephone: "555",
            },
          })
        }
      >
        Add more info Worker
      </button>
      <button
        onClick={() =>
          editUserEmployer({
            email: "leandro23@gmail.com",
            name: "Leandro23",
            moreInfo: {
              categories: [],
              description: "Oi eu sou o Leo",
              telephone: "123",
            },
          })
        }
      >
        Edit info Employer
      </button>
      <button
        onClick={() =>
          editUserWorker({
            email: "leandro23@gmail.com",
            name: "Leandro23",
            moreInfo: {
              categories: ["Pintura"],
              description: "Oi eu sou o Leo",
              telephone: "123",
            },
          })
        }
      >
        Edit info Worker
      </button>

      <button
        onClick={() =>
          handleLogin({
            email: "newUser234@gmail.com",
            password: "123456",
          })
        }
      >
        Login
      </button>

      <button onClick={() => getUserLoggedInfo()}>UserInfo</button>

      <button onClick={() => getInfoFromASpecificUser("3")}>
        Search user 3
      </button>

      <GlobalStyle />
      <Routes />

      <button
        onClick={() =>
          userEmployerCreateJob({
            title: "Morar casa",
            category: ["Gerais"],
            description: "Morar casa",
            location: "R-Rio Grande do Norte",
            valueOffered: 1500,
            date: "10/05/2021 - 10:00h",
          })
        }
      >
        Create job
      </button>
      <button onClick={() => getASpecificJob("2")}>Get a job</button>
      <button
        onClick={() =>
          userEmployerEditJob(
            {
              title: "Morar so casa",
              description: "Morar so casa",
              valueOffered: 1500,
              date: "10/05/2021 - 10:00h",
            },
            "1"
          )
        }
      >
        Edit Job
      </button>
      <button onClick={() => userEmployerAcceptCandidate("3", "2")}>
        Aceitar Candidato
      </button>
      <button onClick={() => userEmployerRejectCandidate("4", ["1"], "2")}>
        Rejeitar Candidato
      </button>
      <button onClick={() => userEmployerCompleteJob("2")}>Complete Job</button>
      <button onClick={() => userEmployerRatingJob("5", "2")}>
        Rating Job
      </button>
      <button onClick={() => userWorkerApplyToJob("2")}>Apply to Job</button>
    </>
  );
}

export default App;
