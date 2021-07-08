import { useHistory } from "react-router-dom";
import { Container, Content } from "./style";
import imgNotFound from "../../assets/img/NotFound.svg";
import Button from "../../components/Button";

const NotFound = () => {
  const history = useHistory();

  const redirectToHome = () => {
    history.push("/");
  };

  return (
    <Container>
      <img src={imgNotFound} alt="Erro 404, página não encontrada" />
      <Content>
        <div>
          <h2>Desculpe!!</h2>
          <p>Não conseguimos encontrar essa página!! Retorne para o inicio.</p>
        </div>

        <Button
          text="Voltar ao início"
          width="274px"
          heigth="45px"
          borderRadius="8px"
          backColor="#7065E4"
          border="initial"
          color="#F5F4F5"
          fontSize="15px"
          handleClick={redirectToHome}
        />
      </Content>
    </Container>
  );
};

export default NotFound;
