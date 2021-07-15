import { useHistory } from "react-router-dom";
import { Container, Content } from "./style";
import imgNotFound from "../../../assets/img/notFound.svg";
import Button from "../../../components/Button";
import { useAuth } from "../../../providers/AuthProvider";

const NotFoundDesk = () => {
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
      <Content>
        <div>
          <h2>Desculpe!! Erro 404</h2>
          <p>Não conseguimos encontrar essa página!! Retorne para o inicio.</p>
        </div>
        <Button text="Voltar ao início" handleClick={redirectToHome} />
      </Content>
      <img src={imgNotFound} alt="Erro 404, página não encontrada" />
    </Container>
  );
};

export default NotFoundDesk;
