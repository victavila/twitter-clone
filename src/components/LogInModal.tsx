import { FaTwitter } from "react-icons/fa";
import "../styles/LogInModal.css";

const LogInModal = () => {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="login__icon">
          <FaTwitter className="icon--blue"></FaTwitter>
        </div>
        <h2 className="login__heading">Log in to Twitter</h2>
        <form className="login__form">
          <label className="form__label">
            <input type="email" placeholder="Email"></input>
          </label>
          <label className="form__label">
            <input type="password" placeholder="Password"></input>
          </label>
          <button>Log in</button>
        </form>
        <div className="login__footer">
          <p>Don't have an account?</p>
          <p>Sign up</p>
        </div>
      </div>
    </div>
  )
};

export default LogInModal;