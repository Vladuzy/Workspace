import PinturaCor from '../../assets/img/PaintRoll_Yellow.svg'
import LimpezaCor from '../../assets/img/CleaningBroom_Red.svg'
import EletricistaCor from '../../assets/img/Eletrical_Blue.svg'
import EncanadorCor from '../../assets/img/Pipe_Purple.svg'
import GeraisCor from '../../assets/img/ToolBox_Green.svg'

import { CardContainer } from './styles'

interface CardCategoryProfileProps {
  category: string
}

const CardCategoryProfile = ({ category }: CardCategoryProfileProps) => {
  return(
    <CardContainer 
      svg={
        category === 'Pintura' ? PinturaCor 
        : category === 'Eletricista' ? EletricistaCor 
        : category === 'Limpeza' ? LimpezaCor 
        : category === 'Encanador' ? EncanadorCor 
        : GeraisCor
        }
      color={
        category === 'Pintura' ? 'var(--amarelo-claro)' 
        : category === 'Eletricista' ? 'var(--azul-claro)'
        : category === 'Limpeza' ? 'var(--vermelho-claro)'
        : category === 'Encanador' ? 'var(--roxo-categoria-claro)'
        : 'var(--verde-claro)'
      }
    >
    </CardContainer>
  )
}

export default CardCategoryProfile