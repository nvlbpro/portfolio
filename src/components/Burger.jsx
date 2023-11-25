import React, { useState } from "react";
<<<<<<< HEAD
import { slide as Menu } from "react-burger-menu";
=======
import { bubble as Menu } from "react-burger-menu";
>>>>>>> 397207d97b56a268bc33492e892cadc3e6d6b7a8
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Burger() {
<<<<<<< HEAD
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
=======
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const closeMenu = () => {
    setMenuIsOpen(false);
>>>>>>> 397207d97b56a268bc33492e892cadc3e6d6b7a8
  };

  return (
    <>
      <Menu
<<<<<<< HEAD
        isOpen={isMenuOpen}
=======
        isOpen={menuIsOpen}
>>>>>>> 397207d97b56a268bc33492e892cadc3e6d6b7a8
        width={"50%"}
        pageWrapId="page-wrap"
        outerContainerId="root"
        right
        // onStateChange prop is a callback that gets called whenever the state of the Menu
        // component changes. The state object contains information about the menu,
        // and in this case, we are interested in the isOpen property of that state.
<<<<<<< HEAD
        onStateChange={(state) => setIsMenuOpen(state.isOpen)}
=======
        onStateChange={(state) => setMenuIsOpen(state.isOpen)}
>>>>>>> 397207d97b56a268bc33492e892cadc3e6d6b7a8
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
