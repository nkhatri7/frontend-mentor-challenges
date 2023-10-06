import { FC } from "react";
import "./score.scss";

const Score: FC = () => {
  return (
    <section className="score-container">
      <p className="score-title">SCORE</p>
      <span className="score">0</span>
    </section>
  );
};

export default Score;
