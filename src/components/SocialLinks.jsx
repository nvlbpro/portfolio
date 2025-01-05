function SocialLinks() {
  return (
    <div className="social">
      <a href="https://nvlb.fr" className="text">
        Social Links
      </a>
      <div className="line"></div>
      <a
        href="https://www.facebook.com/nvlbpro"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-facebook"></i>{" "}
      </a>
      <a href="https://x.com/nvlbpro" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>{" "}
      </a>
      <a href="https://discord.com/users/1287108189115912192">
        <i className="fa-brands fa-discord" aria-hidden="true"></i>{" "}
      </a>
      {/* <a href="https://www.messenger.com/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-facebook-messenger" aria-hidden="true"></i>{" "}
      </a> */}
      <a href="https://github.com/nvlbpro/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" aria-hidden="true"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/nvlbpro"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin" aria-hidden="true"></i>{" "}
      </a>
    </div>
  );
}

export default SocialLinks;
