import StarIcon from "../../images/icon-star.svg";
import "./index.scss";

const RatingForm = ({ setRating, setHasSubmitted }) => {
  const handleFormSubmission = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
  };

  return (
    <div className="rating-form-container">
      <div className="bubble">
        <img src={StarIcon} alt="Star icon" />
      </div>
      <h1>How did we do?</h1>
      <p className="body-text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form className="rating-form" onSubmit={handleFormSubmission}>
        <fieldset className="rating-form-options">
          {[...Array(5)].map((value, index) => (
            <div key={index}>
              <input
                type="radio"
                name="rating"
                id={`rating-${index + 1}`}
                value={index + 1}
                onChange={(e) => setRating(Number(e.target.value))}
              />
              <label
                htmlFor={`rating-${index + 1}`}
                className="bubble rating-form-option"
              >
                {index + 1}
              </label>
            </div>
          ))}
        </fieldset>
        <button type="submit" className="cta form-submit-btn">SUBMIT</button>
      </form>
    </div>
  );
};

export default RatingForm;
