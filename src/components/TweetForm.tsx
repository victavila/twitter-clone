import { FaUserAlt } from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import "../styles/TweetForm.css";

const TweetForm =  () => {
  return (
    <div className="form__container">
      <div className="form__profile">
        <FaUserAlt className="profile__icon icon--large"></FaUserAlt>
      </div>
      <form className="tweet__form">
        <label htmlFor="tweet">
          <textarea name="tweet" id="tweet" className="tweet__input" placeholder="What's happening?" rows={5}></textarea>
        </label>
        <div className="form__footer">
          <label htmlFor="image-upload">
            <input name="image-upload" id="image-upload" type="file" accept="image/png, image/jpeg" alt="tweet image">
            </input>
            <BsImage className="file__icon"></BsImage>
          </label>
          <button className="btn__disabled" disabled={true}>Tweet</button>
        </div>
      </form>
    </div>
  )
};

export default TweetForm;