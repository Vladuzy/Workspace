import { Container } from "./style";
import Button from "../../components/Button";
import imgLogo from "../../assets/img/Logo.svg";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();

  const redirectToPage = (page: string) => {
    history.push(`/${page}`);
  };

  return (
    <Container>
      <div>
        <img src={imgLogo} alt="Logo da workspace" />
        <p>Praticidade e segurança ao contratar um freelancer</p>
      </div>
      <div>
        <Button
          text="Entrar"
          width="274px"
          heigth="45px"
          borderRadius="8px"
          backColor="#7065E4"
          border="initial"
          color="#F5F4F5"
          fontSize="15px"
          handleClick={() => redirectToPage("login")}
        />
        <Button
          text="Cadastrar"
          width="274px"
          heigth="45px"
          borderRadius="8px"
          backColor="#7065E4"
          border="initial"
          color="#F5F4F5"
          fontSize="15px"
          handleClick={() => redirectToPage("register")}
        />
      </div>
    </Container>
  );
};

export default LandingPage;
