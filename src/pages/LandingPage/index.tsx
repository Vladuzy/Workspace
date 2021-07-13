import { Container } from "./style";
import Button from "../../components/Button";
import imgLogo from "../../assets/img/Logo.svg";
import { Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

const LandingPage = () => {
  const history = useHistory();
  const { isAuthenticated } = useAuth();

  const redirectToPage = (page: string) => {
    history.push(`/${page}`);
  };

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <div>
        <img src={imgLogo} alt="Logo da workspace" />
        <p>Praticidade e segurança ao contratar um freelancer</p>
      </div>
      <div>
        <Button text="Entrar" handleClick={() => redirectToPage("login")} />
        <Button
          text="Cadastrar"
          handleClick={() => redirectToPage("register")}
        />
      </div>
    </Container>
  );
};

export default LandingPage;
