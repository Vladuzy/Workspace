import React from 'react'
import { Link } from 'react-router-dom'
import { Close, Container, HeaderStyled, MainStyled } from './styles'

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
            </Container>
        </MainStyled>
        </>
    )
}
