import React from 'react'
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

export default function EditProfile() {
    let arrTitle = ['Pintura', 'Limpeza', 'Eletricista', 'Encanador', 'Gerais']
    let arrSvg = [Pintura, Limpeza, Eletricista, Encanador, Gerais]
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
                        <CardCategory key={index} title={element} svg={arrSvg[index]} />
                    )}
                </ContentCards>
                <ContentForms>
                    <textarea cols={6} rows={6} placeholder='descrição de suas experiências'/>
                    <Input placeholder='Telefone celular' register={(name:string) => name} border='none'/>
                    <Button text='Adicionar' heigth='40px' type='submit'/>
                </ContentForms>
            </Container>
        </MainStyled>
        </>
    )
}
