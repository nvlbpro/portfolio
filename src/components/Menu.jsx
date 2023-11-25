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
        <li className="menu__item">Home</li>
      </Link>
      <HashLink to="#about" onClick={closeMenu}>
        <li className="menu__item">About</li>
      </HashLink>
      <HashLink to="#service" onClick={closeMenu}>
        <li className="menu__item">Service</li>
      </HashLink>
      <HashLink to="#projects" onClick={closeMenu}>
        <li className="menu__item">Project</li>
      </HashLink>
      <HashLink className="inactive" to="#review" onClick={closeMenu}>
        <li
          className="menu__item inactive"
          content="🚧Under Construction🚧"
          title=""
        >
          Review
        </li>
      </HashLink>
      <HashLink to="#contact" onClick={closeMenu}>
        <li className="menu__item">Contact</li>
      </HashLink>
    </ul>
  );
}

export default Menu;
