import { useState } from "react";
import "./App.scss";
import Card from "./components/Card";
import RatingForm from "./components/RatingForm";
import ThankYou from "./components/ThankYou";

const App = () => {
  const [rating, setRating] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  return (
    <div className="app-container">
      <Card>
        {hasSubmitted ? (
          <ThankYou rating={rating} />
        ) : (
          <RatingForm setRating={setRating} setHasSubmitted={setHasSubmitted} />
        )}
      </Card>
    </div>
  );
};

export default App;
