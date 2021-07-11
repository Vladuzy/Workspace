import { Nav, NavLink, NavMenu } from "./style";
// import { CgWorkAlt } from "react-icons/cg";
import {
  IoBriefcase,
  IoBriefcaseOutline,
  IoApps,
  IoAppsOutline,
  IoPerson,
  IoPersonOutline,
} from "react-icons/io5";
// import { FaRegUser } from "react-icons/fa";
// import { IoAppsOutline } from "react-icons/io5";
import { useAuth } from "../../providers/AuthProvider";
import { useMenuFooter } from "../../providers/MenuFooterProvider";
// import { useState } from "react";

interface FooterProps {
  isWork?: boolean;
  isHome?: boolean;
  isProfile?: boolean;
}

const Footer = ({
  isWork = false,
  isHome = false,
  isProfile = false,
}: FooterProps) => {
  const { isAuthenticated } = useAuth();
  const { inHome, setInHome, inWorks, setInWorks, inProfile, setInProfile } =
    useMenuFooter();

  const handleSwitchToHome = () => {
    setInHome(true);
    setInWorks(false);
    setInProfile(false);
  };

  const handleSwitchToWorks = () => {
    setInHome(false);
    setInWorks(true);
    setInProfile(false);
  };

  const handleSwitchToProfile = () => {
    setInHome(false);
    setInWorks(false);
    setInProfile(true);
  };

  return (
    <>
      {isAuthenticated && (
        <Nav>
          <NavMenu>
            <NavLink
              onClick={handleSwitchToWorks}
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
              onClick={handleSwitchToHome}
              to="/home"
              className={inHome ? "isActive" : ""}
            >
              {inHome ? <IoApps size={25} /> : <IoAppsOutline size={25} />}
              <span>Início</span>
            </NavLink>
            <NavLink
              onClick={handleSwitchToProfile}
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
