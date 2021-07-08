import { useEffect, useState } from "react"
import { CategoryTagContainer } from './styles'

interface CategoryTagProps {
  category: string
}

const CategoryTag = ({ category }: CategoryTagProps) => {
  const [color, setColor] = useState('')

  const handleColor = () => {
    switch (category) {
      case 'Limpeza':
        setColor('var(--vermelho)')
        break;

      case 'Pintura':
        setColor('var(--amarelo)')
        break;

      case 'Eletricista':
        setColor('var(--azul)')
        break;

      case 'Encanador':
        setColor('var(--roxo-categoria)')
        break;

      case 'Gerais':
        setColor('var(--verde)')
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    handleColor()
  }, [category])

  return(
    <CategoryTagContainer color={color}>
      {category}
    </CategoryTagContainer>
  )
}

export default CategoryTag