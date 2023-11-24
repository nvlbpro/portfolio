import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Menu() {
  return (
    <ul className="menu">
      <Link to="/">
        <li className="menu__item">Home</li>
      </Link>
      <HashLink smooth to="#about">
        <li className="menu__item">About</li>
      </HashLink>
      <HashLink smooth to="#service">
        <li className="menu__item">Service</li>
      </HashLink>
      <HashLink smooth to="#projects">
        <li className="menu__item">Project</li>
      </HashLink>
      <HashLink className="inactive" smooth to="#review">
        <li
          className="menu__item inactive"
          content="🚧Under Construction🚧"
          title=""
        >
          Review
        </li>
      </HashLink>
      <HashLink smooth to="#contact">
        <li className="menu__item">Contact</li>
      </HashLink>
    </ul>
  );
}

export default Menu;
