import { FaTwitter } from "react-icons/fa";
import "../styles/Header.css";

const DefaultHeader = () => {
  return (
    <header>
      <div className="header__container">
        <div className="header__icon">
          <FaTwitter></FaTwitter>
        </div>
        <div className="header__explore">
          <h2># Explore</h2>
        </div>
      </div>
    </header>
  )
};

export default DefaultHeader;