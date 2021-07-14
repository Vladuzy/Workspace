import { IoMdClose } from 'react-icons/io'
import { CreateWorkContainer, FormContainer, InputTextArea } from './styles'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CategorySelect from '../../components/CategorySelect';
import { useState } from 'react';
import { JobCreationData } from '../../providers/Jobs'
import { useJobs } from '../../providers/Jobs'
import { useHistory } from 'react-router';

const CreateWork = () => {
  const history = useHistory()
  const schema = yup.object().shape({
    title: yup.string().required('Campo Obrigatório.'),
    description: yup.string().required('Campo Obrigatório.'),
    location: yup.string().required('Campo Obrigatório.'),
    valueOffered: yup.string().required('Campo Obrigatório.'),
    date: yup.string().required('Campo Obrigatório.'),
  })
  const [category, setCategory] = useState<string[]>([] as string[])
  const { userEmployerCreateJob } = useJobs()
  const { register, handleSubmit, formState: { errors } } = useForm<JobCreationData>({
    resolver: yupResolver(schema)
  })

  const onSubmitData = (data: JobCreationData) => {
    const newData = {...data, category}
    console.log(newData)
    userEmployerCreateJob(newData)
  }

  return(
    <CreateWorkContainer>
      <IoMdClose onClick={() => history.push('/home')}/>
      <h2>Criação de Trabalho</h2>
      <FormContainer onSubmit={handleSubmit(onSubmitData)}>
        <div>
          <Input width='100%' heigth='30px' border='none' fontSize='15px' placeholder='Nome do Trabalho' register={register} name='title'/>
          <span>{errors && errors.title?.message}</span>
        </div>
        <CategorySelect limit={1} selected={category} setSelected={setCategory} color='var(--preto-cafe)' margin='0 0 10px 0'>
          <h2>Escolha a Categoria</h2>
        </CategorySelect>
        <div>
          <InputTextArea  placeholder='Descrição do Trabalho' {...register('description')}/>
          <span>{errors && errors.description?.message}</span>
        </div>
        <div>
          <Input width='100%' heigth='30px' border='none' fontSize='15px' placeholder='Local' register={register} name='location'/>
          <span>{errors && errors.location?.message}</span>
        </div>
        <div>
          <Input width='46%'  heigth='30px' border='none' fontSize='15px' placeholder='Valor Oferecido' register={register} name='valueOffered'/>
          <Input width='46%'  heigth='30px' border='none' fontSize='15px' placeholder='Dia/Horário' register={register} name='date'/>
          <span>{errors && errors.valueOffered?.message}</span>
          <span>{errors && errors.date?.message}</span>
        </div>
        <Button text='Criar' width='100%' heigth='40px' type='submit'/>
      </FormContainer>
      
    </CreateWorkContainer>
  )
}

export default CreateWork