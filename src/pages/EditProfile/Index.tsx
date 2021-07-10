import React from 'react'
import { Link } from 'react-router-dom'
import CardCategory from '../../components/CardCategory'
import { Close, Container, HeaderStyled, MainStyled } from './styles'
import Pintura from '../../assets/img/pintura.svg'

export default function EditProfile() {
    return (
        <>
        <HeaderStyled>
            <Link to='/profile'><Close/></Link>
        </HeaderStyled>
        <MainStyled>
            <p>Informações adicionais</p>
            <Container>
                <p>Categorias que trabalha</p>
                <CardCategory title='pintura' svg={Pintura}/>
            </Container>
        </MainStyled>
        </>
    )
}
