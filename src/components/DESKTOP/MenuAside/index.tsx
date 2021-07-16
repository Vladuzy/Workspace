import { IoApps, IoBriefcase } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import LogoImg from "../../../assets/img/Logo.svg";
import ImgLogout from "../../../assets/img/Logout.svg";
import { useAuth } from "../../../providers/AuthProvider";
import { useMenuFooter } from "../../../providers/MenuFooterProvider";
import {
  Container,
  NavMenuItens,
  NavMenuList,
  MenuBars,
  MenuBarsList,
  Logout,
} from "./style";
import { useState } from "react";
const Navbar = () => {
  // const { inHome, setInHome, inWorks, setInWorks } = useMenuFooter();
  const [inHomeAside, setInHomeAside] = useState(
    localStorage.getItem("@WorkSpace:inHomeAside")
      ? JSON.parse(localStorage.getItem("@WorkSpace:inHomeAside") as string)
      : true
  );
  const [inWorksAside, setInWorksAside] = useState(
    localStorage.getItem("@WorkSpace:inWorksAside")
      ? JSON.parse(localStorage.getItem("@WorkSpace:inWorksAside") as string)
      : false
  );

  const history = useHistory();
  const { setIsAuthenticated } = useAuth();

  const handleClick = (page: string) => {
    if (page === "inWorks") {
      setInWorksAside(true);
      setInHomeAside(false);
      localStorage.setItem("@WorkSpace:inHomeAside", "false");
      localStorage.setItem("@WorkSpace:inWorksAside", "true");
      history.push("/works");
    }
    if (page === "inHome") {
      setInWorksAside(false);
      setInHomeAside(true);
      localStorage.setItem("@WorkSpace:inHomeAside", "true");
      localStorage.setItem("@WorkSpace:inWorksAside", "false");
      history.push("/home");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setInHomeAside(true);
    setInWorksAside(false);
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
            className={inWorksAside ? "isActive" : ""}
          >
            <IoBriefcase size={25} />
            <MenuBarsList>Trabalhos</MenuBarsList>
          </NavMenuItens>
          <NavMenuItens
            onClick={() => handleClick("inHome")}
            className={inHomeAside ? "isActive" : ""}
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
