import {
  HeaderContainer,
  FilterContainer,
  IconContainer,
  MainContainer,
  Input,
  InputContainer,
  FilterTagsContainer
} from "./styles";
import { GoSettings } from "react-icons/go";
import { HiSearch } from 'react-icons/hi'
import CardWork from "../../components/CardWork";
import { useJobs } from "../../providers/Jobs";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { useMenuFooter } from "../../providers/MenuFooterProvider";
import { Redirect } from "react-router-dom";
import Filter from "../../components/Filter";
import Footer from "../../components/Footer";
import CardCategoryFilter from '../../components/CardCategoryFilter'

interface Job {
  title: string;
  category: string;
  description: string;
  location: string;
  status: string;
  rating: string;
  valueOffered: number;
  date: string;
  appliedCandidateId: string;
  acceptedCandidateId: string;
  rejectedCandidatesIds: string[];
  userId: string;
  id: string
}

const Works = () => {
  //FILTRO USADO PELO INPUT 
  const [filteredArr, setFilteredArr] = useState<Job[]>([] as Job[])
  //MUDA ENTRE MOSTRAR/NÃO MOSTRAR POP-UP DOS FILTROS
  const [showFilter, setShowFilter] = useState<boolean>(false as boolean)


  //ARRAY QUE POSSUI O NOME DE CADA FILTRO QUE FOI SELECIONADO
  const [filters, setFilters] = useState<string[]>([] as string[])
  //STRING QUE PODE POSSUIR 2 VALORES SOMENTE, MAIOR OU MENOR, ORDENAÇÃO DO VLAOR OFERECIDO
  const [order, setOrder] = useState<string>('' as string)
  

  const {
    getListWaitingJobsWithoutCandidates,
    listWaitingJobsWithoutCandidates,
  } = useJobs();
  const { token } = useAuth();
  const { setInHome, setInProfile, setInWorks } = useMenuFooter();

  //FAZ O FILTRO COM BASE NO VALOR DO INPUT
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLocaleLowerCase()
    setFilteredArr(listWaitingJobsWithoutCandidates.filter(elem => elem.title.toLocaleLowerCase().includes(value)))
  }

  //MUDA O ESTADO PARA MOSTRAR OU NÃO POP UP DOS FILTROS
  const handleShowFilter = (value: boolean) => {
    setShowFilter(value)
  }

  //FUNÇÃO USADA NO 'X' DA TAG ROXA PARA REMOVER O FILTRO DO ARRAY
  const handleRemoveFilter = (ind: number) => {
    setFilters(filters.filter((_, index) => index !== ind))
  }

  useEffect(() => {
    setInHome(false);
    setInWorks(true);
    setInProfile(false);
    localStorage.setItem("@WorkSpace:inHome", "false");
    localStorage.setItem("@WorkSpace:inWorks", "true");
    localStorage.setItem("@WorkSpace:inProfile", "false");
    getListWaitingJobsWithoutCandidates();
  }, []);

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {showFilter && <Filter close={handleShowFilter} setFilters={setFilters} setOrder={setOrder}/>}
      <HeaderContainer>
        <FilterContainer>
          <InputContainer>
            <Input placeholder='Pesquisar...' onChange={handleSearch}/>
            <HiSearch />
          </InputContainer>
          <IconContainer>
            <GoSettings onClick={() => handleShowFilter(true)}/>
          </IconContainer>
        </FilterContainer>
        <FilterTagsContainer>
            {filters.map((elem,ind) => (
              <CardCategoryFilter text={elem} ind={ind} key={ind} remove={handleRemoveFilter}/>
            ))}
          </FilterTagsContainer>
      </HeaderContainer>
      <MainContainer>

        {filteredArr.length > 0 ? 
          filteredArr.map((elem) => (
            <CardWork job={elem} key={elem.id} />
          ))
          : 
          listWaitingJobsWithoutCandidates.map((elem) => (
            <CardWork job={elem} key={elem.id} />
          ))
        }

      </MainContainer>
      <Footer />
    </>
  );
};

export default Works;
