import {
  HeaderContainer,
  FilterContainer,
  IconContainer,
  MainContainer,
  Input,
  InputContainer,
  FilterTagsContainer,
} from "./styles";
import { GoSettings } from "react-icons/go";
import { HiSearch } from "react-icons/hi";
import CardWork from "../../components/CardWork";
import { useJobs } from "../../providers/Jobs";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { useViewport } from "../../providers/GetViewport";
import { useMenuFooter } from "../../providers/MenuFooterProvider";
import { Redirect } from "react-router-dom";
import Filter from "../../components/Filter";
import Footer from "../../components/Footer";
import CardCategoryFilter from "../../components/CardCategoryFilter";
import Loading from "../../components/Loading";

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
  id: string;
}

const Works = () => {
  const {
    getListWaitingJobsWithoutCandidates,
    listWaitingJobsWithoutCandidates,
  } = useJobs();
  const { token } = useAuth();
  const { viewport: { width } } = useViewport()
  const { setInHome, setInProfile, setInWorks } = useMenuFooter();
  const [loading, setLoading] = useState(true);

  const [filteredByFilterArr, setFilteredByFilterArr] = useState<Job[]>(
    [] as Job[]
  );

  const [filteredBySearchArr, setFilteredBySearchArr] = useState<Job[]>(
    [] as Job[]
  );

  //MUDA ENTRE MOSTRAR/NÃO MOSTRAR POP-UP DOS FILTROS
  const [showFilter, setShowFilter] = useState<boolean>(false as boolean);

  //VALOR INPUT PARA USAR VERIFICAR SE FOI DIGITADO ALGO
  const [inputValue, setInputValue] = useState<string>("" as string);

  //ARRAY QUE POSSUI O NOME DE CADA FILTRO QUE FOI SELECIONADO
  const [filters, setFilters] = useState<string[]>([] as string[]);

  //STRING QUE PODE POSSUIR 2 VALORES SOMENTE, MAIOR OU MENOR, ORDENAÇÃO DO VALOR OFERECIDO
  const [order, setOrder] = useState<string>("" as string);

  // COMEÇA AQUI O FILTRO

  const filterByCategories =
    filters.length > 0
      ? listWaitingJobsWithoutCandidates.filter((job) =>
          filters.includes(job.category)
        )
      : listWaitingJobsWithoutCandidates;

  const filterByCategoriesByInput =
    inputValue !== ""
      ? filterByCategories.filter((job) =>
          job.title.toLocaleLowerCase().includes(inputValue)
        )
      : filterByCategories;

  const filterByCategoriesByInputOrdered =
    order !== ""
      ? order === "Maior"
        ? filterByCategoriesByInput.sort(
            (a, b) => b.valueOffered - a.valueOffered
          )
        : filterByCategoriesByInput.sort(
            (a, b) => a.valueOffered - b.valueOffered
          )
      : filterByCategoriesByInput;

  // ACABA AQUI O FILTRO

  //FAZ O FILTRO COM BASE NO VALOR DO INPUT, SETA O MESMO VALOR
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toLocaleLowerCase());
    setFilteredBySearchArr(
      listWaitingJobsWithoutCandidates.filter((elem) =>
        elem.title.toLocaleLowerCase().includes(inputValue)
      )
    );
  };

  //MUDA O ESTADO PARA MOSTRAR OU NÃO POP UP DOS FILTROS
  const handleShowFilter = (value: boolean) => {
    setShowFilter(value);
  };

  //FUNÇÃO USADA NO 'X' DA TAG ROXA PARA REMOVER O FILTRO DO ARRAY
  const handleRemoveFilter = (ind: number) => {
    setFilters(filters.filter((_, index) => index !== ind));
  };

  const GlobalFilter = () => {
    if (filters.length > 0) {
      setFilteredByFilterArr(
        listWaitingJobsWithoutCandidates.filter((elem) =>
          filters.includes(elem.category)
        )
      );
    } else {
      setFilteredByFilterArr([]);
    }
  };

  useEffect(() => {
    setInHome(false);
    setInWorks(true);
    setInProfile(false);
    localStorage.setItem("@WorkSpace:inHome", "false");
    localStorage.setItem("@WorkSpace:inWorks", "true");
    localStorage.setItem("@WorkSpace:inProfile", "false");
    getListWaitingJobsWithoutCandidates(setLoading);
  }, []);

  useEffect(() => {
    GlobalFilter();
  }, [filters]);

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {showFilter && (
        <Filter
          close={handleShowFilter}
          setFilters={setFilters}
          setOrder={setOrder}
        />
      )}

      {loading ? (
        <Loading />
      ) : (
        <>
          <HeaderContainer>
            <FilterContainer>
              <InputContainer>
                <Input placeholder="Pesquisar..." onChange={handleSearch} />
                <HiSearch />
              </InputContainer>
              <IconContainer onClick={() => handleShowFilter(true)}>
                { width > 1266 && <h3>Filtro</h3>}
                <GoSettings />
              </IconContainer>
            </FilterContainer>
            <FilterTagsContainer>
              {filters.map((elem, ind) => (
                <CardCategoryFilter
                  text={elem}
                  ind={ind}
                  key={ind}
                  remove={handleRemoveFilter}
                />
              ))}
            </FilterTagsContainer>
          </HeaderContainer>
          <MainContainer>
            {filterByCategoriesByInputOrdered.length > 0
              ? filterByCategoriesByInputOrdered.map((elem) => (
                  <CardWork job={elem} key={elem.id} />
                ))
              : filterByCategoriesByInputOrdered.length > 0
              ? filterByCategoriesByInputOrdered.map((elem) => (
                  <CardWork job={elem} key={elem.id} />
                ))
              : listWaitingJobsWithoutCandidates.map((elem) => (
                  <CardWork job={elem} key={elem.id} />
                ))}
          </MainContainer>
          <Footer />
        </>
      )}
    </>
  );
};

export default Works;
