import { HeaderContainer } from "./styles";
import Logo from "../../assets/logo.svg";
import { Scroll, Timer } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
