import Input from "../../components/Input";
import Button from "../../components/Button";
import imgLogo from "../../assets/img/Logo.svg";
import { Container, ContainerInput, Content, LinkStyle } from "./style";

import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../service/api";
import jwt_decode from "jwt-decode";

import { useAuth } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

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
        console.log(response.data.accessToken);
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
    <Container>
      <img src={imgLogo} alt="Logo da workspace" />
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
  );
};

export default Login;
