import { FaUserAlt } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai"
import "../styles/Tweet.css";

const Tweet = () => {
  return (
    <div className="tweet">
      <div className="tweet__profile">
        <FaUserAlt className="profile__icon"></FaUserAlt>
      </div>
      <div className="tweet__main">
        <div className="tweet__header">
          <div className="tweet__displayname">
            <h3>Default Name</h3>
          </div>
          <div className="tweet__username">
            <p>@Default_name</p>
          </div>
          <div className="tweet__date">
            <p>Jan 10</p>
          </div>
        </div>
        <div className="tweet__content">
          <p>This is the tweet place holder</p>
        </div>
        <div className="tweet_image"></div>
        <div className="tweet__footer">
          <div className="footer__replies">
            <IoChatbubbleOutline className="footer__icon"></IoChatbubbleOutline>
            <p>5</p>
          </div>
          <div className="footer__retweets">
            <AiOutlineRetweet className="footer__icon"></AiOutlineRetweet>
            <p>6</p>
          </div>
          <div className="footer__likes">
            <AiOutlineHeart className="footer__icon"></AiOutlineHeart>
            <p>7</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Tweet;