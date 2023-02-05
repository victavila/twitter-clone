import TweetForm from "./TweetForm";
import { RxCross1 } from "react-icons/rx";
import "../styles/TweetModal.css";

const TweetModal = () => {
  return (
    <div className="tweet__modal">
      <div className="modal__form">
        <div className="modal__exit">
          <RxCross1 className="exit__icon"></RxCross1>
        </div>
        <TweetForm />
      </div>
    </div>
  )
};

export default TweetModal;