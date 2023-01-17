import "../styles/SignUpModal.css";

const SignUpModal = () => {
  return (
    <div className="modal">
      <div className="modal__container">
        <h2 className="signup__heading">Create your account</h2>
        <form className="signup__form">
          <label className="form__label" htmlFor="profile-pic">
            <input name="profile-pic" type="file" accept="image/png, image/jpeg" alt="profile pic" />
          </label>
          <label className="form__label" htmlFor="user-name">
            <input name="user-name" type="text" placeholder="User Name"/>
          </label>
          <label className="form__label" htmlFor="display-name">
            <input name="display-name" type="text" placeholder="Display Name" />
          </label>
          <label className="form__label" htmlFor="email">
            <input name="email" type="email" placeholder="Email" />
          </label>
          <label className="form__label" htmlFor="password">
            <input name="password" type="password" placeholder="Password" />
          </label>
          <button>Sign up</button>
        </form>
        <div className="signup__footer">
          <p>Have an account already?</p>
          <p>Log in</p>
        </div>
      </div>
    </div>
  ) 
};

export default SignUpModal;