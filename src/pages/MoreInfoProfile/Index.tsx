import { useState } from "react";
import { useHistory } from "react-router-dom";
import CategorySelect from "../../components/CategorySelect";
import {
  Container,
  ContentForms,
  HeaderStyled,
  MainStyled,
  InputTextArea,
} from "./styles";
import { IoMdClose } from "react-icons/io";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../providers/AuthProvider";

interface FormEdit {
  description: string;
  telephone: string;
}

export default function MoreInfoProfile() {
  const history = useHistory();
  const [arrCategory, setArrCategory] = useState<string[]>([]);
  const {
    addMoreInfoUserWorker,
    addMoreInfoUserEmployer,
    userLoggedInfo: { type },
  } = useAuth();

  const formSchema = yup.object().shape({
    description: yup.string().required("Campo Obrigatório."),
    telephone: yup
      .string()
      .matches(
        /(\(\d{2}\))(\d{4,5}\-\d{4})/,
        "Telefone invalido. Ex.: (xx)xxxx-xxxxx"
      )
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormEdit>({
    resolver: yupResolver(formSchema),
  });

  const submitForm = (data: FormEdit) => {
    const { description, telephone } = data;
    const moreInfoWorker = {
      moreInfo: {
        categories: arrCategory,
        description: description,
        telephone: telephone,
      },
    };
    const moreInfoEmployer = {
      moreInfo: {
        description,
        telephone,
      },
    };
    if (type === "worker") {
      addMoreInfoUserWorker(moreInfoWorker);
    } else if (type === "employer") {
      addMoreInfoUserEmployer(moreInfoEmployer);
    }
    history.push("/profile");
  };
  return (
    <>
      <HeaderStyled>
        <IoMdClose onClick={() => history.push("/profile")} />
      </HeaderStyled>
      <MainStyled>
        <h2>Informações adicionais</h2>
        <Container>
          {type === "worker" && (
            <CategorySelect
              limit={3}
              selected={arrCategory}
              setSelected={setArrCategory}
              margin="none"
              color="var(--preto-cafe)"
            >
              <h2>Categorias que trabalha</h2>
            </CategorySelect>
          )}
          <ContentForms onSubmit={handleSubmit(submitForm)}>
            <div>
              <InputTextArea
                placeholder="Descrição de suas experiências"
                {...register("description")}
              />
              <span>{errors.description?.message}</span>
            </div>
            <div>
              <Input
                placeholder="Telefone celular"
                register={register}
                name="telephone"
                border="none"
                heigth="30px"
                fontSize="15px"
              />
              <span>{errors.telephone?.message}</span>
            </div>
            <Button text="Adicionar" heigth="40px" type="submit" />
          </ContentForms>
        </Container>
      </MainStyled>
    </>
  );
}
