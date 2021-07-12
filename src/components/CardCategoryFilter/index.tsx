import { CardContainer } from './styles'
import { IoMdClose } from 'react-icons/io'

interface CardCategoryFilter {
  text: string
  ind: number
  remove: (value: number) => void
}

const CardCategoryFilter = ({ text, remove, ind }: CardCategoryFilter) => {
  return(
    <CardContainer>
      <h2>{text}</h2>
      <IoMdClose onClick={() => remove(ind)}/>
    </CardContainer>
  )
}

export default CardCategoryFilter