import { FaUserAlt } from "react-icons/fa";
import "../styles/FollowCard.css";

const FollowCard = () => {
  return (
    <div className="follow__card">
      <h3>Who to follow</h3>
      <div className="follow__profiles">
      <div className="follow__profile">
          <div>
            <FaUserAlt className="profile__icon"></FaUserAlt>
            <div className="profile__info">
              <h4>Display Name</h4>
              <p>@displayname</p>
            </div>
          </div>
          <button className="">Follow</button>
        </div>
        <div className="follow__profile">
          <div>
            <FaUserAlt className="profile__icon"></FaUserAlt>
            <div className="profile__info">
              <h4>Display Name</h4>
              <p>@displayname</p>
            </div>
          </div>
          <button className="">Follow</button>
        </div>
      </div>
    </div>
  )
};

export default FollowCard;