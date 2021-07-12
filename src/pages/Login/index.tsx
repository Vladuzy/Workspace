import Input from "../../components/Input";
import Button from "../../components/Button";
import imgLogo from "../../assets/img/Logo.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import { Container, ContainerInput, Content, LinkStyle } from "./style";
import { useAuth } from "../../providers/AuthProvider";
import { Redirect } from "react-router-dom";
import { toast } from "react-hot-toast";

interface FormLogin {
  email: string;
  password: string;
}

const Login = () => {
  const { handleLogin, isAuthenticated } = useAuth();

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Insira um e-mail"),
    password: yup.string().required("Campo obrigatorio!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLogin>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormLogin) => {
    handleLogin(data);

    if (isAuthenticated) {
      history.push("/home");
    }
    console.log("erro");
    toast.error("E-mail ou senha inválido.");
  };

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <img src={imgLogo} alt="Logo da workspace" />
      <form onSubmit={handleSubmit(onSubmit)}>
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
