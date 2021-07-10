import { Toaster } from "react-hot-toast";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
