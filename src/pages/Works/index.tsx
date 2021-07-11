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
import { useEffect } from "react";
import Footer from "../../components/Footer";
import { useAuth } from "../../providers/AuthProvider";
import { useMenuFooter } from "../../providers/MenuFooterProvider";
import { Redirect } from "react-router-dom";

const Works = () => {
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

  if (!token) {
    return <Redirect to="/" />;
  }

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
        {listWaitingJobsWithoutCandidates.map((elem) => (
          <CardWork job={elem} key={elem.id} />
        ))}
      </MainContainer>
      <Footer />
    </>
  );
};

export default Works;
