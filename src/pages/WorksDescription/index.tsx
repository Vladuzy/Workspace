import { HeaderContainer, MainContainer, JobInfoContainer, SpecialInfoContainer, DescriptionInfoContainer } from './styles'
import CategoryTag from '../../components/CategoryTag'
import Button from '../../components/Button'

import { FaDollarSign, FaUserCircle } from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { MdLocationOn } from 'react-icons/md'

import { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useJobs } from '../../providers/Jobs'

interface Params {
  id: string
}

const WorksDescription = () => {
  const history = useHistory()
  const { id } = useParams() as Params
  const { getASpecificJob, currentJob, userWorkerApplyToJob } = useJobs()
  const { title, valueOffered, date, description, category, location} = currentJob

  useEffect(() => {
    getASpecificJob(id)
  }, [])

  return (
    <>
      <HeaderContainer>
        <RiArrowLeftSLine onClick={() => history.push('/works')}/>
        <FaUserCircle />
      </HeaderContainer>
      <MainContainer>
        <JobInfoContainer>
          <h2>{title}</h2>
          <h3>Contratante do trabalho com id {id}</h3>

          <SpecialInfoContainer>
            <div>
              <FaDollarSign />
              <span>{valueOffered}</span>
            </div>
            <div>
              <FiClock />
              <span>{date}</span>
            </div>
          </SpecialInfoContainer>

        </JobInfoContainer>
        <DescriptionInfoContainer>
          <h2>Descrição do Trabalho</h2>
          <CategoryTag category={category}/>
          <p>
            {description} 
          </p>
          <div>
            <MdLocationOn />
            <span>{location}</span>
          </div>
        </DescriptionInfoContainer>
        <Button text='Aplicar' width='230px' heigth='40px' borderRadius='20px' handleClick={() => userWorkerApplyToJob(id)} backColor='var(--roxo-tema-principal)' />
      </MainContainer>
    </>
  );
};

export default WorksDescription;