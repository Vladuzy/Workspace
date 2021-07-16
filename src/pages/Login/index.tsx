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
      .catch(() => toast.error("E-mail ou senha inválido."));
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
            Se o assunto for elétrica, conte com nossos freelancers! São
            extremamente qualificados e podem ajudar você com as suas pendências
            ou projetos!
          </p>
        </ContainerCategory>
        <ContainerCategory encanador>
          <img src={imgEncanador} alt="imgEncanador" />

          <p>
            Conhecido por muitos como o bombeiro hidráulico. Nosso freelancer
            promete reparar, montar, instalar e ajustar as tubulações, condutos
            e encanamentos das residências. Garantia de qualidade através das
            avaliações.
          </p>
        </ContainerCategory>
        <ContainerCategory limpeza>
          <img src={imgLimpeza} alt="imgLimpeza" />

          <p>
            Nossos freelancers vão além. Não sabe como limpar caixa d’água ou
            precisa de um bom profissional para a manutenção do seu ambiente
            familiar? Você está no lugar certo.
          </p>
        </ContainerCategory>
        <ContainerCategory pintura>
          <img src={imgPintura} alt="imgPintura" />

          <p>
            Milhares de profissionais avaliados por clientes, permitindo você
            negociar apenas com os melhores. E também escolher os melhores
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
          Ainda não possui uma conta?{" "}
          <LinkStyle to="/register">Cadastra-se</LinkStyle>
        </div>
      </Container>
    </FullContainer>
  );
};

export default Login;
