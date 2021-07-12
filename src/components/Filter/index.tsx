import { BackgroundContainer, FilterContainer, HeaderContainer } from './styles'
import { IoMdClose } from 'react-icons/io'
import CategorySelect from '../CategorySelect'
import ValueFilter from '../ValueFilter'
import { Dispatch, SetStateAction, useState } from 'react'
import Button from '../Button'

interface FilterProps {
  close: (value: boolean) => void;
  setFilters: Dispatch<SetStateAction<string[]>>
  setOrder: Dispatch<SetStateAction<string>>
}

const Filter = ({ close, setFilters, setOrder }: FilterProps) => {
  const [selected, setSelected] = useState<string[]>([] as string[])
  const [value, setValue] = useState<string>('' as string)

  const handleAddFilter = () => {
    setFilters(selected)
    setOrder(value)
    close(false)
  }
  
  return(
    <BackgroundContainer>
      <FilterContainer>
        <HeaderContainer>
          <h3>Filtro de Trabalhos</h3>
          <IoMdClose onClick={() => close(false)}/>
        </HeaderContainer>
        <CategorySelect setSelected={setSelected} selected={selected}>
          <h2>Categorias</h2>
        </CategorySelect>
        <ValueFilter setSelected={setValue}/>
        <Button text='Aceitar Filtros' width='270px' heigth='35px' borderRadius='10px' handleClick={handleAddFilter}/>
      </FilterContainer>
    </BackgroundContainer>
  )
}

export default Filter