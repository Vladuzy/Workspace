import { useEffect, useState } from "react"
import { CategoryTagContainer } from './styles'

interface CategoryTagProps {
  category: string
}

const CategoryTag = ({ category }: CategoryTagProps) => {

  return(
    <CategoryTagContainer category={category}>
      {category}
    </CategoryTagContainer>
  )
}

export default CategoryTag