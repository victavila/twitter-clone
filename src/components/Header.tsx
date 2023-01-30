import { FaBell, FaEllipsisH, FaHashtag, FaHome, FaTwitter, FaUser, FaUserAlt } from "react-icons/fa";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="header__icon">
          <FaTwitter className="icon--blue icon--padding"></FaTwitter>
        </div>
        <div className="menu">
          <div className="menu__link">
            <FaHome className="link__icon"></FaHome>
            <span>Home</span>
          </div>
          <div className="menu__link">
            <FaHashtag className="link__icon"></FaHashtag>
            <span>Explore</span>
          </div>
          <div className="menu__link">
            <FaBell className="link__icon"></FaBell>
            <span>Notifications</span>
          </div>
          <div className="menu__link">
            <FaUser className="link__icon"></FaUser>
            <span>Profile</span>
          </div>
        </div>
        <button className="tweet__btn">Tweet</button>
        <div className="logout">
          <div className="logout__user">
            <FaUserAlt className="profile__icon"></FaUserAlt>
            <div className="logout__info">
              <span>Display Name</span>
              <span>@displayname</span>
            </div>
          </div>
          <FaEllipsisH className="ellipsis__icon"></FaEllipsisH>
        </div>
      </div>
    </header>
  )
};

export default Header;