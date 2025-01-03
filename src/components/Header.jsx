import FocusText from "./FocusText";
import SocialLinks from "./SocialLinks";
import { ReactComponent as LogoSVG } from "../assets/img/logo/logo-nvlb.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <LogoSVG width="200px" className="header__content__logo" />
        <h2>NVLB</h2>
        <p>I&apos;m a front-end developer with a passion for learning.</p>
        <p>
          I help your business and individuals by developing websites. I build
          websites to make you successful in the long term.
        </p>
        <FocusText />
        <SocialLinks />
      </div>
    </header>
  );
}

export default Header;
