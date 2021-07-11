import { Toaster } from "react-hot-toast";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
