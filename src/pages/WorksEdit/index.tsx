import {FooterButton, InputContainer, ImageHeader, FooterContainerDiv, ContainerForm, TextAreaContainer, SpanFormContainer, InputFooter, InputFooterHour, HeaderContainer, Container, FooterContainer, TitleContainer} from "./style"
import close from "../../assets/img/close.svg"
import { useHistory, useParams } from "react-router-dom"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useJobs } from "../../providers/Jobs";
import { useEffect } from "react";

interface Data {
  title: string;
  description: string;
  valueOffered: number;
  date: string;
}

interface Params {
  id: string;
}

const WorksEdit = () => {
  const { id } = useParams() as Params;
    const {userEmployerEditJob, currentJob, getASpecificJob} = useJobs()
    console.log(userEmployerEditJob)

    useEffect(() => {
      getASpecificJob(id)
    }, [])

    const schemaWorksEdit = yup.object().shape({
        title: yup
          .string()
          .required("Campo Obrigatório.")
          .max(15, "Máximo de 15 caracteres."),
    
        description: yup
          .string()
          .required("Campo Obrigatório."),
          valueOffered: yup
          .string()
          .required("Campo Obrigatório."),

        date: yup.string().required("Campo Obrigarório")
      });

      const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schemaWorksEdit),
      });
    

    const history = useHistory()

    const handleEdit = (data: Data) => {
      userEmployerEditJob(data, currentJob.id)
        history.goBack()
    }
    const handleExitApplication = () => {
        history.goBack()
    }

    return(
        <form onSubmit={handleSubmit(handleEdit)}>
        <ContainerForm>

        <HeaderContainer>
            <ImageHeader onClick={handleExitApplication} src={close} alt="Icone de fechar"/>
        </HeaderContainer>
        <Container>
            <TitleContainer>Edição de trabalho</TitleContainer>
            <SpanFormContainer>{errors.title?.message}</SpanFormContainer>
            <InputContainer placeholder="Nome do trabalho" {...register("title")}></InputContainer>
            <SpanFormContainer>{errors.description?.message}</SpanFormContainer>
            <TextAreaContainer placeholder="Descrição do trabalho" {...register("description")}></TextAreaContainer>
            <SpanFormContainer>{errors.valueOffered?.message}</SpanFormContainer>
            <InputContainer placeholder="Valor oferecido" {...register("valueOffered")} ></InputContainer>
            <FooterContainer>
            <FooterContainerDiv>
            <SpanFormContainer>{errors.date?.message}</SpanFormContainer>
            <InputFooter type="date" placeholder="Dia" {...register("date")}></InputFooter>

            </FooterContainerDiv>
            <FooterContainerDiv>

            <SpanFormContainer>{errors.date?.message}</SpanFormContainer>
            <InputFooterHour placeholder="Horário" {...register("date")}></InputFooterHour>
            </FooterContainerDiv>
            </FooterContainer>
            <FooterButton>Editar</FooterButton>
        </Container>
        </ContainerForm>
        </form>
    )
}

export default WorksEdit