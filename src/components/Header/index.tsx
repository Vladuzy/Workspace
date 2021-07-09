import imgLogout from "../../assets/img/Logout.svg";
import Rating from '@material-ui/lab/Rating';
import imgAvatar from "../../assets/img/Avatar.svg";
import imgEdit from "../../assets/img/Edit.svg";
import {useHistory} from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import {useJobs} from "../../providers/Jobs"
import {Container, HandleContainer, HeaderInternContainer, ImgHandleContainer, HeaderContainer, ImgStarHeaderContainer, TitleContainer} from "./style";
const Header = () => {
  const {listCompletedJobs} = useJobs()
  const {userLoggedInfo} = useAuth()
  console.log(listCompletedJobs)

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
        <Rating precision={0.5} name="read-only" value={4.5} readOnly />
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