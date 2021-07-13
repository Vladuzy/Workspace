import { useHistory } from "react-router-dom";
import { Container, Content } from "./style";
import imgNotFound from "../../assets/img/NotFound.svg";
import Button from "../../components/Button";
import { useAuth } from "../../providers/AuthProvider";

const NotFound = () => {
  const { isAuthenticated } = useAuth();
  const history = useHistory();

  const redirectToHome = () => {
    if (isAuthenticated) {
      history.push("/home");
    } else {
      history.push("/");
    }
  };

  return (
    <Container>
      <img src={imgNotFound} alt="Erro 404, página não encontrada" />
      <Content>
        <div>
          <h2>Desculpe!!</h2>
          <p>Não conseguimos encontrar essa página!! Retorne para o inicio.</p>
        </div>

        <Button text="Voltar ao início" handleClick={redirectToHome} />
      </Content>
    </Container>
  );
};

export default NotFound;
