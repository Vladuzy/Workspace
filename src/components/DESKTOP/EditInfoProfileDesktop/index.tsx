import Input from '../../Input'
import Button from '../../Button'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { IoMdClose } from 'react-icons/io'
import { EditProfileContainer, FormContainer, InputTextArea, BackgroundContainer } from './styles'
import CategorySelect from '../../CategorySelect';
import { SetStateAction, useState } from 'react';
import { useAuth } from '../../../providers/AuthProvider'
import { Dispatch } from 'react';

interface FormEdit {
  name: string;
  email: string;
  description: string;
  telephone: string;
}

interface EditInfoProfileDesktopProps {
  setEditOpen: Dispatch<SetStateAction<boolean>>
}

const EditInfoProfileDesktop = ({ setEditOpen }: EditInfoProfileDesktopProps) => {
  const { editUserWorker, editUserEmployer, userLoggedInfo: { type } } = useAuth()
  const [workCategories, setWorkCategories] = useState<string[]>([] as string[])
  const formSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    description: yup.string(),
    telephone: yup.string().matches(/(\(\d{2}\))(\d{4,5}\-\d{4})/, 'Telefone invalido. Ex.: (xx)xxxx-xxxxx'),
  })

  const {register, handleSubmit, formState: {errors}} = useForm<FormEdit>({
    resolver: yupResolver(formSchema)
  })

  const onSubmitData = (data: FormEdit) => {
    const { name, description, telephone, email } = data
    const newDataWorker = {
      email,
      name,
      moreInfo: {
        categories: workCategories,
        description,
        telephone
      }
    } 
    const newDataEmployer = {
      email,
      name,
      moreInfo: {
        description,
        telephone
      }
    }

    if (type === 'worker') {
      editUserWorker(newDataWorker)
    } else if (type === 'employer') {
      editUserEmployer(newDataEmployer)
    }
    setEditOpen(false)
  }

  return(
    <BackgroundContainer>
      <EditProfileContainer type={type}>
        <IoMdClose onClick={() => setEditOpen(false)}/>
        <h2>Editar Informações</h2>
        <FormContainer onSubmit={handleSubmit(onSubmitData)} type={type}>
          <div>
            <Input width='100%' heigth='30px' border='none' fontSize='15px' placeholder='Novo Nome' register={register} name='name'/>
            <span>{errors && errors.name?.message}</span>
          </div>
          <div>
            <Input width='100%' heigth='30px' border='none' fontSize='15px' placeholder='Novo Email' register={register} name='email'/>
            <span>{errors && errors.email?.message}</span>
          </div>
          {type === 'worker' && <CategorySelect limit={3} selected={workCategories} setSelected={setWorkCategories} margin='none' color='var(--preto-cafe)'>
            <h2>Categorias que Trabalha</h2>
          </CategorySelect>}
          <div>
            <InputTextArea placeholder='Descrição de suas experiências' {...register('description')}/>
            <span>{errors && errors.description?.message}</span>
          </div>
          <div>
            <Input width='100%' heigth='30px' border='none' fontSize='15px' placeholder='Telefone Celular' register={register} name='telephone'/>
            <span>{errors && errors.telephone?.message}</span>
          </div>
          <Button text='Aceitar Alterações' width='100%' heigth='40px' type='submit'/>
        </FormContainer>
      </EditProfileContainer>
    </BackgroundContainer>
  )
}

export default EditInfoProfileDesktop