function SocialLinks() {
  return (
    <div className="social">
      <a href="https://oc-portfolio.strikelab.fr" className="text">
        Social Links
      </a>
      <div className="line"></div>
      <a
        href="https://www.facebook.com/StrikeLabOff/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-facebook"></i>{" "}
      </a>
      <a
        href="https://twitter.com/strikelab_off"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>{" "}
      </a>
      <a href="https://discordapp.com/users/1082943847966982205">
        <i className="fa-brands fa-discord" aria-hidden="true"></i>{" "}
      </a>
      {/* <a href="https://www.messenger.com/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-facebook-messenger" aria-hidden="true"></i>{" "}
      </a> */}
      <a href="https://github.com/Strikelab/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" aria-hidden="true"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/nicolas-vanlerberghe"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin" aria-hidden="true"></i>{" "}
      </a>
    </div>
  );
}

export default SocialLinks;
