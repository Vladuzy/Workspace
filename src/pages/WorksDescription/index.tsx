import { HeaderContainer, MainContainer, JobInfoContainer, SpecialInfoContainer, DescriptionInfoContainer } from './styles'
import { useParams } from 'react-router-dom'
import { FaDollarSign, FaUserCircle } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import { RiArrowLeftSLine } from 'react-icons/ri'
import CategoryTag from '../../components/CategoryTag'
import Button from '../../components/Button'

interface Params {
  id: string
}

const WorksDescription = () => {
  const { id } = useParams() as Params
  const category = 'Gerais'

  return (
    <>
      <HeaderContainer>
        <RiArrowLeftSLine />
        <FaUserCircle />
      </HeaderContainer>
      <MainContainer>
        <JobInfoContainer>
          <h2>Trabalho com id {id}</h2>
          <h3>Contratante do trabalho com id {id}</h3>

          <SpecialInfoContainer>
            <div>
              <FaDollarSign />
              <span>Valor</span>
            </div>
            <div>
              <FiClock />
              <span>Horário</span>
            </div>
          </SpecialInfoContainer>

        </JobInfoContainer>
        <DescriptionInfoContainer>
          <h2>Descrição do Trabalho</h2>
          <CategoryTag category={category}/>
          <p>
            Aenean iaculis neque nibh, vel feugiat est viverra in. 
            Nam sit amet eros egestas, vulputate felis posuere, pretium nibh. 
          </p>
        </DescriptionInfoContainer>
        <Button text='Aplicar' width='230px' heigth='40px' borderRadius='20px' handleClick={() => console.log('Colocar função WorsDetails')} backColor='var(--roxo-tema-principal)' color='white' border='none' fontSize='17px'/>
      </MainContainer>
    </>
  );
};

export default WorksDescription;