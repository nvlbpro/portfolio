import FocusText from "./FocusText";
import SocialLinks from "./SocialLinks";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <h2>STRIKELAB</h2>
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
