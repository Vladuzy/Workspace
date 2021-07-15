import {
  FooterButton,
  InputContainer,
  ImageHeader,
  ContainerForm,
  TextAreaContainer,
  SpanFormContainer,
  InputFooter,
  InputFooterHour,
  HeaderContainer,
  Container,
  FooterContainer,
  TitleContainer,
  BackgroundContainer,
  EditWorkForm
} from "./styles";
import close from "../../../assets/img/close.svg";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useJobs } from "../../../providers/Jobs";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Data {
  title: string;
  description: string;
  valueOffered: number;
  date: string;
}

interface Params {
  id: string;
  setEditWorkOpen: Dispatch<SetStateAction<boolean>>
}

const WorksEditDesktop = ({ id, setEditWorkOpen } :Params) => {
  const { userEmployerEditJob, currentJob, getASpecificJob } = useJobs();

  useEffect(() => {
    getASpecificJob(id);
  }, []);

  const schemaWorksEdit = yup.object().shape({
    title: yup
      .string()
      .required("Campo Obrigatório.")
      .max(15, "Máximo de 15 caracteres."),

    description: yup.string().required("Campo Obrigatório."),
    valueOffered: yup.string().required("Campo Obrigatório."),

    date: yup.string().required("Campo Obrigarório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaWorksEdit),
  });

  const history = useHistory();

  const handleEdit = (data: Data) => {
    userEmployerEditJob(data, currentJob.id);
    setEditWorkOpen(false)
  };


  return (
    <BackgroundContainer>
    <EditWorkForm onSubmit={handleSubmit(handleEdit)}>
    <ContainerForm>
        <HeaderContainer>
          <ImageHeader
            onClick={() => setEditWorkOpen(false)}
            src={close}
            alt="Icone de fechar"
          />
        </HeaderContainer>
        <Container>
          <div>
            <TitleContainer>Edição de trabalho</TitleContainer>
          </div>
          <div>
            <InputContainer
              placeholder="Nome do trabalho"
              {...register("title")}
            ></InputContainer>
            <SpanFormContainer>{errors.title?.message}</SpanFormContainer>
          </div>
          
          <div>
            <TextAreaContainer
              placeholder="Descrição do trabalho"
              {...register("description")}
            ></TextAreaContainer>
            <SpanFormContainer>{errors.description?.message}</SpanFormContainer>
          </div>
          <FooterContainer>
              <InputFooter
                placeholder="Valor oferecido"
                {...register("valueOffered")}
              ></InputFooter>
              <InputFooterHour
                placeholder="Horário"
                {...register("date")}
              ></InputFooterHour>
              <SpanFormContainer>{errors.valueOffered?.message}</SpanFormContainer>
              <SpanFormContainer>{errors.date?.message}</SpanFormContainer>
          </FooterContainer>
          <FooterButton>Editar</FooterButton>
        </Container>
      </ContainerForm>
    </EditWorkForm>
    </BackgroundContainer>
  );
};

export default WorksEditDesktop;
