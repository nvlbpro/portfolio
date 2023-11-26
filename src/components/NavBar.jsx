// import Burger from "./Burger";
import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div id="navbar" className="navbar custom-navbar">
      <Logo />
      <Menu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}
export default NavBar;
