import "../styles/SignUpCard.css";

const SignUpCard = () => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__header">
          <h2>New to Twitter?</h2>
        </div>
        <div className="card__text">
          <p>Sign up now to get your own personalized timeline!</p>
        </div>
        <div className="card__button">
          <button><span className="button__text">Sign up</span></button>
        </div>
      </div>
    </div>
  )
};

export default SignUpCard;