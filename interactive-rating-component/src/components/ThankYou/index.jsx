import ThankYouIllustration from "../../images/illustration-thank-you.svg";
import "./index.scss";

const ThankYou = ({ rating }) => {
  return (
    <div className="thank-you-container">
      <img
        src={ThankYouIllustration}
        alt="Illustration"
        className="thank-you-illustration"
      />
      <p className="rating-display bubble">You selected {rating} out of 5</p>
      <h1>Thank you!</h1>
      <p className="body-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesistate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
