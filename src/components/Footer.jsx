function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Copyright © {currentYear}</p>
      <p>
        Designed by <span>NVLB</span>
      </p>
    </footer>
  );
}

export default Footer;
