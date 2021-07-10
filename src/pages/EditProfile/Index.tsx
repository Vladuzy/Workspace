import React from 'react'
import { Link } from 'react-router-dom'
import CardCategory from '../../components/CardCategory'
import { Close, Container, ContentCards, HeaderStyled, MainStyled } from './styles'
import Pintura from '../../assets/img/pintura.svg'
import Limpeza from '../../assets/img/limpeza.svg'
import Eletricista from '../../assets/img/eletricista.svg'
import Encanador from '../../assets/img/encanador.svg'
import Gerais from '../../assets/img/gerais.svg'

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
            </Container>
        </MainStyled>
        </>
    )
}
