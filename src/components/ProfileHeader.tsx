import {  FaArrowLeft, FaUserAlt } from "react-icons/fa";
import "../styles/ProfileHeader.css";

const ProfileHeader = () => {
  return (
    <div className="profile">
      <div className="profile__link">
        <FaArrowLeft />
        <div className="link__info">
          <h2 className="link__name">Name</h2>
          <p className="link_tweets">20 Tweets</p>
        </div>
      </div>
      <div className="profile__header">
        <div className="header__photo"></div>
        <div className="icon__container">
          <FaUserAlt className="profile__icon icon--large"></FaUserAlt>
        </div>
        <button className="btn__follow">Follow</button>
        <div className="profile__info">
          <h3 className="profile__display">Display Name</h3>
          <p className="profile__name">@displayname</p>
          <div className="profile__bio"></div>
          <p className="profile__date">Joined February 2020</p>
          <div className="profile__follow">
            <div className="following">
              <h4>50</h4>
              <p className="follow__text">Following</p>
            </div>
            <div className="followers">
              <h4>50</h4>
              <p className="follow__text">Followers</p>
            </div>
          </div>
        </div>
        <div className="profile__footer">
          <div className="footer__link">Tweets</div>
          <div className="footer__link">Tweets & replies</div>
          <div className="footer__link">Media</div>
          <div className="footer__link">Likes</div>
        </div>
      </div>
    </div>
  )
};

export default ProfileHeader;