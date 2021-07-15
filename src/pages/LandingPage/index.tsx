import { Container } from "./style";
import Button from "../../components/Button";
import imgLogo from "../../assets/img/Logo.svg";
import { Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { Content, ContainerButton } from "./style";

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
      <Content>
        <img src={imgLogo} alt="Logo da workspace" />
        <p>Praticidade e segurança ao contratar um freelancer</p>
      </Content>
      <ContainerButton>
        <Button text="Entrar" handleClick={() => redirectToPage("login")} />
        <span className="separador">ou crie uma conta</span>
        <Button
          text="Cadastrar"
          handleClick={() => redirectToPage("register")}
        />
      </ContainerButton>
    </Container>
  );
};

export default LandingPage;
