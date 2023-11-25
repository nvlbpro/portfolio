import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Burger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Menu
        isOpen={isMenuOpen}
        width={"50%"}
        pageWrapId="page-wrap"
        outerContainerId="root"
        right
        // onStateChange prop is a callback that gets called whenever the state of the Menu
        // component changes. The state object contains information about the menu,
        // and in this case, we are interested in the isOpen property of that state.
        onStateChange={(state) => setIsMenuOpen(state.isOpen)}
      >
        <Link to="#" className="menu-item" onClick={closeMenu}>
          Home
        </Link>
        <HashLink to="#about" className="menu-item" onClick={closeMenu}>
          About
        </HashLink>
        <HashLink to="#service" className="menu-item" onClick={closeMenu}>
          Service
        </HashLink>
        <HashLink to="#projects" className="menu-item" onClick={closeMenu}>
          Project
        </HashLink>
        <HashLink to="#contact" className="menu-item" onClick={closeMenu}>
          Contact
        </HashLink>
      </Menu>
    </>
  );
}

export default Burger;
