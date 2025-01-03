import { ReactComponent as LogoSVG } from "../assets/img/logo/logo-nvlb.svg";
function Logo() {
  // const logoSymbol = "</>";
  const logoText = "NVLB";
  const logoSlogan = "LET'S IMPROVE THE WEB";
  // const logoSVG = require("../assets/img/logo/logo-nvlb.svg");
  return (
    <div id="logo">
      <div id="logo__container">
        {" "}
        <LogoSVG className="logo__symbol" />
        <h1 className="logo__title"> {logoText}</h1>
      </div>
      <div className="logo__text-container">
        <p className="logo__slogan">{logoSlogan}</p>
      </div>
    </div>
  );
}

export default Logo;
