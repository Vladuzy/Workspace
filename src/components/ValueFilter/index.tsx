import { useEffect } from 'react'
import { Dispatch, SetStateAction, useState } from 'react'
import { FaDollarSign } from 'react-icons/fa'
import { ValueContainer, ValueCard } from './styles'

interface ValueFilterProps {
  setSelected: Dispatch<SetStateAction<string>>
}

const ValueFilter = ({ setSelected,  }: ValueFilterProps) => {
  const [isActive, setIsActive] = useState<string>('' as string)

  const handleAddValue = () => {
    if (isActive !== '') {
      setSelected(isActive)
    }
  }

  useEffect(() => {
    handleAddValue()
  }, [isActive])

  return(
    <ValueContainer>
      <h2>Valor Ofertado</h2>
      <button>
        <ValueCard onClick={() => setIsActive('Maior')} active={isActive === 'Maior' && true}>
          <h3>Maior</h3>
          <FaDollarSign />
        </ValueCard>
      </button>
      <button>
        <ValueCard onClick={() => setIsActive('Menor')} active={isActive === 'Menor' && true}>
          <h3>Menor</h3>
          <FaDollarSign />
        </ValueCard>
      </button>
    </ValueContainer>
  )
}

export default ValueFilter