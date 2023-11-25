import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Menu({ isOpen, setIsMenuOpen }) {
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <ul className="menu">
      <Link to="/" onClick={closeMenu}>
        <li className="menu__item bm-white">Home</li>
      </Link>
      <HashLink smooth to="#about" onClick={closeMenu}>
        <li className="menu__item bm-white">About</li>
      </HashLink>
      <HashLink smooth to="#service" onClick={closeMenu}>
        <li className="menu__item bm-white">Service</li>
      </HashLink>
      <HashLink smooth to="#projects" onClick={closeMenu}>
        <li className="menu__item bm-white">Project</li>
      </HashLink>
      <HashLink className="inactive" smooth to="#review" onClick={closeMenu}>
        <li
          className="menu__item inactive bm-white"
          content="🚧Under Construction🚧"
          title=""
        >
          Review
        </li>
      </HashLink>
      <HashLink smooth to="#contact" onClick={closeMenu}>
        <li className="menu__item bm-white">Contact</li>
      </HashLink>
    </ul>
  );
}

export default Menu;
