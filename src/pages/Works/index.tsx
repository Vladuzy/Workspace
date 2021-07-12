import {
  HeaderContainer,
  FilterContainer,
  IconContainer,
  MainContainer,
  Input,
} from "./styles";
import { GoSettings } from "react-icons/go";
import CardWork from "../../components/CardWork";
import { useJobs } from "../../providers/Jobs";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { useMenuFooter } from "../../providers/MenuFooterProvider";
import { Redirect } from "react-router-dom";
import Filter from "../../components/Filter";
import Footer from "../../components/Footer";

const Works = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false as boolean)
  const [filters, setFilters] = useState<string[]>([] as string[])
  const [order, setOrder] = useState<string>('' as string)
  console.log(order)
  console.log(filters)
  const {
    getListWaitingJobsWithoutCandidates,
    listWaitingJobsWithoutCandidates,
  } = useJobs();
  const { token } = useAuth();
  const { setInHome, setInProfile, setInWorks } = useMenuFooter();

  useEffect(() => {
    setInHome(false);
    setInWorks(true);
    setInProfile(false);
    localStorage.setItem("@WorkSpace:inHome", "false");
    localStorage.setItem("@WorkSpace:inWorks", "true");
    localStorage.setItem("@WorkSpace:inProfile", "false");
    getListWaitingJobsWithoutCandidates();
  }, []);

  const handleShowFilter = (value: boolean): void => {
    setShowFilter(value)
  }

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {showFilter && <Filter close={handleShowFilter} setFilters={setFilters} filters={filters} setOrder={setOrder}/>}
      <HeaderContainer>
        <FilterContainer>
          <Input />
          <IconContainer>
            <GoSettings onClick={() => handleShowFilter(true)}/>
          </IconContainer>
        </FilterContainer>
      </HeaderContainer>
      <MainContainer>
        {listWaitingJobsWithoutCandidates.map((elem) => (
          <CardWork job={elem} key={elem.id} />
        ))}
      </MainContainer>
      <Footer />
    </>
  );
};

export default Works;
