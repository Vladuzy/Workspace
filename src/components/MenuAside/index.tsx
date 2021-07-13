import { IoApps, IoBriefcase } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import LogoImg from "../../assets/img/Logo.svg";
import ImgLogout from "../../assets/img/Logout.svg";
import { useAuth } from "../../providers/AuthProvider";
import { useMenuFooter } from "../../providers/MenuFooterProvider";
import {
  Container,
  NavMenuItens,
  NavMenuList,
  MenuBars,
  MenuBarsList,
  Logout,
} from "./style";

const Navbar = () => {
  const { inHome, setInHome, inWorks, setInWorks } = useMenuFooter();

  const history = useHistory();
  const { setIsAuthenticated } = useAuth();

  const handleClick = (page: string) => {
    if (page === "inWorks") {
      setInWorks(true);
      return setInHome(false);
    }
    setInWorks(false);
    setInHome(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setInHome(true);
    setInWorks(false);
    history.push("/");
  };

  return (
    <Container>
      <div>
        <MenuBars to="/home">
          <img src={LogoImg} alt="Logo da Workspace" />
        </MenuBars>
      </div>
      <nav>
        <NavMenuList>
          <NavMenuItens
            onClick={() => handleClick("inWorks")}
            className={inWorks ? "isActive" : ""}
          >
            <IoBriefcase size={25} />
            <MenuBarsList>Trabalhos</MenuBarsList>
          </NavMenuItens>
          <NavMenuItens
            onClick={() => handleClick("inHome")}
            className={inHome ? "isActive" : ""}
          >
            <IoApps size={25} />
            <MenuBarsList>Início</MenuBarsList>
          </NavMenuItens>
        </NavMenuList>
      </nav>
      <Logout onClick={handleLogout}>
        <img src={ImgLogout} alt="Ícone para sair da página" />
        Sair
      </Logout>
    </Container>
  );
};

export default Navbar;
