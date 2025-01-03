import { ReactComponent as LogoSVG } from "../assets/img/logo/logo-nvlb.svg";
function Loader() {
  // const logo = "</> STRIKELAB";
  return (
    <div className="loader">
      <LogoSVG className="header__content__logo" />
      <p className="loader__title">NVLB</p>
      <div className="loader__element"></div>
    </div>
  );
}

export default Loader;
