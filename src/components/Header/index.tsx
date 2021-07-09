import imgLogout from "../../assets/img/Logout.svg";
import imgStars from "../../assets/img/Stars.svg";
import imgAvatar from "../../assets/img/Avatar.svg";
import imgEdit from "../../assets/img/Edit.svg";
import {useHistory} from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import {Container, HandleContainer, HeaderInternContainer, ImgHandleContainer, HeaderContainer, ImgStarHeaderContainer, TitleContainer} from "./style";
const Header = () => {

  const {userLoggedInfo} = useAuth()
  console.log(userLoggedInfo)

  const history = useHistory()

  const handleLogout = () => {
    localStorage.clear()
    history.push("/")
  }
  const handleEdit = () => {
    history.push("/editProfile")
  }

  return (
    <Container>
      <HeaderContainer>
        <img src={imgAvatar} alt="Icone Avatar" />
      <HeaderInternContainer>
        <TitleContainer>Nome do usuário</TitleContainer>
        <ImgStarHeaderContainer src={imgStars} alt="Icone Stars" />
      </HeaderInternContainer>
      </HeaderContainer>
      <HandleContainer>
        <ImgHandleContainer onClick={handleLogout} src={imgLogout} alt="Icone Logout" />
        <ImgHandleContainer onClick={handleEdit} src={imgEdit} alt="Icone Edit" />
      </HandleContainer>

    </Container>
  );
};

export default Header;