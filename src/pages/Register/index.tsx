import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import api from "../../service/api";
import {
  FormContainer,
  Container,
  FooterContainer,
  FooterContainerLink,
  SelectContainer,
  ContainerInputs,
  SpanFormContainer,
} from "./style";
import imgLogo from "../../assets/img/Logo.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { toast } from "react-hot-toast";
interface Data {
  name: string;
  type: string;
  email: string;
  password: string;
}
const Register = () => {
  const history = useHistory();
  const { isAuthenticated } = useAuth();

  const schema = yup.object().shape({
    name: yup.string().required("Campo é obrigatório"),
    type: yup
      .string()
      .min(5, "Selecione o tipo de usuário*")
      .required("Campo é obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório*"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos*")
      .matches(/^((?=.*[A-Z]){1}).*$/, "Senha deve conter uma letra maiúscula,")
      .matches(/^((?=.*[a-z]){1}).*$/, "uma letra minúscula,")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d).*$/,
        "um número e caracter especial!"
      )
      .required("Campo obrigatório*"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Senha obrigatório*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data: Data) => {
    const { name, type, email, password } = data;
    const userDataRegister = {
      email,
      password,
      name,
      type,
      rating: "",
      moreInfo: {
        categories: [],
        description: "",
        telephone: "",
      },
    };

    api
      .post("/register", userDataRegister)
      .then((response) => {
        console.log(response);
        toast.success("Usuário cadastrado com Sucesso!");
        history.push("/login");
        reset();
      })
      .catch(() => toast.error("E-mail já cadastrado!!"));
  };

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Container>
      <img src={imgLogo} alt="Icone da workspace" />

      <FormContainer onSubmit={handleSubmit(handleForm)}>
        <ContainerInputs>
          <Input
            placeholder="Nome do usuário"
            name="name"
            register={register}
          ></Input>
          <SpanFormContainer>{errors.name?.message}</SpanFormContainer>
          <SelectContainer defaultValue="null" {...register("type")}>
            <option value="null" disabled>
              Tipo de usuário
            </option>
            <option value="worker">Trabalhador</option>
            <option value="employer">Empregador</option>
          </SelectContainer>
          <SpanFormContainer>{errors.type?.message}</SpanFormContainer>
          <Input placeholder="E-mail" name="email" register={register}></Input>
          <SpanFormContainer>{errors.email?.message}</SpanFormContainer>
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            register={register}
          ></Input>
          <SpanFormContainer>{errors.password?.message}</SpanFormContainer>
          <Input
            type="password"
            placeholder="Confirmar Senha"
            name="passwordConfirm"
            register={register}
          ></Input>
          <SpanFormContainer>
            {errors.passwordConfirm?.message}
          </SpanFormContainer>
        </ContainerInputs>
        <Button text="Cadastrar" type="submit" />
      </FormContainer>
      <FooterContainer>
        <p>Já possui uma conta? </p>
        <FooterContainerLink to="/login">Entrar</FooterContainerLink>
      </FooterContainer>
    </Container>
  );
};

export default Register;
