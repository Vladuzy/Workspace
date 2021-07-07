import { Nav, NavLink, NavMenu } from "./style";
import { CgWorkAlt } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { IoAppsOutline } from "react-icons/io5";

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
  return (
    <Nav>
      <NavMenu>
        <NavLink exact to="/works" className={isWork ? "isActive" : ""}>
          <CgWorkAlt size={25} />
          <span>Trabalhos</span>
        </NavLink>
        <NavLink to="/home" className={isHome ? "isActive" : ""}>
          <IoAppsOutline size={25} />
          <span>Início</span>
        </NavLink>
        <NavLink to="/profile" className={isProfile ? "isActive" : ""}>
          <FaRegUser size={25} />
          <span>Conta</span>
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Footer;
