import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CardCategory from '../../components/CardCategory'
import { Close, Container, ContentCards, ContentForms, HeaderStyled, MainStyled } from './styles'
import Pintura from '../../assets/img/pintura.svg'
import Limpeza from '../../assets/img/limpeza.svg'
import Eletricista from '../../assets/img/eletricista.svg'
import Encanador from '../../assets/img/encanador.svg'
import Gerais from '../../assets/img/gerais.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../providers/AuthProvider'


interface FormEdit {
    description: string;
    telephone: string;
}

export default function EditProfile() {
    let arrTitle = ['Pintura', 'Limpeza', 'Eletricista', 'Encanador', 'Gerais']
    let arrSvg = [Pintura, Limpeza, Eletricista, Encanador, Gerais]
    const [arrCategory, setArrCategory] = useState<string[]>([])
    const { editUserEmployer } = useAuth()

    const formSchema = yup.object().shape({
        description: yup.string().required('descrição é obrigatória'),
        telephone: yup.string().matches(/(\(\d{2}\))(\d{4,5}\-\d{4})/, 'telefone invalido, Ex.: (xx)xxxx-xxxxx').required()
    })

    const {register, handleSubmit, formState: {errors}} = useForm<FormEdit>({
        resolver: yupResolver(formSchema)
    })

    const submitForm = (data: FormEdit) => {
        const {description, telephone} = data
        let moreInfo = {
            categories: arrCategory,
            description: description,
            telephone: telephone,
        };
        editUserEmployer({moreInfo})
    }
    console.log(errors)
    return (
        <>
        <HeaderStyled>
            <Link to='/profile'><Close/></Link>
        </HeaderStyled>
        <MainStyled>
            <p>Informações adicionais</p>
            <Container>
                <p>Categorias que trabalha</p>
                <ContentCards>
                    {arrTitle.map(
                        (element, index) => 
                        <button onClick={() => setArrCategory([...arrCategory, element])}><CardCategory key={index} title={element} svg={arrSvg[index]} /></button>
                    )}
                </ContentCards>
                <ContentForms onSubmit={handleSubmit(submitForm)}>
                    <textarea cols={6} rows={6} placeholder='descrição de suas experiências' {...register('description')}/>
                    {errors && <span>{errors.description?.message}</span>}
                    <Input placeholder='Telefone celular' register={register} name='telephone' border='none'/>
                    {errors && <span>{errors.telephone?.message}</span>}
                    <Button text='Adicionar' heigth='40px' type='submit'/>
                </ContentForms>
            </Container>
        </MainStyled>
        </>
    )
}
