function Loader() {
  const logo = "</> STRIKELAB";
  return (
    <div className="loader">
      <h1 className="loader__title">{logo}</h1>
      <div className="loader__element"></div>
    </div>
  );
}

export default Loader;
