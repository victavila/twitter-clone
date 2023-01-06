import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__text">
        <h2>Don't miss what's happening</h2>
        <p>People on Twitter are the first to know.</p>
      </div>
      <div className="footer__buttons">
        <button className="btn--blue">Log in</button>
        <button className="btn--white">Sign up</button>
      </div>
    </footer>
  )
};

export default Footer;