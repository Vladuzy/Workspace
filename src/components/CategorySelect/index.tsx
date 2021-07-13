import Pintura from '../../assets/img/pintura.svg'
import Limpeza from '../../assets/img/limpeza.svg'
import Eletricista from '../../assets/img/eletricista.svg'
import Encanador from '../../assets/img/encanador.svg'
import Gerais from '../../assets/img/gerais.svg'

import PinturaCor from '../../assets/img/PaintRoll_Yellow.svg'
import LimpezaCor from '../../assets/img/CleaningBroom_Red.svg'
import EletricistaCor from '../../assets/img/Eletrical_Blue.svg'
import EncanadorCor from '../../assets/img/Pipe_Purple.svg'
import GeraisCor from '../../assets/img/ToolBox_Green.svg'

import CardCategory from '../CardCategory'

import { CategoryContainer, CardContainer, LimitErrorSpan } from './styles'
import { ReactNode, SetStateAction } from 'react'
import { useState } from 'react'
import { Dispatch } from 'react'
import { useEffect } from 'react'

interface CategorySelectProps {
  children: ReactNode;
  selected: string[];
  color?: string;
  margin?: string;
  limit?: number;
  setSelected: Dispatch<SetStateAction<string[]>>
}

const CategorySelect = ({ children, setSelected, selected, limit, color = 'var(--roxo-tema-principal)', margin = '10px 0 5px 5px' }: CategorySelectProps) => {
  const [isPintura, setIsPintura] = useState<boolean>(false as boolean)
  const [isLimpeza, setIsLimpeza] = useState<boolean>(false as boolean)
  const [isEletricista, setIsEletricista] = useState<boolean>(false as boolean)
  const [isEncanador, setIsEncanador] = useState<boolean>(false as boolean)
  const [isGerais, setIsGerais] = useState<boolean>(false as boolean)

  const [limitError, setLimitError] = useState<boolean>(false as boolean)

  const cards = [
    {title: 'Pintura', svg: Pintura, svgCor: PinturaCor, color: 'var(--amarelo)', background: 'var(--amarelo-claro)', isActive: isPintura, setIsActive: setIsPintura},
    {title: 'Limpeza', svg: Limpeza, svgCor: LimpezaCor, color: 'var(--vermelho)', background: 'var(--vermelho-claro)', isActive: isLimpeza, setIsActive: setIsLimpeza},
    {title: 'Eletricista', svg: Eletricista, svgCor: EletricistaCor, color: 'var(--azul)', background: 'var(--azul-claro)', isActive: isEletricista, setIsActive: setIsEletricista},
    {title: 'Encanador', svg: Encanador, svgCor: EncanadorCor, color: 'var(--roxo-categoria)', background: 'var(--roxo-categoria-claro)', isActive: isEncanador, setIsActive: setIsEncanador},
    {title: 'Gerais', svg: Gerais, svgCor: GeraisCor, color: 'var(--verde)', background: 'var(--verde-claro)', isActive: isGerais, setIsActive: setIsGerais},
  ]

  const handleAddFilters = () => {
    
    if (isPintura && !selected.includes('Pintura')) {
      setSelected([...selected, 'Pintura'])
    }
    if (isLimpeza && !selected.includes('Limpeza')) {
      setSelected([...selected, 'Limpeza'])
    }
    if (isEletricista && !selected.includes('Eletricista')) {
      setSelected([...selected, 'Eletricista'])
    }
    if (isEncanador && !selected.includes('Encanador')) {
      setSelected([...selected, 'Encanador'])
    }
    if (isGerais && !selected.includes('Gerais')) {
      setSelected([...selected, 'Gerais'])
    }
  
  }

  const handleRemoveFilters = () => {
    if (!isPintura && selected.includes('Pintura')) {
      setSelected(selected.filter(elem => elem !== 'Pintura'))
    }
    if (!isLimpeza && selected.includes('Limpeza')) {
      setSelected(selected.filter(elem => elem !== 'Limpeza'))
    }
    if (!isEletricista && selected.includes('Eletricista')) {
      setSelected(selected.filter(elem => elem !== 'Eletricista'))
    }
    if (!isEncanador && selected.includes('Encanador')) {
      setSelected(selected.filter(elem => elem !== 'Encanador'))
    }
    if (!isGerais && selected.includes('Gerais')) {
      setSelected(selected.filter(elem => elem !== 'Gerais'))
    }
  }

  useEffect(() => {
    if (!limitError) {
      handleAddFilters()
    }
    handleRemoveFilters()
  }, [isPintura, isLimpeza, isEletricista, isEncanador, isGerais])

  useEffect(() => {
    console.log(selected)
    if (limit !== undefined && selected.length === limit) {
      setLimitError(true)
    } else {
      setLimitError(false)
    }
  }, [selected])

  return(
    <CategoryContainer color={color} margin={margin}>
      {children}
      <CardContainer>
        {cards.map((element, index) => 
            <CardCategory 
              key={index} 
              title={element.title} 
              svg={element.svg} 
              color={element.color} 
              background={element.background} 
              svgCor={element.svgCor}
              limitError={limitError}
              isActive={element.isActive}
              setIsActive={element.setIsActive}
            />
        )}
      </CardContainer>
      <LimitErrorSpan>{limitError && 'Limite Atingido!'}</LimitErrorSpan>
    </CategoryContainer>
  )
}

export default CategorySelect