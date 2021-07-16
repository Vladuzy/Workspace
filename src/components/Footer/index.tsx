import { Nav, NavLink, NavMenu } from "./style";
import {
  IoBriefcase,
  IoBriefcaseOutline,
  IoApps,
  IoAppsOutline,
  IoPerson,
  IoPersonOutline,
} from "react-icons/io5";

import { useAuth } from "../../providers/AuthProvider";
import { useMenuFooter } from "../../providers/MenuFooterProvider";

//NÃO PODE APARECER NA TELA DE DESCRIÇÃO DE TRABALHO
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface FooterProps {
  minHeight?: string;
  isWork?: boolean;
  isHome?: boolean;
  isProfile?: boolean;
}

interface Params {
  id: string;
}

const Footer = ({
  minHeight = "initial",
  isWork = false,
  isHome = false,
  isProfile = false,
}: FooterProps) => {
  let { pathname } = useLocation();
  const [isDescriptionPage, setIsDescriptionPage] = useState<boolean>(
    false as boolean
  );

  const handleIsDescriptionPage = () => {
    if (pathname.search(/\d/g) !== -1) {
      setIsDescriptionPage(true);
    } else {
      setIsDescriptionPage(false);
    }
  };

  useEffect(() => {
    handleIsDescriptionPage();
  }, [pathname]);

  const { isAuthenticated } = useAuth();
  const { inHome, setInHome, inWorks, setInWorks, inProfile, setInProfile } =
    useMenuFooter();

  return (
    <>
      {isAuthenticated && !isDescriptionPage && (
        <Nav minHeight={minHeight}>
          <NavMenu>
            <NavLink
              // onClick={handleSwitchToWorks}
              exact
              to="/works"
              className={inWorks ? "isActive" : ""}
            >
              {inWorks ? (
                <IoBriefcase size={25} />
              ) : (
                <IoBriefcaseOutline size={25} />
              )}

              <span>Trabalhos</span>
            </NavLink>
            <NavLink
              // onClick={handleSwitchToHome}
              to="/home"
              className={inHome ? "isActive" : ""}
            >
              {inHome ? <IoApps size={25} /> : <IoAppsOutline size={25} />}
              <span>Início</span>
            </NavLink>
            <NavLink
              // onClick={handleSwitchToProfile}
              to="/profile"
              className={inProfile ? "isActive" : ""}
            >
              {inProfile ? (
                <IoPerson size={25} />
              ) : (
                <IoPersonOutline size={25} />
              )}

              <span>Conta</span>
            </NavLink>
          </NavMenu>
        </Nav>
      )}
    </>
  );
};

export default Footer;
