import { push as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Burger() {
  return (
    <>
      <Menu width={"50%"} pageWrapId="page-wrap" outerContainerId="root" right>
        <Link to="/" className="menu-item">
          Home
        </Link>
        <HashLink to="#about" smooth className="menu-item">
          About
        </HashLink>
        <HashLink to="#" smooth className="menu-item" href="#info">
          Service
        </HashLink>
        <HashLink to="#projects" smooth className="menu-item" href="#info">
          Project
        </HashLink>

        <HashLink to="#" smooth className="menu-item">
          Contact
        </HashLink>
      </Menu>
    </>
  );
}

export default Burger;
