import { Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useAuth } from "../../providers/AuthProvider";
import { useMenuFooter } from "../../providers/MenuFooterProvider";
import Footer from "../../components/Footer";
import {
  Container,
  StyledMureInfo,
  StyleMain,
  Exp,
  StyledNoInfo,
  JobsDone,
  ListJobs,
  StyleBody,
} from "./style";
import { useJobs } from "../../providers/Jobs";
import { string } from "yup/lib/locale";
import Button from "../../components/Button";
import CartCompletedJob from "../../components/CartCompletedJob";
import Loading from "../../components/Loading/index";
import CardWorkDone from "../../components/CardWorkDone"

interface moreInfoUser {
  description: string;
  telephone: string;
  categories: string[];
}

const Profile = () => {
  const { token, getUserLoggedInfo, userLoggedInfo } = useAuth();
  const { setInHome, setInWorks, setInProfile } = useMenuFooter();
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const { listCompletedJobs } = useJobs();

  useEffect(() => {
    getUserLoggedInfo(setLoading);
    setInHome(false);
    setInWorks(false);
    setInProfile(true);
    localStorage.setItem("@WorkSpace:inHome", "false");
    localStorage.setItem("@WorkSpace:inWorks", "false");
    localStorage.setItem("@WorkSpace:inProfile", "true");
  }, []);
  const { email, moreInfo } = userLoggedInfo;

  if (!token) {
    return <Redirect to="/" />;
  }

  const handleEdit = () => {
    history.push("/moreInfoProfile");
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <StyleBody>
            {moreInfo.telephone ? (
              <StyleMain>
                <StyledMureInfo>
                  <div>
                    <h3>Categorias</h3>
                    <div>
                      {moreInfo.categories &&
                        moreInfo.categories.map((iten: string) => (
                          <span>{iten}</span>
                        ))}
                    </div>
                  </div>

                  <div>
                    <h3>Contato</h3>
                    <span>{email}</span>
                    <span>{moreInfo.telephone} </span>
                  </div>
                </StyledMureInfo>
                <Exp>
                  <h3>Experiência</h3>
                  <div>{moreInfo.description} </div>
                </Exp>
              </StyleMain>
            ) : (
              <StyledNoInfo>
                <div>Adicione o restante de suas informações!</div>
                <Button
                  text="Adicionar"
                  width="100px"
                  heigth="32px"
                  borderRadius="20px"
                  handleClick={handleEdit}
                />
              </StyledNoInfo>
            )}

            <JobsDone>
              {listCompletedJobs ? (
                <>
                  <div className="JobsDoneHeader">
                    <h3>Trabalhos feitos</h3>
                    <Button
                      text="MOSTRAR TODOS"
                      width="150px"
                      heigth="25px"
                      borderRadius="20px"
                    />
                  </div>
                  <ListJobs>
                    {listCompletedJobs.map((job) => (
                      <CartCompletedJob key={job.id}>
                        {job.title}
                      </CartCompletedJob>
                    ))}
                  </ListJobs>
                </>
              ) : (
                <>
                  <h3>Trabalhos feitos</h3>
                  <div>
                    <div>
                      Parece que você não possui nenhum trabalho feito ainda...
                    </div>
                  </div>
                </>
              )}
            </JobsDone>
          </StyleBody>

          <Footer />
        </>
      )}
    </Container>
  );
};

export default Profile;
