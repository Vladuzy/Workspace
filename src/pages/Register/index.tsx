import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import {
  InputContainer,
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
interface Data {
  name: string;
  type: string;
  email: string;
  password: string;
}
const Register = () => {
  const history = useHistory();
  const { handleRegister } = useAuth();

  const schema = yup.object().shape({
    name: yup.string().required("Campo é obrigatório"),
    type: yup.string().required("Campo é obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório*"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos*")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório*"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "senhas diferentes")
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
    handleRegister({
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
    });
    reset();
    history.push("/login");
  };

  return (
    <Container>
      <img src={imgLogo} alt="Icone da workspace" />

      <FormContainer onSubmit={handleSubmit(handleForm)}>
        <ContainerInputs>
          <InputContainer
            placeholder="Nome do usuário"
            {...register("name")}
          ></InputContainer>
          <SpanFormContainer>{errors.name?.message}</SpanFormContainer>
          <SelectContainer {...register("type")}>
            <option selected disabled>
              Tipo de usuário
            </option>
            <option value="worker">Trabalhador</option>
            <option value="employer">Empregador</option>
          </SelectContainer>
          <SpanFormContainer>{errors.type?.message}</SpanFormContainer>
          <InputContainer
            placeholder="E-mail"
            {...register("email")}
          ></InputContainer>
          <SpanFormContainer>{errors.email?.message}</SpanFormContainer>
          <InputContainer
            type="password"
            placeholder="Senha"
            {...register("password")}
          ></InputContainer>
          <SpanFormContainer>{errors.password?.message}</SpanFormContainer>
          <InputContainer
            type="password"
            placeholder="Confirmar Senha"
            {...register("passwordConfirm")}
          ></InputContainer>
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
