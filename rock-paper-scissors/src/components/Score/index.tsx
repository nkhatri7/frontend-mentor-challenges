import { FC } from "react";
import { useGameData } from "../../context/GameContext";
import "./Score.scss";

const Score: FC = () => {
  const { score } = useGameData();

  return (
    <section className="score-container">
      <p className="score-title">SCORE</p>
      <span className="score">{score}</span>
    </section>
  );
};

export default Score;
