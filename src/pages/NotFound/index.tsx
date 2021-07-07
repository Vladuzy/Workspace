//import { useHistory } from "react-router-dom";
//import Button from "../../components/Button";
//import { useAuth } from "../../contexts/Auth";
import { Container, Content } from "./style";
import imgNotFound from "../../assets/img/NotFound.svg";

const NotFound = () => {
  //const history = useHistory();
  //const { isAuthenticated } = useAuth();

  /*   const redirectToHome = () => {
    if (isAuthenticated) {
      history.push("/profile");
    } else {
      history.push("/");
    }
  }; */

  return (
    <Container>
      <img src={imgNotFound} alt="Erro 404, página não encontrada" />
      <Content>
        <div>
          <h2>Desculpe!!</h2>
          <p>Não conseguimos encontrar essa página!! Retorne para o inicio.</p>
        </div>

        <button>Voltar ao início</button>
      </Content>
    </Container>
  );
};

export default NotFound;
