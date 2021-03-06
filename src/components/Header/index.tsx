import imgLogout from "../../assets/img/Logout.svg";
import Rating from "@material-ui/lab/Rating";
import imgAvatar from "../../assets/img/Avatar.svg";
import imgEdit from "../../assets/img/Edit.svg";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { useJobs } from "../../providers/Jobs";
import { useMenuFooter } from "../../providers/MenuFooterProvider";
import {
  Container,
  HandleContainer,
  HeaderInternContainer,
  ImgHandleContainer,
  HeaderContainer,
  ImgStarHeaderContainer,
  SubTitleHeader,
  ImageContainerHeader,
  ImageContainer,
  ImgHandleContainerBlue,
  TitleContainer,
  ContainerHeader,
} from "./style";
import { useEffect, useState } from "react";

import { useViewport } from "../../providers/GetViewport";
import EditInfoProfileDesktop from "../../components/DESKTOP/EditInfoProfileDesktop";

const Header = () => {
  const {
    viewport: { width },
  } = useViewport();
  const [editOpen, setEditOpen] = useState<boolean>(false as boolean);
  const {
    listCompletedJobs,
    getListUserWorkerCompletedJobs,
    getListUserEmployerCompletedJobs,
  } = useJobs();
  const { userLoggedInfo, setIsAuthenticated } = useAuth();
  const { setInHome, setInProfile, setInWorks } = useMenuFooter();

  const { type } = userLoggedInfo;

  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setInHome(true);
    setInWorks(false);
    setInProfile(false);
    history.push("/");
  };

  const handleEdit = () => {
    if (width > 1266) {
      setEditOpen(true);
    } else {
      history.push("/editInfoProfile");
    }
  };

  const totalRating =
    listCompletedJobs.length === 0
      ? "Sem Avaliações"
      : listCompletedJobs.reduce(
          (acc, acumulater) => parseInt(acumulater.rating) + acc,
          0
        ) / listCompletedJobs.length;

  useEffect(() => {
    if (userLoggedInfo.type === "employer") {
      getListUserEmployerCompletedJobs();
    } else if (userLoggedInfo.type === "worker") {
      getListUserWorkerCompletedJobs();
    }
  }, []);

  return (
    <>
      {editOpen && <EditInfoProfileDesktop setEditOpen={setEditOpen} />}
      <Container>
        <HeaderContainer>
          <ImageContainer>
            <ImageContainerHeader
              src={userLoggedInfo.img === "" ? imgAvatar : userLoggedInfo.img}
              alt="Icone Avatar"
            />
            <ContainerHeader onClick={() => history.push("/avatar")}>
              <SubTitleHeader>Avatar</SubTitleHeader>
              <ImgHandleContainerBlue
                onClick={handleEdit}
                src={imgEdit}
                alt="Icone Edit"
              />
            </ContainerHeader>
          </ImageContainer>
          <HeaderInternContainer>
            <TitleContainer>{userLoggedInfo.name}</TitleContainer>
            {type === "worker" &&
              (totalRating === "Sem Avaliações" ? (
                <p>{totalRating}</p>
              ) : (
                <Rating
                  precision={0.5}
                  name="read-only"
                  value={totalRating}
                  readOnly
                />
              ))}
          </HeaderInternContainer>
        </HeaderContainer>
        <HandleContainer>
          <ImgHandleContainer
            onClick={handleLogout}
            src={imgLogout}
            alt="Icone Logout"
          />
          <ImgHandleContainer
            onClick={handleEdit}
            src={imgEdit}
            alt="Icone Edit"
          />
        </HandleContainer>
      </Container>
    </>
  );
};

export default Header;
