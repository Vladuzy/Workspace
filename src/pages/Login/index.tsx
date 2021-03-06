import Input from "../../components/Input";
import Button from "../../components/Button";
import imgLogo from "../../assets/img/Logo.svg";
import {
  FullContainer,
  Container,
  ContainerCategory,
  ContainerInput,
  Content,
  LinkStyle,
} from "./style";

import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../service/api";
import jwt_decode from "jwt-decode";

import { useAuth } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

import imgEletricista from "../../assets/img/Category/Eletricista.png";
import imgEncanador from "../../assets/img/Category/Encanador.png";
import imgGerais from "../../assets/img/Category/Gerais.png";
import imgLimpeza from "../../assets/img/Category/Limpeza.png";
import imgPintura from "../../assets/img/Category/Pintura.png";

interface UserDataLogin {
  email: string;
  password: string;
}

interface DecodedToken {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

const Login = () => {
  const { setToken, setUserLoggedId, isAuthenticated } = useAuth();

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Insira um e-mail"),
    password: yup.string().required("Campo obrigatorio!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDataLogin>({
    resolver: yupResolver(schema),
  });

  const handleLogin = (userDataLogin: UserDataLogin) => {
    api
      .post("/login", userDataLogin)
      .then((response) => {
        localStorage.setItem("@WorkSpace:token", response.data.accessToken);
        setToken(response.data.accessToken);
        const decodedToken: DecodedToken = jwt_decode(
          response.data.accessToken
        );

        setUserLoggedId(decodedToken.sub);
        localStorage.setItem("@WorkSpace:userLoggedId", `${decodedToken.sub}`);
        history.push("/home");
      })
      .catch(() => toast.error("E-mail ou senha inv??lido."));
  };

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <FullContainer>
      <Container>
        <ContainerCategory eletricista>
          <img src={imgEletricista} alt="imgEletricista" />
          <p>
            Se o assunto for el??trica, conte com nossos freelancers! S??o
            extremamente qualificados e podem ajudar voc?? com as suas pend??ncias
            ou projetos!
          </p>
        </ContainerCategory>
        <ContainerCategory encanador>
          <img src={imgEncanador} alt="imgEncanador" />

          <p>
            Conhecido por muitos como o bombeiro hidr??ulico. Nosso freelancer
            promete reparar, montar, instalar e ajustar as tubula????es, condutos
            e encanamentos das resid??ncias. Garantia de qualidade atrav??s das
            avalia????es.
          </p>
        </ContainerCategory>
        <ContainerCategory limpeza>
          <img src={imgLimpeza} alt="imgLimpeza" />

          <p>
            Nossos freelancers v??o al??m. N??o sabe como limpar caixa d?????gua ou
            precisa de um bom profissional para a manuten????o do seu ambiente
            familiar? Voc?? est?? no lugar certo.
          </p>
        </ContainerCategory>
        <ContainerCategory pintura>
          <img src={imgPintura} alt="imgPintura" />

          <p>
            Milhares de profissionais avaliados por clientes, permitindo voc??
            negociar apenas com os melhores. E tamb??m escolher os melhores
            empregadores!
          </p>
        </ContainerCategory>
        <ContainerCategory gerais>
          <img src={imgGerais} alt="imgGerais" />

          <p>
            Nenhuma categoria acima te serviu? Lance a sua proposta e espere
            pela chuva de candidatos!
          </p>
        </ContainerCategory>
      </Container>
      <Container>
        <img
          src={imgLogo}
          alt="Logo da workspace"
          onClick={() => history.push("/")}
        />
        <form onSubmit={handleSubmit(handleLogin)}>
          <Content>
            <ContainerInput>
              <Input
                type="email"
                placeholder="E-mail"
                name="email"
                register={register}
              />
              <span> {errors && errors.email?.message}</span>
            </ContainerInput>
            <ContainerInput>
              <Input
                type="password"
                placeholder="Senha"
                name="password"
                register={register}
              />
              <span>{errors && errors.password?.message}</span>
            </ContainerInput>
          </Content>

          <Button text="Entrar" type="submit" />
        </form>
        <div>
          Ainda n??o possui uma conta?{" "}
          <LinkStyle to="/register">Cadastra-se</LinkStyle>
        </div>
      </Container>
    </FullContainer>
  );
};

export default Login;
