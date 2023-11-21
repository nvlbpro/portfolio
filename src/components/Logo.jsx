function Logo() {
  const logoSymbol = "</>";
  const logoText = "STRIKELAB";
  const logoSlogan = "LET'S IMPROVE THE WEB";
  return (
    <div id="logo">
      <p className="logo__symbol"> {logoSymbol}</p>
      <div className="logo__text-container">
        <h1 className="logo__title"> {logoText}</h1>
        <p className="logo__slogan">{logoSlogan}</p>
      </div>
    </div>
  );
}

export default Logo;
