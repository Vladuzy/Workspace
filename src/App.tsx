import { useAuth } from "./providers/AuthProvider";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  const {
    token,
    handleRegister,
    handleLogin,
    getUserLoggedInfo,
    getInfoFromASpecificUser,
    addMoreInfoUser,
  } = useAuth();
  console.log(token);
  return (
    <>
      <h1>App</h1>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
