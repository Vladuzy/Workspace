import { HeaderContainer, FilterContainer, IconContainer, MainContainer, Input } from './styles'
import { GoSettings } from 'react-icons/go'
import CardWork from '../../components/CardWork';
import { useJobs } from '../../providers/Jobs';
import { useEffect } from 'react';
import Footer from '../../components/Footer';

const Works = () => {
  const { getListWaitingJobsWithoutCandidates, listWaitingJobs } = useJobs()
  console.log(listWaitingJobs)

  useEffect(() => {
    getListWaitingJobsWithoutCandidates()
  }, [])

  return (
    <>
      <HeaderContainer>
        <FilterContainer>
          <Input />
          <IconContainer>
            <GoSettings />
          </IconContainer>
        </FilterContainer>
      </HeaderContainer>
      <MainContainer>
        {listWaitingJobs.map(elem => (
          <CardWork job={elem} key={elem.id}/>
        ))}
      </MainContainer>
      <Footer />
    </>
  );
};

export default Works;
